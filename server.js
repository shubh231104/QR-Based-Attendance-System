const express = require('express');
const bodyParser = require('body-parser');
const QRCode = require('qrcode');
const { v4: uuidv4 } = require('uuid');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// In-memory storage (replace with database in production)
const sessions = new Map();
const attendanceRecords = new Map();

// Create a new attendance session
app.post('/api/sessions', async (req, res) => {
  try {
    const { name, description, date } = req.body;
    const sessionId = uuidv4();
    const sessionCode = Math.random().toString(36).substring(2, 8).toUpperCase();

    const session = {
      id: sessionId,
      code: sessionCode,
      name: name || 'Attendance Session',
      description: description || '',
      date: date || new Date().toISOString(),
      createdAt: new Date().toISOString(),
      active: true
    };

    sessions.set(sessionId, session);
    attendanceRecords.set(sessionId, []);

    // Generate QR code data URL
    const qrData = JSON.stringify({
      sessionId,
      code: sessionCode,
      name: session.name
    });

    const qrCodeUrl = await QRCode.toDataURL(qrData, {
      width: 400,
      margin: 2,
      color: {
        dark: '#000000',
        light: '#FFFFFF'
      }
    });

    res.json({
      success: true,
      session,
      qrCodeUrl
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get all sessions
app.get('/api/sessions', (req, res) => {
  const allSessions = Array.from(sessions.values());
  res.json({ success: true, sessions: allSessions });
});

// Get session details
app.get('/api/sessions/:id', (req, res) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ success: false, error: 'Session not found' });
  }

  const attendance = attendanceRecords.get(req.params.id) || [];
  res.json({ success: true, session, attendance });
});

// Mark attendance by scanning QR code
app.post('/api/attendance', (req, res) => {
  try {
    const { sessionId, code, userName, userEmail, userId } = req.body;

    if (!sessionId || !userName) {
      return res.status(400).json({
        success: false,
        error: 'Missing required fields'
      });
    }

    const session = sessions.get(sessionId);
    if (!session) {
      return res.status(404).json({
        success: false,
        error: 'Session not found'
      });
    }

    if (!session.active) {
      return res.status(400).json({
        success: false,
        error: 'Session is no longer active'
      });
    }

    if (code && code !== session.code) {
      return res.status(400).json({
        success: false,
        error: 'Invalid session code'
      });
    }

    const attendance = attendanceRecords.get(sessionId);

    // Check for duplicate attendance
    const existingRecord = attendance.find(
      record => record.userEmail === userEmail || record.userId === userId
    );

    if (existingRecord) {
      return res.status(400).json({
        success: false,
        error: 'Attendance already marked for this user'
      });
    }

    const record = {
      id: uuidv4(),
      sessionId,
      userName,
      userEmail: userEmail || '',
      userId: userId || '',
      timestamp: new Date().toISOString(),
      status: 'present'
    };

    attendance.push(record);

    res.json({
      success: true,
      message: 'Attendance marked successfully',
      record
    });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
});

// Get attendance records for a session
app.get('/api/attendance/:sessionId', (req, res) => {
  const attendance = attendanceRecords.get(req.params.sessionId);
  if (!attendance) {
    return res.status(404).json({
      success: false,
      error: 'Session not found'
    });
  }

  res.json({
    success: true,
    count: attendance.length,
    records: attendance
  });
});

// Toggle session active status
app.patch('/api/sessions/:id/toggle', (req, res) => {
  const session = sessions.get(req.params.id);
  if (!session) {
    return res.status(404).json({ success: false, error: 'Session not found' });
  }

  session.active = !session.active;
  sessions.set(req.params.id, session);

  res.json({ success: true, session });
});

// Export attendance as CSV
app.get('/api/attendance/:sessionId/export', (req, res) => {
  const session = sessions.get(req.params.sessionId);
  const attendance = attendanceRecords.get(req.params.sessionId);

  if (!session || !attendance) {
    return res.status(404).json({ success: false, error: 'Session not found' });
  }

  let csv = 'Name,Email,User ID,Timestamp,Status\n';
  attendance.forEach(record => {
    csv += `"${record.userName}","${record.userEmail}","${record.userId}","${record.timestamp}","${record.status}"\n`;
  });

  res.setHeader('Content-Type', 'text/csv');
  res.setHeader('Content-Disposition', `attachment; filename="attendance-${session.code}.csv"`);
  res.send(csv);
});

app.listen(PORT, () => {
  console.log(`QR Attendance System running on http://localhost:${PORT}`);
});
