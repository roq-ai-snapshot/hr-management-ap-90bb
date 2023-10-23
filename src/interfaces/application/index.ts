import { UserInterface } from 'interfaces/user';
import { RecruitmentInterface } from 'interfaces/recruitment';
import { GetQueryInterface } from 'interfaces';

export interface ApplicationInterface {
  id?: string;
  user_id: string;
  recruitment_id: string;
  status?: string;
  applied_at?: any;
  interview_at?: any;
  offer_at?: any;
  created_at?: any;
  updated_at?: any;

  user?: UserInterface;
  recruitment?: RecruitmentInterface;
  _count?: {};
}

export interface ApplicationGetQueryInterface extends GetQueryInterface {
  id?: string;
  user_id?: string;
  recruitment_id?: string;
  status?: string;
}
