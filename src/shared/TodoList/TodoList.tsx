import { useEffect, useState } from 'react';
import { Button, Text } from '../../ui';
import { rootStore } from '../../store/rootStore.ts';
import { observer } from 'mobx-react';
import { todosService } from '../../services';
import { ModalCreateTodo, Todo } from '../';
import { SORT, sortArray } from '../../config';
import './style.scss';

export const TodoList = observer(() => {
    const [ currentSort, setCurrentSort ] = useState<SORT>(SORT.ALL);
    const [ error, setError ] = useState('');
    const [ isLoading, setIsLoading ] = useState(false);
    const [ isOpenCreate, setIsOpenCreate ] = useState(false);

    const userId = rootStore.userStore.getUserId;
    const todos = rootStore.todosStore.getTodos;

    const handleOpenCreateModal = () => setIsOpenCreate(true);
    const handleCloseCreateModal = () => setIsOpenCreate(false);

    useEffect(() => {
        const getTodos = async () => {
            setError('');
            setIsLoading(true);

            const response = await todosService.getTodos(userId, currentSort);

            setIsLoading(false);

            if(typeof response === 'string') {
                return setError(response);
            }

            rootStore.todosStore.setTodos(response.data);
        };
        getTodos();
    }, [ userId, currentSort ]);

    if(isLoading) {
        return <Text>Loading...</Text>;
    }

    return (
        <div className='todo-list-container'>
            <ModalCreateTodo isOpen={isOpenCreate} handleClose={handleCloseCreateModal} userId={userId} />
            <Text>Todo list</Text>
            {!!error.length && <Text className="error">{error}</Text>}
            <Button
                className="btn-open-create-modal"
                onClick={handleOpenCreateModal}
            >Создать задачу</Button>
            <div className='todo-list-container__sort'>
                {
                    sortArray.map((sort) => (
                        <Button
                            key={sort}
                            onClick={() => setCurrentSort(sort)}
                            className={sort === currentSort ? 'active-sort' : ''}
                        >{sort}</Button>
                    ))
                }
            </div>
            <div className='todo-list-container__list'>
                {todos.length ? todos.map((todo) => (
                    <Todo
                        key={todo.id}
                        id={todo.id}
                        completed={todo.completed}
                        title={todo.title}
                        userId={userId}
                    />
                )) : <Text>Добавьте задачи</Text>}
            </div>
        </div>
    );
});