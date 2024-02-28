import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */

interface Todo {
    title: string;
    description: string;
    done: boolean;
    id: number;
    userId: number;
}

export async function createTodo(userId: number, title: string, description: string): Promise<Todo> {
    try {
        const createTodo: Todo = await prisma.todo.create({
            data: {
                title,
                description,
                userId,
                done: false
            }
        });

        return createTodo;
    } catch (error:any) {
        throw new Error('Failed to create todo: ' + error.message);
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number): Promise<Todo> {
    try {
        const updateTodo: Todo | null = await prisma.todo.update({
            where: {
                id: todoId
            },
            data: {
                done: true
            }
        });
        
        if (!updateTodo) {
            throw new Error('Todo not found');
        }

        return updateTodo;
    } catch (error:any) {
        throw new Error('Failed to update todo: ' + error.message);
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number): Promise<Todo[]> {
    try {
        const todos: Todo[] = await prisma.todo.findMany({
            where: {
                userId: userId
            }
        });

        return todos;
    } catch (error:any) {
        throw new Error('Failed to get todos: ' + error.message);
    }
}