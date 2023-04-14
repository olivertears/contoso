import { AxiosError, AxiosResponse } from 'axios';
import { errorService } from '../services/error';
import { IError } from '../interfaces';

export function Catch<Args extends any[], Response>(
  target: any,
  propertyKey: string,
  descriptor: TypedPropertyDescriptor<(...args: Args) => Promise<AxiosResponse<Response>>>
) {
  const originalMethod = descriptor.value;

  if (originalMethod) {
    descriptor.value = async function (...args: Args): Promise<AxiosResponse<Response>> {
      try {
        return await originalMethod.apply(this, args);
      } catch (error: unknown) {
        errorService.addError((error as AxiosError).response?.data as IError);
        throw Error(((error as AxiosError).response?.data as IError).message);
      }
    };
  }
}
