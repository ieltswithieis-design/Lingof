import React from "react";

interface Props { children: React.ReactNode; }
interface State { error: Error | null; }

export class RuntimeErrorBoundary extends React.Component<Props, State> {
  state: State = { error: null };

  static getDerivedStateFromError(error: Error): State {
    return { error };
  }

  componentDidCatch(error: Error, info: React.ErrorInfo) {
    console.error("LingoFi runtime error:", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;
    return (
      <div style={{minHeight:"100vh",display:"flex",alignItems:"center",justifyContent:"center",padding:"24px",background:"#f8fafc",fontFamily:"Arial,sans-serif"}}>
        <div style={{maxWidth:"760px",width:"100%",background:"white",border:"1px solid #e2e8f0",borderRadius:"18px",padding:"28px",boxShadow:"0 15px 40px rgba(15,23,42,.12)"}}>
          <h1 style={{margin:"0 0 10px",fontSize:"24px",color:"#0f172a"}}>LingoFi could not load this page</h1>
          <p style={{margin:"0 0 16px",color:"#475569",lineHeight:1.6}}>The application encountered a runtime error. Your database data has not been changed.</p>
          <pre style={{whiteSpace:"pre-wrap",overflowWrap:"anywhere",background:"#f1f5f9",padding:"14px",borderRadius:"10px",fontSize:"12px",color:"#334155"}}>{this.state.error.message}</pre>
          <button onClick={() => window.location.reload()} style={{marginTop:"16px",border:0,borderRadius:"10px",padding:"10px 16px",fontWeight:700,background:"#01cfe1",color:"#06182a",cursor:"pointer"}}>Reload LingoFi</button>
        </div>
      </div>
    );
  }
}
