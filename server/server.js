import express from 'express';
import cors from 'cors';
import session from 'express-session';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import multer from 'multer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"],
      styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https://fonts.gstatic.com", "data:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'self'"]
    }
  }
}));

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
});

// Define your models with BLOB fields for images
const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
});

const News = sequelize.define('News', {
  title: { type: DataTypes.STRING, allowNull: false },
  picture: { type: DataTypes.BLOB('long') }, // Store image as BLOB
  content: { type: DataTypes.TEXT, allowNull: false },
});

const Division = sequelize.define('Division', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false }, 
});

const Member = sequelize.define('Member', {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  name: { type: DataTypes.STRING, allowNull: false },
  photo: { type: DataTypes.BLOB('long') }, // Store image as BLOB
  divisionId: {
    type: DataTypes.INTEGER,
    references: {
      model: Division,
      key: 'id',
    },
  },
});

const Research = sequelize.define('Research', {
  cover: { type: DataTypes.BLOB('long') }, // Store image as BLOB
  title: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.DATE },
  link: { type: DataTypes.STRING },
});

const SyntaxReport = sequelize.define('SyntaxReport', {
  cover: { type: DataTypes.BLOB('long') }, // Store image as BLOB
  title: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
  link: { type: DataTypes.STRING }
});

const Gallery = sequelize.define('Gallery', {
  title: { type: DataTypes.STRING, allowNull: false },
  photo: { type: DataTypes.BLOB('long') } // Store image as BLOB
});

// Sync database
sequelize.sync({ force: true }).then(() => {
  const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
  User.findOrCreate({
    where: { username: process.env.ADMIN_USERNAME },
    defaults: { password: hashedPassword, isAdmin: true }
  }).catch(error => console.error('Error creating admin user:', error));
}).catch(error => console.error('Error syncing database:', error));

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: process.env.NODE_ENV === 'production',
    httpOnly: true,
    maxAge: 60000,
  },
}));

// Helper function to handle image file upload
const storage = multer.memoryStorage(); // Store image in memory buffer
const upload = multer({ storage: storage });

// -- Route for Divisions
app.post('/divisions', async (req, res) => {
  const { name, headOfDivision } = req.body;
  try {
    const division = await Division.create({ name, headOfDivision });
    res.json({ id: division.id });
  } catch (err) {
    console.error('Error creating division:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/divisions', async (req, res) => {
  try {
    const divisions = await Division.findAll();
    res.json(divisions);
  } catch (err) {
    console.error('Error fetching divisions:', err);
    res.status(500).json({ error: err.message });
  }
});

// -- Route for Members
app.post('/members', upload.single('photo'), async (req, res) => {
  const { name, divisionId } = req.body;
  const photo = req.file ? req.file.buffer : null; // Store image as binary data
  try {
    const member = await Member.create({ name, divisionId, photo });
    res.json({ id: member.id });
  } catch (err) {
    console.error('Error creating member:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/members', async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    console.error('Error fetching members:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/members/:id/photo', async (req, res) => {
  try {
    const member = await Member.findByPk(req.params.id);
    if (member && member.photo) {
      res.set('Content-Type', 'image/jpeg');
      res.send(member.photo);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (err) {
    console.error('Error fetching member photo:', err);
    res.status(500).json({ error: err.message });
  }
});

// -- Route for Syntax Reports
app.post('/syntax', upload.single('cover'), async (req, res) => {
  const { title, year, link } = req.body;
  const cover = req.file ? req.file.buffer : null; // Store image as binary data
  try {
    const syntaxReport = await SyntaxReport.create({ cover, title, year, link });
    res.json({ id: syntaxReport.id });
  } catch (err) {
    console.error('Error creating syntax report:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/syntax', async (req, res) => {
  try {
    const syntaxReports = await SyntaxReport.findAll();
    res.json(syntaxReports);
  } catch (err) {
    console.error('Error fetching syntax reports:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/syntax/:id/cover', async (req, res) => {
  try {
    const syntaxReport = await SyntaxReport.findByPk(req.params.id);
    if (syntaxReport && syntaxReport.cover) {
      res.set('Content-Type', 'image/jpeg');
      res.send(syntaxReport.cover);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (err) {
    console.error('Error fetching syntax report cover:', err);
    res.status(500).json({ error: err.message });
  }
});

// -- Route for Researches
app.post('/research', upload.single('cover'), async (req, res) => {
  const { title, date, link } = req.body;
  const cover = req.file ? req.file.buffer : null; // Store image as binary data
  try {
    const research = await Research.create({ cover, title, date, link });
    res.json({ id: research.id });
  } catch (err) {
    console.error('Error creating research:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/research', async (req, res) => {
  try {
    const research = await Research.findAll();
    res.json(research);
  } catch (err) {
    console.error('Error fetching research:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/research/:id/cover', async (req, res) => {
  try {
    const research = await Research.findByPk(req.params.id);
    if (research && research.cover) {
      res.set('Content-Type', 'image/jpeg');
      res.send(research.cover);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (err) {
    console.error('Error fetching research cover:', err);
    res.status(500).json({ error: err.message });
  }
});

// -- Route for News
app.post('/news', upload.single('picture'), async (req, res) => {
  const { title, content } = req.body;
  const picture = req.file ? req.file.buffer : null; // Store image as binary data
  try {
    const news = await News.create({ title, picture, content });
    res.json({ id: news.id });
  } catch (err) {
    console.error('Error creating news:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/news', async (req, res) => {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (err) {
    console.error('Error fetching news:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/news/:id/picture', async (req, res) => {
  try {
    const news = await News.findByPk(req.params.id);
    if (news && news.picture) {
      res.set('Content-Type', 'image/jpeg');
      res.send(news.picture);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (err) {
    console.error('Error fetching news picture:', err);
    res.status(500).json({ error: err.message });
  }
});

// -- Route for IGallery
app.post('/gallery', upload.single('photo'), async (req, res) => {
  const { title } = req.body;
  const photo = req.file ? req.file.buffer : null; // Store image as binary data
  try {
    const gallery = await Gallery.create({ title, photo });
    res.json({ id: gallery.id });
  } catch (err) {
    console.error('Error creating gallery:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/gallery', async (req, res) => {
  try {
    const gallery = await Gallery.findAll();
    res.json(gallery);
  } catch (err) {
    console.error('Error fetching gallery:', err);
    res.status(500).json({ error: err.message });
  }
});

app.get('/gallery/:id/photo', async (req, res) => {
  try {
    const gallery = await Gallery.findByPk(req.params.id);
    if (gallery && gallery.photo) {
      res.set('Content-Type', 'image/jpeg');
      res.send(gallery.photo);
    } else {
      res.status(404).send('Image not found');
    }
  } catch (err) {
    console.error('Error fetching gallery photo:', err);
    res.status(500).json({ error: err.message });
  }
});

// Admin login route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;
  try {
    const user = await User.findOne({ where: { username } });
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.json({ message: 'Login successful' });
    } else {
      res.status(401).json({ message: 'Invalid credentials' });
    }
  } catch (err) {
    console.error('Error logging in:', err);
    res.status(500).json({ error: err.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
