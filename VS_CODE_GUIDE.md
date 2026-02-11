# Running QR Attendance System in VS Code

## Method 1: Using VS Code's Integrated Terminal (Recommended)

### Step 1: Open the Project in VS Code

1. Open VS Code
2. Click **File** → **Open Folder**
3. Navigate to and select this project folder
4. Click **Select Folder** or **Open**

### Step 2: Open the Integrated Terminal

- Press **Ctrl + `** (backtick) on Windows/Linux
- Or press **Cmd + `** on Mac
- Or go to **View** → **Terminal**

### Step 3: Start the Server

In the terminal, type:
```bash
npm start
```

You should see:
```
QR Attendance System running on http://localhost:3000
```

### Step 4: Open in Browser

- Hold **Ctrl** (or **Cmd** on Mac) and click the link `http://localhost:3000` in the terminal
- Or manually open your browser and go to `http://localhost:3000`

---

## Method 2: Using VS Code Run Button

### Step 1: Open server.js

- Click on `server.js` in the VS Code file explorer

### Step 2: Run with Node.js

- Press **F5** or click **Run** → **Start Debugging**
- If prompted, select **Node.js** as the environment

### Step 3: Open Browser

- Go to `http://localhost:3000`

---

## Method 3: Using VS Code Tasks (Most Professional)

### Step 1: Create a Launch Configuration

Already created for you! Just press **F5** to run.

---

## Troubleshooting in VS Code

### Problem: "npm: command not found"

**Solution:**
1. Make sure Node.js is installed
2. Download from: https://nodejs.org/
3. Restart VS Code after installation
4. Check installation:
   ```bash
   node --version
   npm --version
   ```

### Problem: Port 3000 is already in use

**Solution:**
1. Stop the other process using port 3000
2. Or change the port in `server.js`:
   ```javascript
   const PORT = process.env.PORT || 3001;
   ```

### Problem: "Cannot find module 'express'"

**Solution:**
Run in terminal:
```bash
npm install
```

### Problem: Terminal not showing

**Solution:**
- Press **Ctrl + `** (or **Cmd + `**)
- Or go to **View** → **Terminal**

---

## VS Code Extensions (Optional but Helpful)

Install these extensions for better development:

1. **Live Server** - For auto-refresh (but not needed, we have our server)
2. **REST Client** - For testing API endpoints
3. **ES7+ React/Redux/React-Native snippets** - For JavaScript
4. **Prettier** - Code formatter
5. **GitLens** - Git integration

---

## Quick Reference Commands

| Action | Command |
|--------|---------|
| Open Terminal | `Ctrl + `` ` |
| Start Server | `npm start` |
| Stop Server | `Ctrl + C` (in terminal) |
| Clear Terminal | `cls` (Windows) or `clear` (Mac/Linux) |
| Run/Debug | `F5` |
| Open Browser | `Ctrl + Click` on URL in terminal |

---

## Development Workflow in VS Code

1. **Open project** in VS Code
2. **Open terminal** (`Ctrl + `` `)
3. **Start server** (`npm start`)
4. **Edit files** (changes auto-save if enabled)
5. **Refresh browser** to see changes
6. **Stop server** when done (`Ctrl + C`)

---

## Keyboard Shortcuts

- **Ctrl + `** - Toggle terminal
- **Ctrl + B** - Toggle sidebar
- **Ctrl + P** - Quick file open
- **Ctrl + Shift + P** - Command palette
- **Ctrl + /** - Comment line
- **Alt + Click** - Multiple cursors
- **Ctrl + D** - Select next occurrence
- **F5** - Start debugging

---

## Hot Tips for VS Code

### Enable Auto-Save
1. Go to **File** → **Auto Save** (check it)
2. Your changes will save automatically!

### Split Terminal
1. Click the **Split Terminal** icon in terminal toolbar
2. Run server in one, commands in another

### View in Browser Side-by-Side
1. Drag VS Code to left half of screen
2. Drag browser to right half
3. See code and result together!

---

## Next Steps After Starting

Once the server is running:

1. ✅ Open http://localhost:3000
2. ✅ Create a test session in "Create Session" tab
3. ✅ Try marking attendance in "Scan QR Code" tab
4. ✅ View sessions in "View Sessions" tab
5. ✅ Test CSV export

---

## Stop the Server

To stop the server:
1. Click in the terminal where server is running
2. Press **Ctrl + C**
3. Confirm if prompted

---

## Common VS Code Features for This Project

### View File in Browser
- Right-click `public/index.html`
- But remember: You need the server running for full functionality!

### Search in Project
- **Ctrl + Shift + F** - Search all files
- Useful for finding where features are implemented

### Format Code
- **Shift + Alt + F** - Format current file
- Makes code look neat and organized

---

## Video Tutorial Summary

If you prefer video instructions:

1. Open VS Code
2. Open this folder
3. Press **Ctrl + `** to open terminal
4. Type **npm start** and press Enter
5. **Ctrl + Click** on http://localhost:3000
6. Enjoy your attendance system!

That's it! 🎉
