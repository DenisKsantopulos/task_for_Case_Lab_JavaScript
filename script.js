let input = document.getElementById('input');
let ul = document.getElementById('ul');
let button = document.getElementById('button');
let ul_done = document.getElementById('ul_done');
const colorButton = document.getElementById('colorButton');


// сохранение списка li в localStorage
function saveList() {
  let list = document.getElementsByTagName('li');
  let arr = [];
  for (let i = 0; i < list.length; i++) {
    arr.push(list[i].innerHTML);
  }
  localStorage.setItem('list', JSON.stringify(arr));
}

// загрузка списка li из localStorage
function loadList() {
  let arr = JSON.parse(localStorage.getItem('list'));
  if (arr) {
    for (let i = 0; i < arr.length; i++) {
      let li = document.createElement('li');
      li.className = 'close';
      li.innerHTML = arr[i];
      ul.appendChild(li);
      list();
    }
  }
}

window.onload = function() {
  loadList();
};


function removeFirst() {
   var list = document.getElementById("ul");
   list.removeChild(list.firstElementChild); 
   saveList();
}
function removeLast() {
  var list = document.getElementById("ul");
  list.removeChild(list.lastElementChild); 
  saveList();
}


// четный или нечетный, меняется цвет

colorButton.addEventListener('click', changeColor);
colorButton1.addEventListener('click', changeColor1);

function changeColor() {
  let list = document.getElementsByTagName('li');
  
  for (let i = 0; i < list.length; i++) {
    if ((i+1)%2===0){
      list[i].style.backgroundColor = 'blue';
    }
  }
}
function changeColor1() {
  let list = document.getElementsByTagName('li');
  
  for (let i = 0; i < list.length; i++) {
    if ((i+1)%2 !=0){
      list[i].style.backgroundColor = 'grey';
    }
  }
}

button.addEventListener('click', function() {
  if (input.value.trim() === "") {
    // input пустой
    alert("Поле не может быть пустым")
  }
  else{
    let arr = [];
    arr.push(input.value);
    let li = document.createElement('li');
    li.className = 'close';
    li.id = 'idName';
    ul.appendChild(li);
    li.innerHTML += arr;

    list();
    saveList(); // сохраняем список в localStorage после добавления нового элемента
  }
  
});

function appendToDeleted() {
  this.style.display = 'none';
  ul_done.innerHTML += '<li>' + this.innerHTML + '</li>' + '<br>';
  /* saveList();  */// сохраняем список в localStorage после удаления элемента
}

function list() {
  let list = document.getElementsByTagName('li');
  for (let i = 0; i < list.length; i++) {
    list[i].addEventListener('click', appendToDeleted);
  }
  
}
