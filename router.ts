import { Router } from 'express';
import {
  createUser,
  deleteUser,
  findUser,
  updateUser,
} from './controllers/userController';
import {
  getCertificates,
  createCertificate,
  editCertificate,
  deleteCertificate,
} from './controllers/certificatesController';
import {
  getLanguages,
  createLanguage,
  editLanguage,
  deleteLanguage,
} from './controllers/languagesController';
import {
  getEducation,
  createEducation,
  editEducation,
  deleteEducation,
} from './controllers/educationController';
import {
  getWorkExperience,
  createWorkExperience,
  editWorkExperience,
  deleteWorkExperience,
} from './controllers/workExperienceController';
import {
  getSkills,
  createSkill,
  editSkill,
  deleteSkill,
} from './controllers/skillsController';
import {
  getCVs,
  postNewCV,
  deleteCV,
} from './controllers/createdCvsController';
import {
  getPersonalInfo,
  createPersonalInfo,
  editPersonalInfo,
  deletePersonalInfo,
} from './controllers/personalInfoController';
import { serveMockData } from './controllers/index';

const router = Router();

//TODO create middleware when log in to compare
router.get('/user/:id', findUser);
router.post('/user', createUser);
router.put('/user/:id', updateUser);
router.delete('/user/:id', deleteUser);

//categories

router.get('/:category/:userId');
router.post('/:category');
router.put('/:category/:id');
router.delete('/:category/:id');

// certificates

router.get('/certificate/:userId', getCertificates);
router.post('/certificate', createCertificate);
router.put('/certificate/:id', editCertificate);
router.delete('/certificate/:id', deleteCertificate);

// education

router.get('/education/:userId', getEducation);
router.post('/education', createEducation);
router.put('/education/:id', editEducation);
router.delete('/education/:id', deleteEducation);

// work experience

router.get('/workExperience/:userId', getWorkExperience);
router.post('/workExperience', createWorkExperience);
router.put('/workExperience/:id', editWorkExperience);
router.delete('/workExperience/:id', deleteWorkExperience);

//languages

router.get('/languages/:userId', getLanguages);
router.post('/languages', createLanguage);
router.put('/languages/:id', editLanguage);
router.delete('/languages/:id', deleteLanguage);

// skills

router.get('/skills/:userId', getSkills);
router.post('/skills', createSkill);
router.put('/skills/:id', editSkill);
router.delete('/skills/:id', deleteSkill);

// CVs

router.get('/createdcvs/:userId', getCVs);
router.post('/createdcvs/', postNewCV);
router.delete('/createdcvs/:id', deleteCV);

// profile

router.get('/personalInfo/:userId', getPersonalInfo);
router.post('/personalInfo', createPersonalInfo);
router.put('/personalInfo/:id', editPersonalInfo);
router.delete('/personalInfo/:id', deletePersonalInfo);

router.get('/mock', serveMockData);
export default router;
