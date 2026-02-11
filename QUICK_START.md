# Quick Start Guide

## Start the Server

```bash
npm start
```

The server will start on http://localhost:3000

## Usage Flow

### For Administrators/Teachers:

1. **Create a Session**
   - Open http://localhost:3000
   - Click "Create Session" tab
   - Fill in session details:
     - Name: "Monday Morning Class"
     - Description: "Computer Science 101"
     - Date: Select date
   - Click "Generate QR Code"
   - A QR code will appear with a session code (e.g., "ABC123")

2. **Display the QR Code**
   - Download the QR code image
   - Display it on screen/projector
   - Or share the session ID directly

3. **View Attendance**
   - Go to "View Sessions" tab
   - Click "View Attendance" on any session
   - See real-time attendance updates
   - Click "Export CSV" to download records

### For Attendees/Students:

1. **Scan QR Code**
   - Use phone camera or any QR scanner app
   - Open the link or copy the session ID

2. **Mark Attendance**
   - Go to "Scan QR Code" tab
   - Paste the session ID (if scanned) or enter manually
   - Fill in your details:
     - Name: Your full name
     - Email: your.email@example.com (optional)
     - ID: Student/Employee ID (optional)
   - Click "Mark Attendance"
   - You'll see a success message

## Example Session Flow

1. Teacher creates session "Week 1 Lecture"
2. System generates QR code with session ID: `a1b2c3d4-e5f6-7890-abcd-ef1234567890`
3. Teacher displays QR code on projector
4. Students scan QR code or enter session ID
5. Students enter their name and ID
6. System records attendance with timestamp
7. Teacher views attendance list and exports to CSV

## Tips

- Each person can only mark attendance once per session
- Deactivate sessions to prevent late entries
- Export CSV files for permanent records
- Use the session code for quick verbal sharing
- Session IDs are unique and secure

## Troubleshooting

**"Session not found" error**
- Check the session ID is correct
- Verify the session exists in "View Sessions"

**"Attendance already marked" error**
- This person already marked attendance for this session
- Check if email or ID was used before

**Can't mark attendance**
- Check if session is Active (not Inactive)
- Admin can toggle session status in "View Sessions"
