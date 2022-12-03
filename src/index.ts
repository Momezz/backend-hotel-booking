import * as dotenv from 'dotenv';
import express from 'express';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.send('hello world');
});

app.listen(8080, () => {
  console.log('Server is running on port 8080');
});
