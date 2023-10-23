import { EmployeeInterface } from 'interfaces/employee';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface PerformanceReviewInterface {
  id?: string;
  employee_id: string;
  reviewer_id: string;
  rating?: number;
  feedback?: string;
  reviewed_at?: any;
  created_at?: any;
  updated_at?: any;

  employee?: EmployeeInterface;
  user?: UserInterface;
  _count?: {};
}

export interface PerformanceReviewGetQueryInterface extends GetQueryInterface {
  id?: string;
  employee_id?: string;
  reviewer_id?: string;
  feedback?: string;
}
