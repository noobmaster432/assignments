import { atom, selector } from "recoil";
import todos from "../utils/todo";

const todosAtom = atom({
    key: 'todosAtom',
    default: todos
})

const filteredAtom = atom({
    key: 'filteredAtom',
    default: ''
})

const todoAtom = selector({
    key: 'todoAtom',
    get: ({get}) => {
        const todos = get(todosAtom);
        const filter = get(filteredAtom);
        return todos.filter(todo => todo.name.includes(filter) || todo.description.includes(filter));
    }
})

export {todoAtom, todosAtom, filteredAtom};