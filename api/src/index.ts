import express from 'express';
import cors from 'cors';
import popularSearchesRouter from './routes/popularSearches';
import searchRouter from './routes/search';

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.use('/api/popular-searches', popularSearchesRouter);
app.use('/api/search', searchRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
