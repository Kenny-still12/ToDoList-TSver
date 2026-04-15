// import type { todoList } from "./data";

const form = document.querySelector("form") as HTMLFormElement;
const submitbtn = document.querySelector(".add-btn");
const input = document.querySelector(".input-list") as HTMLInputElement;

type todoList = {
    id: string,
    text: string | undefined,
    isComplete: boolean,
}

form!.addEventListener("submit", (e: Event) => {
    e.preventDefault();

    let todoText: string | undefined = input?.value;

    const newList: todoList = {
        id: crypto.randomUUID(),
        text: todoText,
        isComplete: false
    }

});

function addList(listHolder: todoList) {
    const list = document.createElement("div");

}