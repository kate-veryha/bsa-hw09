export class User {
    public name?: string;
    public surname?: string;
    public birthYear?: number;
    public email: string;
    public password: string;

    public constructor(init?: Partial<User>) {
      Object.assign(this, init);
    }
}
