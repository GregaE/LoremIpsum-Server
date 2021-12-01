import { Request } from 'express';
export function convertToDates(obj: Request) {
  if (obj.body.start_date) obj.body.start_date = new Date(obj.body.start_date);
  if (obj.body.end_date) obj.body.end_date = new Date(obj.body.end_date);
  if (obj.body.date_created)
    obj.body.date_created = new Date(obj.body.date_created);
  return obj;
}
