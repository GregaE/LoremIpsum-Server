import { Router } from 'express';
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
  login,
  logout
} from './controllers/userController';
import {
  createCategoryRecord,
  deleteCategoryRecord,
  editCategoryRecord,
  getCategory,
} from './controllers/categoriesController';
import { authMiddleware } from './middlewares/auth';

const router = Router();

// Authentication

router.post('/register', createUser);
router.post('/login', login);
router.post('/logout', authMiddleware, logout);

//TODO create middleware when log in to compare
router.get('/user/:id', findUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

//categories

router.get('/:category/:user_id', getCategory);
router.post('/:category', createCategoryRecord);
router.put('/:category/:id', editCategoryRecord);
router.delete('/:category/:id', deleteCategoryRecord);

export default router;
