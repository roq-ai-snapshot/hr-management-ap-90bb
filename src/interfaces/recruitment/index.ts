import { ApplicationInterface } from 'interfaces/application';
import { CompanyInterface } from 'interfaces/company';
import { GetQueryInterface } from 'interfaces';

export interface RecruitmentInterface {
  id?: string;
  company_id: string;
  position?: string;
  description?: string;
  requirements?: string;
  salary?: number;
  posted_at?: any;
  closed_at?: any;
  created_at?: any;
  updated_at?: any;
  application?: ApplicationInterface[];
  company?: CompanyInterface;
  _count?: {
    application?: number;
  };
}

export interface RecruitmentGetQueryInterface extends GetQueryInterface {
  id?: string;
  company_id?: string;
  position?: string;
  description?: string;
  requirements?: string;
}
