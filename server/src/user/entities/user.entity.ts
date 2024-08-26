export class User {
  id: string;
  email: string;
  name: string;
  phone: string;
  job: string;
  password: string;
  refreshTokens?: string[];
  googleToken: string;
  appleToken: string;
  createdAt: Date;
  updatedAt: Date | null;
}
