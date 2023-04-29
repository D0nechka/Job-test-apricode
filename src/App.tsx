import { ACCESS_TOKEN, Router } from './config';
import { observer } from 'mobx-react';
import { rootStore } from './store/rootStore.ts';
import { ResultLogin } from './services';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const App = observer(() => {
    const token = localStorage.getItem(ACCESS_TOKEN);

    if(token) {
        try {
            const result: ResultLogin = JSON.parse(token);

            if(result?.accessToken) {
                rootStore.authStore.changeIsAuth(true);
            }

            if(result?.user) {
                rootStore.userStore.changeUser(result.user);
            }

        } catch (e) {
            console.log('Ошибка с парсингом инфомарции');
        }
    }

    return (
        <>
            <ToastContainer />
            <Router />
        </>
    );
});