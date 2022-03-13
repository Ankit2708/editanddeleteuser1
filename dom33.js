let form=document.getElementById('addForm');
var itemlist=document.getElementById('items');
//form submit event
form.addEventListener('submit',addItem);
//delete event
itemlist.addEventListener('click',removeItem);
function addItem(e){
    e.preventDefault();
    // get input value
    var newItem=document.getElementById('item').value;
    //create new li element
    var li=document.createElement('li');
    //create class
    li.className='list-group-item';
    li.appendChild(document.createTextNode(newItem));
    //create delete button
    var deletebtn=document.createElement('button');
    //crate classes same as in html
    deletebtn.className='btn btn-danger btn-sm float-right delete';
    //appendchild
    deletebtn.appendChild(document.createTextNode('X'));
    li.appendChild(deletebtn);
    //edit button
    var editbtn=document.createElement('button');
    editbtn.className='editbutton';
    editbtn.appendChild(document.createTextNode('edit'));
    li.appendChild(editbtn);
    itemlist.appendChild(li);

}
function removeItem(e){
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure?')){
            var li=e.target.parentElement;
            itemlist.removeChild(li);
        }
    }
    
}
