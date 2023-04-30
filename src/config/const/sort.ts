export enum SORT {
    ALL = 'all',
    COMPLETED = 'done',
    UNCOMPLETED = 'undone'
}

export const sortArray = [ SORT.ALL, SORT.COMPLETED, SORT.UNCOMPLETED ];

export const ResultSort = {
    [SORT.ALL]: '',
    [SORT.COMPLETED]: '&completed=true',
    [SORT.UNCOMPLETED]: '&completed=false',
};