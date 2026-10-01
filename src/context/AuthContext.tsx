import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  role: "admin" | "teacher" | "candidate";
  targetBand: number;
  createdAt?: string;
  lastActivityAt?: string | null;
  lastLoginAt?: string | null;
}

interface AuthContextType {
  user: UserProfile | null;
  token: string | null;
  isAuthenticated: boolean;
  isAdminOrTeacher: boolean;
  login: (email: string, password: string) => Promise<{ success: boolean; error?: string }>;
  signup: (data: { name: string; email: string; whatsapp: string; password: string; role?: "admin" | "teacher" | "candidate"; targetBand?: number }) => Promise<{ success: boolean; error?: string }>;
  logout: () => void;
  openAuthModal: (mode?: "login" | "signup") => void;
  closeAuthModal: () => void;
  requireSignup: () => void;
  isAuthModalOpen: boolean;
  authModalMode: "login" | "signup";
  isAuthModalRequired: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  // Authentication is intentionally session-only. A fresh site load starts logged out.
  const [user, setUser] = useState<UserProfile | null>(null);
  const [token, setToken] = useState<string | null>(null);

  // Restore the current browser session after a refresh. We intentionally use
  // sessionStorage rather than localStorage so closing the browser/session ends
  // the login, while a normal page refresh does not log the user out.
  useEffect(() => {
    try {
      localStorage.removeItem("ielts_mastery_user");
      localStorage.removeItem("ielts_mastery_token");
      const savedUser = sessionStorage.getItem("lingofi_auth_user");
      const savedToken = sessionStorage.getItem("lingofi_auth_token");
      if (!savedUser || !savedToken) return;
      const parsedUser = JSON.parse(savedUser) as UserProfile;
      setUser(parsedUser);
      setToken(savedToken);

      // Revalidate the session against the server. If the server has no session
      // (for example after a server restart), clear the stale browser session.
      fetch("/api/auth/me", { headers: { Authorization: `Bearer ${savedToken}` } })
        .then(async (res) => {
          if (!res.ok) throw new Error("Session expired");
          const data = await res.json();
          if (!data?.authenticated || !data?.user) throw new Error("Session expired");
          setUser(data.user);
          sessionStorage.setItem("lingofi_auth_user", JSON.stringify(data.user));
        })
        .catch(() => {
          setUser(null);
          setToken(null);
          sessionStorage.removeItem("lingofi_auth_user");
          sessionStorage.removeItem("lingofi_auth_token");
        });
    } catch {
      setUser(null);
      setToken(null);
      try {
        sessionStorage.removeItem("lingofi_auth_user");
        sessionStorage.removeItem("lingofi_auth_token");
      } catch {}
    }
  }, []);

  const [isAuthModalOpen, setIsAuthModalOpen] = useState<boolean>(false);
  const [authModalMode, setAuthModalMode] = useState<"login" | "signup">("login");
  const [isAuthModalRequired, setIsAuthModalRequired] = useState<boolean>(false);

  // Keep the 30-day candidate retention timer tied to real activity while the
  // account is actively being used, not just to the last successful login.
  useEffect(() => {
    if (!token) return;
    const sendActivity = async () => {
      try {
        const res = await fetch("/api/auth/activity", {
          method: "POST",
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) return;
        const data = await res.json();
        if (data?.lastActivityAt) {
          setUser(prev => prev ? { ...prev, lastActivityAt: data.lastActivityAt } : prev);
        }
      } catch {}
    };
    void sendActivity();
    const interval = window.setInterval(() => { void sendActivity(); }, 10 * 60 * 1000);
    return () => window.clearInterval(interval);
  }, [token]);

  const login = async (email: string, password: string): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await fetch("/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || "Failed to log in." };
      }
      setUser(data.user);
      setToken(data.token);
      sessionStorage.setItem("lingofi_auth_user", JSON.stringify(data.user));
      sessionStorage.setItem("lingofi_auth_token", data.token);
      setIsAuthModalOpen(false);
      setIsAuthModalRequired(false);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || "Network error logging in." };
    }
  };

  const signup = async (payload: {
    name: string;
    email: string;
    whatsapp: string;
    password: string;
    role?: "admin" | "teacher" | "candidate";
    targetBand?: number;
  }): Promise<{ success: boolean; error?: string }> => {
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok || !data.success) {
        return { success: false, error: data.error || "Failed to create account." };
      }
      setUser(data.user);
      setToken(data.token);
      sessionStorage.setItem("lingofi_auth_user", JSON.stringify(data.user));
      sessionStorage.setItem("lingofi_auth_token", data.token);
      setIsAuthModalOpen(false);
      setIsAuthModalRequired(false);
      return { success: true };
    } catch (err: any) {
      return { success: false, error: err.message || "Network error signing up." };
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    sessionStorage.removeItem("lingofi_auth_user");
    sessionStorage.removeItem("lingofi_auth_token");
  };

  const openAuthModal = (mode: "login" | "signup" = "login") => {
    setAuthModalMode(mode);
    setIsAuthModalOpen(true);
  };

  const closeAuthModal = () => {
    if (isAuthModalRequired) return;
    setIsAuthModalOpen(false);
  };

  const requireSignup = () => {
    setAuthModalMode("signup");
    setIsAuthModalRequired(true);
    setIsAuthModalOpen(true);
  };

  const isAdminOrTeacher = user?.role === "admin" || user?.role === "teacher";

  return (
    <AuthContext.Provider
      value={{
        user,
        token,
        isAuthenticated: !!user,
        isAdminOrTeacher,
        login,
        signup,
        logout,
        openAuthModal,
        closeAuthModal,
        requireSignup,
        isAuthModalOpen,
        authModalMode,
        isAuthModalRequired,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
