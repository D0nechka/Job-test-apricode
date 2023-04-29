import { UserStore, AuthStore, TodosStore } from './stores';

export const rootStore = {
    userStore: new UserStore(),
    authStore: new AuthStore(),
    todosStore: new TodosStore(),
};
