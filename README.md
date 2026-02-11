# QR-Based Attendance System

A modern, web-based attendance tracking system using QR codes. Perfect for classrooms, meetings, events, and workshops.

## Features

- **QR Code Generation**: Create unique QR codes for each attendance session
- **Real-time Attendance Tracking**: Mark attendance by scanning QR codes or entering session IDs
- **Session Management**: Create, view, and manage multiple attendance sessions
- **Attendance Records**: View detailed attendance lists with timestamps
- **CSV Export**: Export attendance data for record-keeping and analysis
- **Active/Inactive Sessions**: Control which sessions accept new attendance entries
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## How It Works

1. **Create a Session**: The admin creates an attendance session (e.g., "Monday Morning Class")
2. **Generate QR Code**: System generates a unique QR code and session code
3. **Display QR Code**: Display or project the QR code for attendees to scan
4. **Mark Attendance**: Attendees scan the QR code or manually enter the session ID with their details
5. **View Records**: Admin can view attendance records and export to CSV

## Installation

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Setup

1. Install dependencies:
```bash
npm install
```

2. Start the server:
```bash
npm start
```

3. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

### Creating a Session

1. Go to the "Create Session" tab
2. Enter session details (name, description, date)
3. Click "Generate QR Code"
4. Download or display the QR code for attendees

### Marking Attendance

**Option 1: Scan QR Code**
- Scan the QR code with your phone camera or QR scanner app
- The session ID will be automatically filled
- Enter your name and other details
- Click "Mark Attendance"

**Option 2: Manual Entry**
- Go to the "Scan QR Code" tab
- Enter the session ID manually
- Fill in your name and details
- Click "Mark Attendance"

### Managing Sessions

1. Go to the "View Sessions" tab
2. See all created sessions with their status
3. Click "View Attendance" to see who attended
4. Click "Export CSV" to download attendance records
5. Toggle session status (Active/Inactive) to control new entries

## API Endpoints

### Sessions

- `POST /api/sessions` - Create a new session
- `GET /api/sessions` - Get all sessions
- `GET /api/sessions/:id` - Get session details
- `PATCH /api/sessions/:id/toggle` - Toggle session active status

### Attendance

- `POST /api/attendance` - Mark attendance
- `GET /api/attendance/:sessionId` - Get attendance records
- `GET /api/attendance/:sessionId/export` - Export attendance as CSV

## Data Storage

Currently uses in-memory storage (Map objects). For production use, replace with:
- PostgreSQL/MySQL for relational data
- MongoDB for document storage
- Redis for caching

## Security Considerations

For production deployment:

1. Add authentication for session creation
2. Implement rate limiting to prevent abuse
3. Add HTTPS/SSL encryption
4. Store data in a persistent database
5. Add session expiration logic
6. Implement user roles (admin, attendee)
7. Add IP-based duplicate detection

## Customization

### Styling
Edit the CSS in `/public/index.html` to match your branding

### QR Code Options
Modify QR code settings in `server.js` (line 38-45):
```javascript
const qrCodeUrl = await QRCode.toDataURL(qrData, {
  width: 400,
  margin: 2,
  color: {
    dark: '#000000',
    light: '#FFFFFF'
  }
});
```

## Troubleshooting

**Port already in use**
- Change the PORT in server.js or set environment variable:
```bash
PORT=8080 npm start
```

**QR code not scanning**
- Ensure QR code image is clear and well-lit
- Try increasing the QR code size in server.js

**Duplicate attendance warnings**
- System checks for duplicate email or user ID
- Each person can only mark attendance once per session

## Future Enhancements

- Mobile app for scanning QR codes
- Email notifications
- Attendance analytics and reports
- Integration with Google Classroom/LMS
- Geolocation verification
- Facial recognition integration
- Multi-language support

## License

MIT License - Free to use and modify

## Support

For issues and questions, please create an issue in the repository.
