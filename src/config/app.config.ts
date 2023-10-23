interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Owner'],
  customerRoles: ['Customer'],
  tenantRoles: ['Owner', 'HR Manager'],
  tenantName: 'Company',
  applicationName: 'HR Management Application',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: [
    'Read company information',
    'Read recruitment information',
    'Apply to recruitment',
    'Update application status',
  ],
  ownerAbilities: ['Manage user data', 'Manage company data', 'Manage employee data', 'Manage recruitment data'],
  getQuoteUrl: 'https://roq-wizzard-git-qa03-roqtech.vercel.app/proposal/d6640ca3-2dfb-4ad9-a05b-7c214340e6a5',
};
