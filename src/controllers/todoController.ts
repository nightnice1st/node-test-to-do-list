import { Request, Response } from 'express';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../models/todoModel';

export const getAllTodos = (req: Request, res: Response) => {
    res.json(getTodos());
};

export const getTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const todo = getTodoById(id);
    if (todo) {
        res.json(todo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

export const createNewTodo = (req: Request, res: Response) => {
    const { title } = req.body;
    const newTodo = createTodo(title);
    res.status(201).json(newTodo);
};

export const updateExistingTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    const { title, completed } = req.body;
    const updatedTodo = updateTodo(id, title, completed);
    if (updatedTodo) {
        res.json(updatedTodo);
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};

export const deleteExistingTodo = (req: Request, res: Response) => {
    const id = parseInt(req.params.id);
    if (deleteTodo(id)) {
        res.status(204).send();
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
};
