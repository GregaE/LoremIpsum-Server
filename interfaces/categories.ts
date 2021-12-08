import {
  Certificates,
  Education,
  Interview,
  Languages,
  PersonalDetails,
  SavedCV,
  Skills,
  WorkExperience,
} from '.prisma/client';

export type Categories = Certificates &
  Skills &
  Education &
  Languages &
  WorkExperience &
  Interview;

export const categoryValidation = [
  'certificates',
  'skills',
  'education',
  'languages',
  'personalDetails',
  'savedCV',
  'workExperience',
  'interview',
];

export interface FEDate extends WorkExperience, Education {
  beginMonth?: string;
  beginYear?: string;
  endMonth?: string;
  endYear?: string;
}
