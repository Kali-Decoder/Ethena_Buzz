import express from 'express';
import mainRoutes from './routes/twitterRoute';

const app = express();
const PORT = 5001;

// Middleware to parse JSON bodies
app.use(express.json());

// Register main routes under the '/api' path
app.use('/api', mainRoutes);

// A simple welcome route
app.get('/', (req, res) => {
  res.send('Welcome to the API');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
