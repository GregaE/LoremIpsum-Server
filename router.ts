import express from 'express';

const router = express.Router();

router.route('/')
  .get((_, res) => {
    res.json(require('./config/db.json'));
  })

// router.get("", );
// router.post("", );
// router.put("", );
// router.delete("", );

export default router;
