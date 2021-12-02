import express from 'express';
import router from './router';
import cors from 'cors';
import session from 'express-session';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

const corsConfig = {
  origin: 'http://localhost:3000',
  credentials: true,
};

app
  .use(cors(corsConfig))
  .use(express.json())
  .use(
    session({
      name: 'sid',
      saveUninitialized: false,
      resave: false,
      // needs to be adjusted to safe secret
      secret: "thisissosafe",
      cookie: {
        maxAge: 1000 * 60 * 60,
        sameSite: true,
        httpOnly: false,
        // should be secure=true in production
        secure: false,
      },
    })
  )
  .use(router);

app.use(
  session({
    name: 'sid',
    saveUninitialized: false,
    resave: false,
    secret: SECRET ? SECRET : '',
    cookie: {
      maxAge: 1000 * 60 * 60, // 1hr
      sameSite: true,
      httpOnly: false,
      // ----> we would want to set secure=true in a production environment <----
      secure: false,
    },
  })
)

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
