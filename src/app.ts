import type { todoList } from "./data";

console.log("Hello World");

function addList(e: Event) {


    const newList: todoList = {
        id: crypto.randomUUID(),
        text: "",
        isComplete: false
    }


}