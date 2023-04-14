import { AuthenticateData } from '../../api/auth';

export interface IAuthService {
  token$: string;
  authenticate: (authenticateData: AuthenticateData) => void;
}
