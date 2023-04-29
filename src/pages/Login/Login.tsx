import { Input, Button, Text } from '../../ui';
import { useState } from 'react';
import { loginService, isErrorLogin } from '../../services';
import { observer } from 'mobx-react';
import './style.scss';
import { rootStore } from '../../store/rootStore.ts';

export const Login = observer(() => {
    const [ error, setError ] = useState('');

    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');

    const handleLogin = async () => {
        setError('');

        const data = await loginService(email, password);

        if(!data) {
            return setError('Что-то пошло не так...');
        }

        if (!isErrorLogin(data)) {

            rootStore.userStore.changeUser({
                email: data.user.email,
                id: data.user.id,
            });

            return rootStore.authStore.changeIsAuth(true);
        }

        return setError(data.response.data);
    };

    return (
        <div className='login-container'>
            <Text
                className="text-login"
            >
                Логин
            </Text>
            <Input
                placeholder="Логин"
                onChange={setEmail}
                value={email}
                className='input-login'
            />
            <Input
                type="password"
                placeholder="Пароль"
                onChange={setPassword}
                value={password}
                className='input-login'
            />
            {!!error.length && <Text className='error-login'>{error}</Text>}
            <Button
                onClick={handleLogin}
                className="button-login"
            >
                Войти
            </Button>
        </div>
    );
});