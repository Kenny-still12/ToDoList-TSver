// import type { todoList } from "./data";

const form = document.querySelector("form") as HTMLFormElement;
const input = document.querySelector(".input-list") as HTMLInputElement;
const listContainer = document.querySelector(".list-container") as HTMLDivElement;
const deleteBtn = document.querySelector(".delete-btn") as HTMLButtonElement;

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
    input.value = "";
});


function addList(listHolder: todoList) {
    const list = document.createElement("div") as HTMLDivElement;
    const listText = document.createElement("p") as HTMLParagraphElement;
    const deletebtn = document.createElement("button") as HTMLButtonElement;
    deletebtn.classList.add("delete-btn");
    list.classList.add("list-holder");

    deletebtn.innerHTML = "delete";

    list.dataset.id = listHolder.id;

    if (typeof listHolder.text === "string") {
        listText.innerText = listHolder.text;
    }

    deletebtn.addEventListener("click", (e: Event) => {
        const button = e.currentTarget as HTMLButtonElement;
        button.parentElement?.remove();
    })

    list.append(listText);
    list.append(deletebtn);
    listContainer.append(list);
}

