let itemlist=document.querySelector('#items');
            //parentNode
// console.log(itemlist.parentNode);//div id main is parentNode of item in html
// itemlist.parentNode.style.backgroundcolor='#f4f4f4';
// console.log(itemlist.parentNode.parentNode.parentNode);
                 
                //parentelement and parentnode are interchangeable
// console.log(itemlist.parentElement);
// itemlist.parentElement.style.backgroundColor='#f4f4f4';
//                 //childnodes
// console.log(itemlist.childNodes);
// console.log(itemlist.children);
// itemlist.children[1].style.backgroundColor='yellow';

//         //firstchild
// console.log(itemlist.firstChild);// gives textnode
// console.log(itemlist.firstElementChild);
// itemlist.firstElementChild.textContent='hello1';
        
//         //lastchild
// console.log(itemlist.lastChild);// gives textnode
// console.log(itemlist.lastElementChild);
// itemlist.lastElementChild.textContent='hello2';

        //nextsibling
console.log(itemlist.nextSibling);
        //nextelementsibling
console.log(itemlist.nextElementSibling);   //null because it does not have next sibling
        //previous sibling
console.log(itemlist.previousSibling);
            //previous elementsibling
console.log(itemlist.previousElementSibling);
itemlist.previousElementSibling.style.color='green';

        //create div
let newdiv=document.createElement('div');
        //add class
newdiv.className='Hello';
        //add id
newdiv.id='hello1';
        //add attribute
newdiv.setAttribute('title','Hello div');
        //create textnode
let newdivText=document.createTextNode('Hello World');
newdiv.appendChild(newdivText); //until now hello world only appended on javascript not on dom
console.log(newdiv);
let container=document.querySelector('header .container');
let h1=document.querySelector('header h1');
container.insertBefore(newdiv,h1);

        //before item 1
let newdiv2=document.createElement('div');
        //add class
newdiv2.className='Hello2';
        //add id
newdiv2.id='hello2';
        //add attribute
newdiv2.setAttribute('title','Hello div2');
        //create textnode
let newdivText2=document.createTextNode('Hello World');
newdiv2.appendChild(newdivText2);
let item1before=document.querySelector('div .list-group');
let li1=document.querySelector('.list-group-item');
item1before.insertBefore(newdiv2,li1);