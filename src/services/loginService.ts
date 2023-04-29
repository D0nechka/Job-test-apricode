import { ACCESS_TOKEN, api } from '../config';

export type ResultLogin = {
    accessToken: string
    user: {
        email: string
        id: number
    }
}

export type ErrorLogin = {
    response: {
        data: string
    }
}

export const isErrorLogin = (arg: ErrorLogin | ResultLogin): arg is ErrorLogin => {
    return 'response' in arg;
};

export const loginService = async (email: string, password: string) => {
    try {
        const result = await api.post<ResultLogin>('/signin', {
            email,
            password,
        });

        if(result.status === 200) {
            const jsonObject = {
                accessToken: result.data.accessToken,
                user: {
                    email: result.data.user.email,
                    id: result.data.user.id,
                },
            };

            localStorage.setItem(ACCESS_TOKEN, JSON.stringify(jsonObject));

            return result.data;
        }
    } catch (e) {
        return e as ErrorLogin;
    }
};