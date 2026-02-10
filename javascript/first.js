const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

container.appendChild(content);

const p = document.createElement("p");
p.setAttribute("style","color: red");
p.textContent = "Hey I'm red!";

const h3 = document.createElement("h3");
h3.setAttribute("style","color:blue");
h3.textContent = "I'm a blue h3!";

container.appendChild(p);
container.appendChild(h3);

const div = document.createElement("div");
div.setAttribute("style","background-color:pink;border:1px solid black");
container.appendChild(div);

const h1 = document.createElement("h1");
h1.textContent = "I'm a div";
const pe = document.createElement("p");
pe.textContent = "ME TOO!";

div.appendChild(h1);
div.appendChild(pe);

