interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

let todos: Todo[] = [
    { id: 1, title: 'Sample Task', completed: false }
];

export const getTodos = () => todos;

export const getTodoById = (id: number) => todos.find(todo => todo.id === id);

export const createTodo = (title: string) => {
    const newTodo: Todo = { id: todos.length + 1, title, completed: false };
    todos.push(newTodo);
    return newTodo;
};

export const updateTodo = (id: number, title: string, completed: boolean) => {
    const todo = todos.find(todo => todo.id === id);
    if (todo) {
        todo.title = title;
        todo.completed = completed;
        return todo;
    }
    return null;
};

export const deleteTodo = (id: number) => {
    const index = todos.findIndex(todo => todo.id === id);
    if (index !== -1) {
        todos.splice(index, 1);
        return true;
    }
    return false;
};
