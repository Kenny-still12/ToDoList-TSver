// import type { todoList } from "./data";
const form = document.querySelector("form");
const submitbtn = document.querySelector(".add-btn");
const input = document.querySelector(".input-list");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    let todoText = input === null || input === void 0 ? void 0 : input.value;
    const newList = {
        id: crypto.randomUUID(),
        text: todoText,
        isComplete: false
    };
});
function addList(listHolder) {
    const list = document.createElement("div");
}
export {};
//# sourceMappingURL=app.js.map