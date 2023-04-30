import { Button, Text } from '../../ui';
import { observer } from 'mobx-react';
import { ACCESS_TOKEN } from '../../config';
import { rootStore } from '../../store/rootStore.ts';
import { TodoList } from '../../shared';
import bg from '../../config/assets/background.jpg';
import './style.scss';

export const Todos = observer(() => {
    const email = rootStore.userStore.getUserEmail;

    const handleLogout = () => {
        localStorage.removeItem(ACCESS_TOKEN);
        rootStore.authStore.changeIsAuth(false);
    };

    return (
        <div className='todos-container'>
            <Text className="email-todo">{email}</Text>
            <Button onClick={handleLogout} className="logout-todo">Выйти</Button>
            <TodoList />
            <img src={bg} className='img'/>
        </div>
    );
});