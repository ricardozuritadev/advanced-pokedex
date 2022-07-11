import { AxiosInstance } from 'axios';
import { catchAsync } from './utils';

const register = (client: AxiosInstance) => async (data: any) =>
  catchAsync(client.post)('/auth/register', data);

const auth = (client: AxiosInstance) => ({
  register: register(client),
});

export default auth;
