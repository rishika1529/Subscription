const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config({ path: __dirname + '/.env' });

const app = express();

// ─── Middleware ───────────────────────────────────────────────
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ─── API Routes ──────────────────────────────────────────────
app.use('/api/auth', require('./routes/authRoutes'));

// ─── Health Check ────────────────────────────────────────────
// app.get('/', (req, res) => {
//     res.json({
//         success: true,
//         message: '🚀 SubsVault API is running',
//         timestamp: new Date().toISOString(),
//     });
// });

// ─── 404 Handler ─────────────────────────────────────────────
app.use((req, res) => {
    res.status(404).json({
        success: false,
        message: `Route ${req.originalUrl} not found`,
    });
});

// ─── Global Error Handler ────────────────────────────────────
app.use((err, req, res, next) => {
    console.error('Unhandled Error:', err);
    res.status(500).json({
        success: false,
        message: 'Internal server error',
    });
});

// ─── Start Server ────────────────────────────────────────────
const PORT = process.env.PORT || 5000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`\n🚀 SubsVault API Server running on http://localhost:${PORT}`);
        console.log(`📡 Auth endpoints:`);
        console.log(`   POST  http://localhost:${PORT}/api/auth/signup`);
        console.log(`   POST  http://localhost:${PORT}/api/auth/login`);
        console.log(`   GET   http://localhost:${PORT}/api/auth/me\n`);
    });
});
