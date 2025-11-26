import express from 'express';
import './models/db.js';
import bodyParser from 'body-parser';
import cors from 'cors';
import authRoutes from "./routes/authrouter.js";  // correct import

const app = express();
const port = 3000;

// Middlewares
app.use(bodyParser.json());
app.use(cors());

// Use the imported router
app.use("/auth", authRoutes);

app.use("/products", authRoutes);

// Root route
app.get('/', (req, res) => {
  res.send('Hello from Express!');
});

// Start server
app.listen(port, () => {
  console.log(`Express server listening at http://localhost:${port}`);
});
