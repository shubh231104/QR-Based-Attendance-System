# Visual Guide - QR Attendance System

## 🎯 Quick Start (3 Steps)

```
┌─────────────────────────────────────────┐
│  Step 1: Open VS Code                   │
│  File → Open Folder → Select this folder│
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  Step 2: Open Terminal                  │
│  Press: Ctrl + ` (backtick)             │
└─────────────────────────────────────────┘
              ↓
┌─────────────────────────────────────────┐
│  Step 3: Start Server                   │
│  Type: npm start                        │
│  Then: Open http://localhost:3000       │
└─────────────────────────────────────────┘
```

---

## 📱 System Workflow

```
┌───────────────────────────────────────────────────────┐
│                    ADMINISTRATOR                      │
└───────────────────────────────────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────┐
        │  1. Create Session        │
        │  "Monday Morning Class"   │
        └───────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────┐
        │  2. Generate QR Code      │
        │  Session ID: abc-123      │
        └───────────────────────────┘
                        │
                        ▼
        ┌───────────────────────────┐
        │  3. Display QR Code       │
        │  [QR CODE IMAGE]          │
        └───────────────────────────┘
                        │
        ┌───────────────┴────────────────┐
        │                                │
        ▼                                ▼
┌───────────────┐              ┌───────────────┐
│   STUDENT A   │              │   STUDENT B   │
│               │              │               │
│  Scans QR     │              │  Scans QR     │
│  Enters Name  │              │  Enters Name  │
│  Marks ✓      │              │  Marks ✓      │
└───────────────┘              └───────────────┘
        │                                │
        └────────────────┬───────────────┘
                         ▼
        ┌────────────────────────────────┐
        │   ATTENDANCE RECORDED          │
        │   - Student A: 9:00 AM         │
        │   - Student B: 9:01 AM         │
        └────────────────────────────────┘
                         │
                         ▼
        ┌────────────────────────────────┐
        │   Admin Views & Exports CSV    │
        └────────────────────────────────┘
```

---

## 🖥️ VS Code Interface Layout

```
┌──────────────────────────────────────────────────────────┐
│  VS Code Window                                          │
│                                                          │
│  ┌─────────────────────┬──────────────────────────────┐ │
│  │ Explorer            │  server.js                   │ │
│  │                     │                              │ │
│  │ 📁 qr-attendance    │  const express = require...  │ │
│  │   📄 server.js      │  const app = express();      │ │
│  │   📄 package.json   │  const PORT = 3000;          │ │
│  │   📁 public         │                              │ │
│  │     📄 index.html   │  app.post('/api/sessions')   │ │
│  │   📄 README.md      │  ...                         │ │
│  │                     │                              │ │
│  └─────────────────────┴──────────────────────────────┘ │
│                                                          │
│  ┌───────────────────────────────────────────────────┐  │
│  │ TERMINAL                                          │  │
│  │                                                   │  │
│  │ $ npm start                                       │  │
│  │ QR Attendance System running on                   │  │
│  │ http://localhost:3000                             │  │
│  │                                                   │  │
│  └───────────────────────────────────────────────────┘  │
└──────────────────────────────────────────────────────────┘
```

---

## 🌐 Web Interface (3 Main Tabs)

```
┌────────────────────────────────────────────────────────┐
│  QR Attendance System                                  │
├────────────────────────────────────────────────────────┤
│                                                        │
│  [Create Session] [Scan QR Code] [View Sessions]      │
│                                                        │
├────────────────────────────────────────────────────────┤
│                                                        │
│  TAB 1: CREATE SESSION                                 │
│  ┌──────────────────────────────────────────────────┐ │
│  │ Session Name: [Monday Morning Class_________]    │ │
│  │ Description:  [Computer Science 101_________]    │ │
│  │ Date:         [2024-01-15__________________]     │ │
│  │                                                  │ │
│  │ [Generate QR Code]                               │ │
│  │                                                  │ │
│  │        ┌────────────┐                            │ │
│  │        │  QR CODE   │  Session Code: ABC123      │ │
│  │        │  [█▀▀▀█]   │                            │ │
│  │        │  [▀███▀]   │  [Download QR Code]        │ │
│  │        └────────────┘                            │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────┐
│  TAB 2: SCAN QR CODE (Mark Attendance)                 │
│  ┌──────────────────────────────────────────────────┐ │
│  │ Session ID: [abc-123-xyz_________________]       │ │
│  │ Your Name:  [John Doe____________________]       │ │
│  │ Email:      [john@example.com____________]       │ │
│  │ Student ID: [12345_______________________]       │ │
│  │                                                  │ │
│  │ [Mark Attendance]                                │ │
│  │                                                  │ │
│  │ ✓ Attendance marked successfully!                │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

