// import type { todoList } from "./data";
const form = document.querySelector("form");
const input = document.querySelector(".input-list");
const listContainer = document.querySelector(".list-container");
const deleteBtn = document.querySelector(".delete-btn");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!isNotEmpty(input.value)) {
        return;
    }
    let todoText = input === null || input === void 0 ? void 0 : input.value;
    const newList = {
        id: crypto.randomUUID(),
        text: todoText,
        isComplete: false
    };
    addList(newList);
    input.value = "";
});
function addList(listHolder) {
    const list = document.createElement("div");
    const listText = document.createElement("p");
    const deletebtn = document.createElement("button");
    deletebtn.classList.add("delete-btn");
    list.classList.add("list-holder");
    deletebtn.innerHTML = "delete";
    list.dataset.id = listHolder.id;
    if (typeof listHolder.text === "string") {
        listText.innerText = listHolder.text;
    }
    deletebtn.addEventListener("click", (e) => {
        var _a;
        const button = e.currentTarget;
        (_a = button.parentElement) === null || _a === void 0 ? void 0 : _a.remove();
    });
    list.append(listText);
    list.append(deletebtn);
    listContainer.append(list);
}
function isNotEmpty(input) {
    if (typeof input !== "string" || (input === null || input === void 0 ? void 0 : input.trim()) === "") {
        return false;
    }
    return true;
}
export {};
//# sourceMappingURL=app.js.map