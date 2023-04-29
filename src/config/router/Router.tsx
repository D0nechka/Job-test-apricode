import { Route, Routes } from 'react-router-dom';
import { Login, Todos, NotFound } from '../../pages';
import { observer } from 'mobx-react';
import { rootStore } from '../../store/rootStore.ts';

export const Router = observer(() => {
    const isAuth = rootStore.authStore.getIsAuth;

    return (
        <Routes>
            {
                isAuth ? (
                    <Route path="/" element={<Todos />} />
                ) : (
                    <Route path="/" element={<Login />} />
                )
            }
            <Route path="*" element={<NotFound />} />
        </Routes>
    );
});