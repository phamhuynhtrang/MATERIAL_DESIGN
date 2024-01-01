var dropNode = document.querySelector('.menu li:last-child');
var menusecNode = document.querySelector('.menu-sec');
console.log({element:dropNode} );
console.log(menusecNode.classList);
dropNode.onclick=function(){
    dropNode.classList.toggle('bg-pri');
    menusecNode.classList.toggle('dp-none');
    menusecNode.classList.toggle('dp-block');
console.log(menusecNode.classList);


        
};
const element1 = document.querySelector('.app')
console.log({element:element1} );
element1.onscroll = function (){
  console.log(element.scrollLeft);
};
