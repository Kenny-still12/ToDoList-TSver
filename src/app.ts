// import type { todoList } from "./data";

const form = document.querySelector("form") as HTMLFormElement;
const submitbtn = document.querySelector(".add-btn");
const input = document.querySelector(".input-list") as HTMLInputElement;
const listContainer = document.querySelector(".list-container") as HTMLDivElement;

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
    addList(newList);

});

function addList(listHolder: todoList) {
    const list = document.createElement("div") as HTMLDivElement;
    const listText = document.createElement("p") as HTMLParagraphElement;
    list.classList.add("list-holder");
    if (typeof listHolder.text === "string") {
        listText.innerText = listHolder.text;
    }

    list.append(listText);
    listContainer.append(list);
}