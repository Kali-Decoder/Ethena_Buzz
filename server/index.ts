import express, { Request, Response } from 'express';
import twitterRoutes from './routes/twitterRoute';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(cors({
  origin: "http://localhost:3000",
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use('/api', twitterRoutes);

app.get('/', (_: Request, res: Response) => {
  res.send('gm gm! api is running');
});




app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
