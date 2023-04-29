import { FcCheckmark, FcCancel } from 'react-icons/fc';
import { FiDelete } from 'react-icons/fi';
import { Button, Text } from '../../ui';
import { todosService } from '../../services';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { rootStore } from '../../store/rootStore.ts';
import './style.scss';

type TodoProps = {
    id: number
    completed: boolean
    title: string
    userId: number
}

export const Todo = ({
    title,
    completed,
    id,
    userId,
}: TodoProps) => {
    const [ isLoadingDelete, setIsLoadingDelete ] = useState(false);

    const handleDelete = async () => {
        setIsLoadingDelete(true);
        const response = await todosService.deleteTodo(id);
        setIsLoadingDelete(false);

        if(typeof response === 'string') {
            toast.error(response);
        }

        rootStore.todosStore.deleteTodo(id);
    };

    const handleUpdate = async () => {
        setIsLoadingDelete(true);
        const response = await todosService.changeCompleted({
            id,
            title,
            completed: !completed,
            userId,
        });
        setIsLoadingDelete(false);

        if(typeof response === 'string') {
            toast.error(response);
        }

        rootStore.todosStore.changeCompleted(id);
    };

    return (
        <div className="todo">
            <Text className="id">{id}</Text>
            <Button className="todo-btn" onClick={handleUpdate}>
                {completed ? <FcCheckmark className="completed" /> : <FcCancel className="completed" />}
            </Button>
            <Text className="title">{title}</Text>
            <Button
                disabled={isLoadingDelete}
                onClick={handleDelete}
                className="todo-btn"
            ><FiDelete className="delete" /></Button>
        </div>
    );
};