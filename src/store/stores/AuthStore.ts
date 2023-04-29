import { makeAutoObservable } from 'mobx';

export interface IAuth {
    isAuth: boolean
}

export class AuthStore {
    auth: IAuth = {
        isAuth: false,
    };

    constructor() {
        makeAutoObservable(this);
    }

    changeIsAuth = (isAuth: boolean) => {
        this.auth.isAuth = isAuth;
    };

    get getIsAuth() {
        return this.auth.isAuth;
    }
}