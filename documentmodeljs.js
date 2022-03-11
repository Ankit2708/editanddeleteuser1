//console.dir(document);
//  console.log(document.domain);
//  console.log(document.URL);
//  console.log(document.title);
// document.title = 123;
//  console.log(document.body);
//  console.log(document.head);
//  console.log(document.all);
//  console.log(document.all[10]);
// document.all[10].textContent='Hello';
// console.log(document.forms);
//  console.log(document.links);
// console.log(document.images);
// //Get elementbyid
// console.log(document.getElementById('header-title'));
// let headerTitle=document.getElementById('header-title');
// let header=document.getElementById('main-header');
// console.log(headerTitle);
//  headerTitle.textContent='Hello';
//  headerTitle.innerText='Goodbye';
//  console.log(headerTitle.innerText);
// headerTitle.innerHTML='<h3>Hello</h3';
// headerTitle.style.borderBottom='solid 3px #000';
// header.style.borderBottom='solid 3px #000';
// let items=document.getElementsByClassName('title')[0];
// items.style.color="green";
// let items1=document.getElementsByClassName('list-group-item');
// console.log(items1);
// items1[0].style.fontWeight='bold';
// items1[1].style.fontWeight='bold';
// items1[2].style.fontWeight='bold';
// items1[3].style.fontWeight='bold';
// items1[2].style.backgroundColor='green';
//get element by tagname
let li=document.getElementsByTagName('li');
console.log(li);
li[1].textContent='hello 2';
li[1].style.fontWeight='bold';
li[1].style.backgroundColor='yellow';
for(let i=0;i<li.length;i++){
    li[i].style.backgroundColor='#f4f4f4';
}
