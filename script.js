const cards = document.querySelector(".cards")
const form = document.querySelector("#bookForm");
const subBtn = document.querySelector(".submit");
const clsoseBtn = document.querySelector(".close");
const addBtn = document.querySelector(".bookAdd")
const dialog = document.querySelector(".modal");

const myLibrary = [];

form.addEventListener("submit",(e) => {
  e.preventDefault();
  
})


function duplicateCheck(array, newObj){
  const isDuplicate = array.some((item) => {
    const checker1 = item.title;
    const checker2 = newObj.title;
    return checker1 === checker2;
  });
  return isDuplicate;
}

function addBookToLibrary() {
  const data = new FormData(form);
  const obj = Object.fromEntries(data);
  let check = duplicateCheck(myLibrary, obj);
  if (!check){
  myLibrary.push(obj);
  addBookToScreen(obj);
  }
}

function addBookToScreen(obj){
  const newCard = document.createElement("div");
  const newCardTitle = document.createElement("div");
  const newCardAuthor = document.createElement("div");
  const newCardNum = document.createElement("div");
  const newCardRead = document.createElement("div");
  const scTitle = obj.title;
  const scAuthor = obj.Author;
  const scNum = obj.numOfPages;
  const scRead = obj.read;
  const toggleBtn = document.createElement("input");
  toggleBtn.setAttribute("type", "checkbox");
  
  toggleBtn.checked = scRead === "on";

  const divForRead = document.createElement("div");
  divForRead.setAttribute("class", "divForRead");

  newCardTitle.textContent = `Title: ${scTitle}`;
  newCardAuthor.textContent = `Author: ${scAuthor}`;
  newCardNum.textContent = `Number Of Pages: ${scNum}`;
  newCardRead.textContent = `Read: `

  newCard.appendChild(newCardTitle);
  newCard.appendChild(newCardAuthor);
  newCard.appendChild(newCardNum);
  newCard.appendChild(divForRead);

  divForRead.appendChild(newCardRead);
  divForRead.appendChild(toggleBtn);

  cards.appendChild(newCard);
}

// function addBookToScreen(book) {
//   const newCard = document.createElement("div");
//   newCard.innerHTML = `
//     <div>Title: ${book.title}</div>
//     <div>Author: ${book.author}</div>
//     <div>Number Of Pages: ${book.numOfPages}</div>
//     <div class="divForRead">
//       <div>Read: </div>
//       <input type="checkbox" ${book.read === "on" ? "checked" : ""}>
//     </div>
//   `;

//   cards.appendChild(newCard);
// }

addBtn.addEventListener("click",() => {
  dialog.showModal();
})

subBtn.addEventListener("click",addBookToLibrary);

clsoseBtn.addEventListener("click", () => {
  dialog.close();
});
