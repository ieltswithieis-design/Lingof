# IELTS Mastery & International Testing Database

Welcome to the decoupled database directory for the **Lingofi IELTS Official Testing System**.

This folder contains all persistent test assets, question banks, candidate user credentials, and evaluation history. It is completely isolated from the frontend and backend UI application logic so you can easily take the database, backup, modify, inspect, or enrich it with additional tests without modifying application source code!

---

## Folder Structure

```
database/
├── README.md                          # Documentation and upload guide
├── users.json                         # User accounts (Admin, Teacher, Candidates)
├── test_results.json                  # Saved candidate exam submissions & TRF records
├── templates/                         # Templates & format definitions
│   ├── reading_text_format.txt       # Human-readable text format for uploading tests
│   └── test_upload_schema.json       # JSON Schema definition for automated imports
└── tests/                             # Core Question & Passage Banks
    ├── ielts_database.json            # 80 Modular Tests (Reading, Listening, Writing, Speaking)
    └── full_tests.json                # 20 Official 4-Skill Cambridge Mock Simulations
```

---

## Pre-Seeded Default Accounts

| Role | Email | Password | Permissions |
| :--- | :--- | :--- | :--- |
| **Director / Admin** | `admin@lingofi.org` | `admin123` | Full access, Database Studio, Upload Tests, Delete Tests |
| **Cambridge Teacher** | `teacher@cambridge.edu` | `teacher123` | Upload Tests, View Submissions, Database Studio |
| **Candidate Student** | `candidate@student.com` | `student123` | Take tests, view Official TRF certificates, view progress |

*(You can also sign up with any new account directly in the Login/Signup portal in the app!)*

---

## How to Upload Texts / Tests in the Database

You can upload new tests in two ways:

### 1. Via the Frontend "Database Studio / Test Uploader"
1. Log in as an Admin or Teacher (or click **"Database & Test Uploader"** in the top navigation).
2. Choose **Text / Markdown Paste** or **JSON Import**.
3. Paste your passage text and formatted questions (or click **"Load Template"** to auto-fill an example).
4. Click **"Verify & Upload to Database"**.
5. The test is instantly written to `database/tests/ielts_database.json` and immediately available in the frontend for candidates to take!

### 2. Via the Backend REST API
Send a `POST` request to `http://localhost:3000/api/tests/upload` with:
- `Content-Type: application/json`
- Body containing either the structured text in `textPayload` or the structured JSON object.

Example cURL:
```bash
curl -X POST http://localhost:3000/api/tests/upload \
  -H "Content-Type: application/json" \
  -d '{
    "section": "reading",
    "title": "Academic Reading: Marine Ecosystems",
    "passages": ["Passage text goes here..."],
    "questions": [
      {
        "type": "mcq",
        "q": "What is the primary subject?",
        "options": ["Oceans", "Forests", "Cities", "Deserts"],
        "answer": 0
      }
    ]
  }'
```

---

## Backing Up & Improving the Database
- Because everything in `database/` is clean JSON/text, you can open `database/tests/ielts_database.json` in any text editor, add more passages, improve questions, adjust answer keys, or duplicate sets.
- Any changes made to the database files will be served live by the backend API.

## Candidate account retention and export

Candidate signup records are retained while active and are automatically removed after 30 days without recorded activity. Cleanup runs when the server starts and then every hour. Director/Admin and Teacher accounts are not removed by this candidate-retention rule.

The Director Leads area exports the current signup records as an Excel-compatible UTF-8 CSV (recommended for Excel) or JSON. Passwords are never included in exports.
