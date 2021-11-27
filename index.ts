import express from 'express';
import router from './router';
import cors from 'cors';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(router);

const PORT = process.env.SERVER_PORT || 3001;

(async function () {
  try {
    app.listen(PORT, () => {
      console.log('🍌 server running on port: ', PORT);
    });
  } catch (error) {
    console.log(error);
  }
})();
