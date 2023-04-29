import { makeAutoObservable } from 'mobx';

export interface IUser {
    id: number;
    email: string;
}

export class UserStore {
    user: IUser = {
        id: 0,
        email: '',
    };

    constructor() {
        makeAutoObservable(this);

    }

    changeUser = (user: IUser) => {
        this.user = user;
    };

    get getUserEmail() {
        return this.user.email;
    }

    get getUserId() {
        return this.user.id;
    }
}