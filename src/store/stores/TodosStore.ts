import { makeAutoObservable } from 'mobx';
import { Todo } from '../../services';

export interface ITodos {
    todos: Todo[]
}

export class TodosStore {
    store: ITodos = {
        todos: [],
    };

    constructor() {
        makeAutoObservable(this);
    }

    get getTodos() {
        return this.store.todos;
    }

    setTodos(todos: Todo[]) {
        this.store.todos = todos;
    }

    addTodo(todo: Todo) {
        this.store.todos.push(todo);
    }

    deleteTodo(id: number) {
        this.store.todos = this.store.todos.filter((todo) => todo.id !== id);
    }

    changeCompleted(id: number) {
        this.store.todos = this.store.todos.map((todo) => {
            if(todo.id === id) {
                todo.completed = !todo.completed;
            }

            return todo;
        });
    }
}