import express from 'express';
import userRoutes from './routes/userRoutes.js';
import http from 'http';
import { Server } from 'socket.io';
import cors from 'cors';

import connectDB from './db.js';

const app = express();

app.use(express.json());

connectDB();
const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000", // Your Next.js client
    methods: ["GET", "POST"]
  }
});

app.use(cors());

app.use('/api/users', userRoutes);

app.get('/', (req, res) => res.send('API Running'));

server.listen(5000, () => console.log('Server running on port 5000'));