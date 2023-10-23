import { EmployeeInterface } from 'interfaces/employee';
import { RecruitmentInterface } from 'interfaces/recruitment';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  location?: string;
  established_at?: any;
  website?: string;
  industry?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  employee?: EmployeeInterface[];
  recruitment?: RecruitmentInterface[];
  user?: UserInterface;
  _count?: {
    employee?: number;
    recruitment?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  location?: string;
  website?: string;
  industry?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
