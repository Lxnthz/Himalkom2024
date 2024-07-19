import express from 'express';
import cors from 'cors';
import session from 'express-session';
import bcrypt from 'bcrypt';
import rateLimit from 'express-rate-limit';
import helmet from 'helmet';
import dotenv from 'dotenv';
import { Sequelize, DataTypes } from 'sequelize';
import AdminJS from 'adminjs';
import AdminJSExpress from '@adminjs/express';
import AdminJSSequelize from '@adminjs/sequelize';


dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Custom Helmet configuration to allow inline scripts for AdminJS
app.use(helmet({
  contentSecurityPolicy: {
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'", "'unsafe-inline'"], 
      styleSrc: ["'self'", "'unsafe-inline'"],  
      imgSrc: ["'self'", "data:"],
      connectSrc: ["'self'"],
      fontSrc: ["'self'", "https:", "data:"],
      objectSrc: ["'none'"],
      mediaSrc: ["'self'"],
      frameSrc: ["'self'"]
    }
  }
}));

// Rate Limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});
app.use(limiter);

// Database setup (SQLite)
const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite', // This file will be created and used for storage
});

// Define models
const User = sequelize.define('User', {
  username: { type: DataTypes.STRING, allowNull: false },
  password: { type: DataTypes.STRING, allowNull: false },
  isAdmin: { type: DataTypes.BOOLEAN, allowNull: false },
});

const News = sequelize.define('News', {
  title: { type: DataTypes.STRING, allowNull: false },
  content: { type: DataTypes.TEXT, allowNull: false },
});

const Division = sequelize.define('Division', {
  name: { type: DataTypes.STRING, allowNull: false },
});

const Member = sequelize.define('Member', {
  name: { type: DataTypes.STRING, allowNull: false },
  divisionId: {
    type: DataTypes.INTEGER,
    references: {
      model: Division,
      key: 'id',
    },
  },
});

const Research = sequelize.define('Research', {
  cover: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING, allowNull: false },
  date: { type: DataTypes.STRING },
  link: { type: DataTypes.STRING },
});

const SyntaxReport = sequelize.define('SyntaxReport', {
  cover: { type: DataTypes.STRING },
  title: { type: DataTypes.STRING, allowNull: false },
  year: { type: DataTypes.INTEGER, allowNull: false },
});

// Sync database
sequelize.sync().then(() => {
  const hashedPassword = bcrypt.hashSync(process.env.ADMIN_PASSWORD, 10);
  User.findOrCreate({
    where: { username: process.env.ADMIN_USERNAME },
    defaults: { password: hashedPassword, isAdmin: true }
  });
});

// Session configuration
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

// AdminJS setup
AdminJS.registerAdapter(AdminJSSequelize);

const adminJs = new AdminJS({
  databases: [sequelize],
  rootPath: '/admin',
});

const adminRouter = AdminJSExpress.buildRouter(adminJs);
app.use(adminJs.options.rootPath, adminRouter);

// Check if AdminJS routes are correctly set up
app.get('/check-admin', (req, res) => {
  res.send('AdminJS routes are set up correctly');
});

// News endpoints
app.post('/news', async (req, res) => {
  const { title, content } = req.body;
  try {
    const news = await News.create({ title, content });
    res.json({ id: news.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/news', async (req, res) => {
  try {
    const news = await News.findAll();
    res.json(news);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Divisions and Members endpoints
app.post('/divisions', async (req, res) => {
  const { name } = req.body;
  try {
    const division = await Division.create({ name });
    res.json({ id: division.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/divisions', async (req, res) => {
  try {
    const divisions = await Division.findAll();
    res.json(divisions);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.post('/members', async (req, res) => {
  const { name, divisionId } = req.body;
  try {
    const member = await Member.create({ name, divisionId });
    res.json({ id: member.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/members', async (req, res) => {
  try {
    const members = await Member.findAll();
    res.json(members);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Research data endpoints
app.post('/research', async (req, res) => {
  const { cover, title, date, link } = req.body;
  try {
    const research = await Research.create({ cover, title, date, link });
    res.json({ id: research.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/research', async (req, res) => {
  try {
    const research = await Research.findAll();
    res.json(research);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Syntax reports endpoints
app.post('/syntax', async (req, res) => {
  const { cover, title, year } = req.body;
  try {
    const syntaxReport = await SyntaxReport.create({ cover, title, year });
    res.json({ id: syntaxReport.id });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

app.get('/syntax', async (req, res) => {
  try {
    const syntaxReports = await SyntaxReport.findAll();
    res.json(syntaxReports);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Handle root endpoint
app.get('/', (req, res) => {
  res.send('Welcome to the secure server');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