```
┌────────────────────────────────────────────────────────┐
│  TAB 3: VIEW SESSIONS                                  │
│  ┌──────────────────────────────────────────────────┐ │
│  │ Monday Morning Class                             │ │
│  │ Code: ABC123  |  Status: [Active]                │ │
│  │ Date: 2024-01-15                                 │ │
│  │                                                  │ │
│  │ [View Attendance] [Deactivate] [Export CSV]      │ │
│  │                                                  │ │
│  │ Attendance Records (2):                          │ │
│  │ • John Doe - john@example.com - 9:00 AM          │ │
│  │ • Jane Smith - jane@example.com - 9:02 AM        │ │
│  └──────────────────────────────────────────────────┘ │
└────────────────────────────────────────────────────────┘
```

---

## 📊 Data Flow

```
Browser (Frontend)
      │
      │ HTTP Request
      ▼
  server.js (Backend)
      │
      │ Process & Generate QR
      ▼
  In-Memory Storage
  ┌─────────────────┐
  │ Sessions Map    │ ← Stores session info
  │ Attendance Map  │ ← Stores attendance records
  └─────────────────┘
      │
      │ Response
      ▼
Browser (Shows QR/Results)
```

---

## 🎮 Control Panel (What You Can Do)

```
┌───────────────────────────────────────────────┐
│  ADMIN CONTROLS                               │
├───────────────────────────────────────────────┤
│  ✓ Create new sessions                        │
│  ✓ Generate QR codes                          │
│  ✓ View all sessions                          │
│  ✓ View attendance lists                      │
│  ✓ Export to CSV                              │
│  ✓ Activate/Deactivate sessions               │
└───────────────────────────────────────────────┘

┌───────────────────────────────────────────────┐
│  STUDENT/ATTENDEE ACTIONS                     │
├───────────────────────────────────────────────┤
│  ✓ Scan QR code                               │
│  ✓ Enter session ID manually                  │
│  ✓ Mark attendance with name & details        │
│  ✓ Receive confirmation                       │
└───────────────────────────────────────────────┘
```

---

## 🚀 Keyboard Shortcuts Reference

```
┌──────────────────────┬──────────────────────────┐
│  Action              │  Shortcut                │
├──────────────────────┼──────────────────────────┤
│  Open Terminal       │  Ctrl + `                │
│  Toggle Sidebar      │  Ctrl + B                │
│  Quick File Open     │  Ctrl + P                │
│  Start/Debug         │  F5                      │
│  Save All            │  Ctrl + K, S             │
│  Format Code         │  Shift + Alt + F         │
│  Find in Files       │  Ctrl + Shift + F        │
│  Stop Server         │  Ctrl + C (in terminal)  │
└──────────────────────┴──────────────────────────┘
```

---

## 📁 File Structure

```
qr-attendance-system/
│
├── 📄 server.js              ← Main backend server
├── 📄 package.json           ← Dependencies & scripts
├── 📄 README.md              ← Full documentation
├── 📄 QUICK_START.md         ← Quick start guide
├── 📄 VS_CODE_GUIDE.md       ← This guide
├── 📄 VISUAL_GUIDE.md        ← Visual diagrams
├── 📄 .gitignore             ← Git ignore file
│
├── 📁 public/
│   └── 📄 index.html         ← Frontend interface
│
├── 📁 .vscode/
│   ├── 📄 launch.json        ← Debug config
│   ├── 📄 tasks.json         ← Task automation
│   └── 📄 settings.json      ← Editor settings
│
└── 📁 node_modules/          ← Dependencies (auto-created)
```

---

## 🎯 Common Use Cases

### Use Case 1: Classroom Attendance
```
Teacher creates "Math Class - Week 1"
    ↓
Displays QR on projector
    ↓
30 students scan & mark attendance
    ↓
Teacher exports CSV for records
```

### Use Case 2: Meeting Check-in
```
Organizer creates "Team Standup - Jan 15"
    ↓
Shares QR code in chat
    ↓
Team members scan from their phones
    ↓
Real-time attendance tracking
```

### Use Case 3: Event Registration
```
Event manager creates "Workshop Session 1"
    ↓
Prints QR code at entrance
    ↓
Attendees scan on arrival
    ↓
Export attendee list after event
```

---

## ✅ Success Checklist

After starting the server, you should:

- [ ] See "QR Attendance System running on http://localhost:3000" in terminal
- [ ] Be able to open http://localhost:3000 in browser
- [ ] See the purple gradient interface with 3 tabs
- [ ] Be able to create a session and see a QR code
- [ ] Be able to mark attendance
- [ ] Be able to view sessions and attendance records

---

## 🆘 Help! Something's Wrong

### Terminal says "npm: command not found"
👉 Install Node.js from https://nodejs.org/

### Can't open http://localhost:3000
👉 Make sure server is running (see "running on..." message)

### Changes not showing in browser
👉 Refresh browser (F5 or Ctrl + R)

### Server won't start (port in use)
👉 Change PORT in server.js to 3001 or 8080

---

**You're all set! Happy tracking! 🎉**
