let div=document.querySelector("#div");
let mult=document.querySelector("#mult");
let min=document.querySelector("#min");
let plus=document.querySelector("#plus");
let disp=document.querySelector("#display");
let b=document.querySelectorAll(".b");
// b.forEach(element => {
//     console.log(element.textContent);
// });
// disp.textContent="2222222222222222";

disp.textContent="0";

function change(event)
{
    if(disp.textContent=="0")
        {
            
            disp.textContent=event.textContent.trim();
        }
    
    else
        {
            disp.textContent=`${disp.textContent}${event.textContent.trim()}`;
        }

}

function calc()
{

}

b.forEach(element => {
  element.addEventListener('click', function()
  {
    change(element);
  }); 
}); 
// b[0].addEventListener('click', (event)=>
// {
//     if(disp.textContent=="0")
//     {
//         disp.textContent=`7`;
//     }
//     else
//     {
//         disp.textContent=`${disp.textContent}7`;
//     }
// })



