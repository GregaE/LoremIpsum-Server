import { Router } from 'express';
import { serveMockData } from './controllers';

const router = Router();

router.get('/mock', serveMockData);

// router.get("", );
// router.post("", );
// router.put("", );
// router.delete("", );

export default router;
