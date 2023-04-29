import { Button, Input, Modal, Text } from '../../ui';
import { todosService } from '../../services';
import { rootStore } from '../../store/rootStore.ts';
import { useState } from 'react';
import { ModalProps } from '../../config';
import { toast } from 'react-toastify';
import './style.scss';

type ModalCreateTodoProps = {
    userId: number
} & Omit<ModalProps, 'children'>

export const ModalCreateTodo = ({
    userId,
    handleClose,
    isOpen,
}: ModalCreateTodoProps) => {
    const [ isLoading, setIsLoading ] = useState(false);
    const [ title, setTitle ] = useState('');

    const handleAddTodo = async () => {
        if(!title.trim()) {
            return toast.error('Поле не может быть пустым');
        }

        setIsLoading(true);

        const response = await todosService.createTodo({
            title,
            userId,
            completed: false,
        });

        setIsLoading(false);

        if(typeof response === 'string') {
            return toast.error(response);
        }

        setTitle('');
        rootStore.todosStore.addTodo(response.data);
        handleClose();
    };

    return (
        <Modal handleClose={handleClose} isOpen={isOpen}>
            <div className="modal-create-todo-container">
                <Text className='btn-add-todo'>Добавление задачи</Text>
                <Input onChange={setTitle} value={title} placeholder="Название задачи" />
                <Button disabled={isLoading} onClick={handleAddTodo}>Добавить</Button>
            </div>
        </Modal>
    );
};