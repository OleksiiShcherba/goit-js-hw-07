const list_element = document.querySelector('#categories');
const childrens_list = list_element.children;
console.log("Number of categories: " + childrens_list.length);

for (let category of childrens_list) {
    console.log("Category: " + category.firstElementChild.textContent);
    console.log("Elements: " + category.lastElementChild.children.length);
}