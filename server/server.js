import express from 'express';
import sqlite3 from 'sqlite3';
import cors from 'cors';
import session from 'express-session';

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const db = new sqlite3.Database(':memory:');

db.serialize(() => {
  db.run('CREATE TABLE users (id INTEGER PRIMARY KEY AUTOINCREMENT, username TEXT, password TEXT, isAdmin INT)');
  db.run('CREATE TABLE news (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, content TEXT)');
  db.run('CREATE TABLE divisions (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT)');
  db.run('CREATE TABLE members (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, division_id INTEGER, FOREIGN KEY(division_id) REFERENCES divisions(id))');
  db.run('CREATE TABLE research (id INTEGER PRIMARY KEY AUTOINCREMENT, cover TEXT, title TEXT, date TEXT, link TEXT)');
  db.run('CREATE TABLE syntax_reports (id INTEGER PRIMARY KEY AUTOINCREMENT, cover TEXT, title TEXT, year INTEGER)');

  const stmt = db.prepare('INSERT INTO users (username, password, isAdmin) VALUES (?, ?, ?)');
  stmt.run('admin', 'adminpass', 1);
  stmt.finalize();
});

app.use(session({
  secret: 'your_secret_key',
  resave: false,
  saveUninitialized: true,
}));

function requireAdmin(req, res, next) {
  if (req.session && req.session.isAdmin) {
    return next();
  } else {
    return res.status(401).json({ error: 'Unauthorized' });
  }
}

app.post('/login', (req, res) => {
  const { username, password } = req.body;
  db.get('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, row) => {
    if (err || !row) {
      return res.status(401).json({ error: 'Authentication failed' });
    }
    req.session.isAdmin = row.isAdmin === 1;
    res.json({ message: 'Login successful' });
  });
});

// News endpoints
app.post('/news', requireAdmin, (req, res) => {
  const { title, content } = req.body;
  const stmt = db.prepare('INSERT INTO news (title, content) VALUES (?, ?)');
  stmt.run(title, content, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/news', (req, res) => {
  db.all('SELECT * FROM news', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Divisions and Members endpoints
app.post('/divisions', requireAdmin, (req, res) => {
  const { name } = req.body;
  const stmt = db.prepare('INSERT INTO divisions (name) VALUES (?)');
  stmt.run(name, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/divisions', (req, res) => {
  db.all('SELECT * FROM divisions', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

app.post('/members', requireAdmin, (req, res) => {
  const { name, division_id } = req.body;
  const stmt = db.prepare('INSERT INTO members (name, division_id) VALUES (?, ?)');
  stmt.run(name, division_id, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/members', (req, res) => {
  db.all('SELECT * FROM members', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Research data endpoints
app.post('/research', requireAdmin, (req, res) => {
  const { cover, title, date, link } = req.body;
  const stmt = db.prepare('INSERT INTO research (cover, title, date, link) VALUES (?, ?, ?, ?)');
  stmt.run(cover, title, date, link, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/research', (req, res) => {
  db.all('SELECT * FROM research', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Syntax reports endpoints
app.post('/syntax', requireAdmin, (req, res) => {
  const { cover, title, year } = req.body;
  const stmt = db.prepare('INSERT INTO syntax_reports (cover, title, year) VALUES (?, ?, ?)');
  stmt.run(cover, title, year, function (err) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json({ id: this.lastID });
  });
  stmt.finalize();
});

app.get('/syntax', (req, res) => {
  db.all('SELECT * FROM syntax_reports', [], (err, rows) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    res.json(rows);
  });
});

// Handle root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the server');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
