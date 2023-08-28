let btn = document.getElementById('btn');
let list = document.getElementById('items-list');

btn.addEventListener('click', addItem);

function addItem() {
    let item = document.createElement('li');
    item.innerHTML = document.getElementById('input').value;
    list.appendChild(item);
    input.value = ""
    item.addEventListener('click', function() {
        item.style.textDecoration = "line-through";
    })
    item.addEventListener('dblclick', function() {
        list.removeChild(item);
    })
}

