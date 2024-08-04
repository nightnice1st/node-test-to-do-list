import express, { json } from 'express';
import todoRoutes from './routes/todoRoutes';

const app = express();
const port = 3000;

app.use(json());
app.use('/api', todoRoutes);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
