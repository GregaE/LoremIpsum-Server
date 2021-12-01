import {
  Certificates,
  Education,
  Languages,
  PersonalDetails,
  SavedCV,
  Skills,
  WorkExperience,
} from '.prisma/client';

export interface Categories {
  certificates: Certificates;
  skills: Skills;
  education: Education;
  languages: Languages;
  personalDetails: PersonalDetails;
  savedCV: SavedCV;
  workExperience: WorkExperience;
}

export const categoryValidation = [
  'certificates',
  'skills',
  'education',
  'languages',
  'personalDetails',
  'savedCV',
  'workExperience',
];
