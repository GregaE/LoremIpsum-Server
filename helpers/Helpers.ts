import { WorkExperience, Education } from '.prisma/client';
import { FEDate, Categories } from '../interfaces/categories';

export function convertToDbFormat(
  obj: FEDate,
  category: string
): WorkExperience | Education {
  if (category !== 'education' && category !== 'workExperience') return obj;
  const { beginMonth, beginYear, endMonth, endYear, ...cleanData } = obj;
  let start_date: Date | null = null;
  let end_date: Date | null = null;
  if (beginYear || beginMonth) {
    start_date = new Date(`${beginYear}-${beginMonth ? beginMonth : 'Jan'}-01`);
  }
  if (endMonth || endYear) {
    end_date = new Date(`${endYear}-${endMonth ? endMonth : 'Jan'}-01`);
  }
  return { ...cleanData, start_date, end_date };
}

export function convertToFeFormat(
  obj: Partial<Categories>,
  category: string
): Partial<FEDate> | Categories {
  if (category !== 'education' && category !== 'workExperience') return obj;
  const { start_date, end_date, ...cleanObj } = obj;
  let beginMonth = '';
  let beginYear = '';
  let endMonth = '';
  let endYear = '';

  const monthFormatter = Intl.DateTimeFormat('en', { month: 'short' });
  const yearFormatter = Intl.DateTimeFormat('en', { year: 'numeric' });
  if (start_date) {
    beginMonth = monthFormatter.format(start_date);
    beginYear = yearFormatter.format(start_date);
  }
  if (end_date) {
    endMonth = monthFormatter.format(end_date);
    endYear = yearFormatter.format(end_date);
  }
  return { ...cleanObj, beginMonth, beginYear, endMonth, endYear };
}
