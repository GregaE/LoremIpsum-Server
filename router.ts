import express from 'express';
import { Response } from 'express';

const router = express.Router();

router.route('/')
  .get((_, res: Response): void => {
    res.json(require('./config/db.json'));
  });

// router.get("", );
// router.post("", );
// router.put("", );
// router.delete("", );

export default router;
