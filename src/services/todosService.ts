import { api, ResultSort, SORT } from '../config';

export type Todo = {
    completed: boolean
    id: number
    title: string
    userId: number
}

class TodosService {
    async getTodos(id: number, sort: SORT) {
        try {
            console.log(ResultSort[sort]);

            const data = await api.get<Todo[]>(`/todos?userId=${id}${ResultSort[sort]}`);

            return data;
        } catch (e) {
            return 'Ошибка для получения списка дел';
        }
    }

    async createTodo(todo: Omit<Todo, 'id'>) {
        try {
            const data = await api.post<Todo>('/todos', todo);

            return data;
        } catch (e) {
            return 'Ошибка с созданием задачи';
        }
    }

    async deleteTodo(id: number) {
        try {
            const data = await api.delete(`/todos/${id}`);

            return data;
        } catch (e) {
            return 'Ошибка с удалением задачи';
        }
    }

    async changeCompleted(todo: Todo) {
        try {
            const data = await api.put(`/todos/${todo.id}`, {
                title: todo.title,
                completed: todo.completed,
                userId: todo.userId,
            });

            return data;
        } catch (e) {
            return 'Ошибка с обновлением задачи';
        }
    }
}

export const todosService = new TodosService();
