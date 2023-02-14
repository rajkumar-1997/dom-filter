

let form =document.getElementById('addForm');
let itemList=document.getElementById('items');
let filter=document.getElementById('filter');





   
let liAll=document.getElementsByClassName('list-group-item');
    
    

for(let i=0;i<liAll.length;i++){
  let editBtn=document.createElement('button');


  editBtn.className = 'btn btn-success btn-sm float-right ';

  editBtn.appendChild(document.createTextNode('Edit'));
  liAll[i].appendChild(editBtn);
}
   
  
    

   
   
    
    

//form submit event
form.addEventListener('submit', addItem);

//delete event
itemList.addEventListener('click',removeItem);


//filter event
filter.addEventListener('keyup',filterItems);

// Add item
function addItem(e){
    e.preventDefault();

    
  
    // Get input value
    let newItem = document.getElementById('item').value;
    let description=document.getElementById('description').value;
    // Create new li element
    let li = document.createElement('li');
    // Add class
    li.className = 'list-group-item';
    // Add text node with input value
    // li.appendChild(document.createTextNode(newItem));

  
    // Create del button element
    let deleteBtn = document.createElement('button');
    let editBtn=document.createElement('button');

    let ele=document.createElement('span');
    let des=document.createElement('span');

    ele.appendChild(document.createTextNode(newItem+' '));
    des.appendChild(document.createTextNode(description));
    // Add classes to del button
    deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
    editBtn.className = 'btn btn-success btn-sm float-right ';
  
    // Append text node
    deleteBtn.appendChild(document.createTextNode('X'));
    editBtn.appendChild(document.createTextNode('Edit'));

    li.appendChild(ele);
    li.appendChild(des);
  
    // Append button to li
    
    li.appendChild(deleteBtn);
    li.appendChild(editBtn);
  
     // Append li to list
     
    

    

    itemList.appendChild(li);

  }
 

//delete function
  function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('are you sure ?')){
            let li=e.target.parentElement;
            itemList.removeChild(li);
        }
    }
  }

  //filterfunction

  function filterItems(e){
    // convert text to lowercase
    var text = e.target.value.toLowerCase();
    // Get lis
    var items = itemList.getElementsByTagName('li');
    // Convert to an array
    Array.from(items).forEach(function(input){
      let itemName = input.firstChild.textContent;
      let description=input.childNodes[1].textContent;
      if(itemName.toLowerCase().indexOf(text) != -1 ||description.toLowerCase().indexOf(text) != -1  ){
        input.style.display = 'block';
      } else {
        input.style.display = 'none';
      }
    });
  }