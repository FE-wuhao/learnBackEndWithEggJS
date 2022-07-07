import { Service } from 'egg';
interface IDogRes {
    message: string;
    status: string;
}
export default class DogService extends Service {
    show(): Promise<IDogRes>;
}
export {};
