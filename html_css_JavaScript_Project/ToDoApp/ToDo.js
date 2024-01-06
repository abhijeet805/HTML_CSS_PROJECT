let todoList=[{
    item:'Buy Milk',
    duedate:'04/10/2023'
}
];

displayItem();

function addTodo(){
    let todoitem=document.body.querySelector('#work').value;
    let tododate=document.body.querySelector('#tododate').value;
    todoList.push({item:todoitem,duedate:tododate});
    todoitem.value='';
    tododate.value='';
   displayItem();
}

function displayItem(){
   let todoContainer=document.querySelector('.todo-container');
   let newHtml='';
   for (let i = 0; i < todoList.length; i++) {
   let{item,duedate}=todoList[i];
   //concat the html tags
   newHtml +=`  
   <span>${item }</span>
   <span>${duedate}</span>
   <button class="btn-delete" onclick="todoList.splice(${i}, 1);
   displayItem();">Delete</button>
   `;
   }
  todoContainer.innerHTML=newHtml;
}