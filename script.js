let div=document.querySelector("#div");
let mult=document.querySelector("#mult");
let min=document.querySelector("#min");
let plus=document.querySelector("#plus");
let disp=document.querySelector("#display");
let b=document.querySelectorAll(".b");
let C=document.querySelector("#C");
// b.forEach(element => {
//     console.log(element.textContent);
// });
// disp.textContent="2222222222222222";
let operator;
let first=0;
let second=0;
let check=0;

disp.textContent="0";

function change(event)
{
    if(disp.textContent=="0" )
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

function op()
{
    for(let i=0;i<b.length;i++)
    {
        if(check==1)
        {
            if(i==3 || i==7 || i==11 || i==14 || i==15)
            {
                b[i].addEventListener('click', function()
                {
                    check=1;
                    if(check==0)
                    {
                        change(b[i]);
                    }
                    
                }); 
            }
        }
        
    }
}

for(let i=0;i<b.length;i++)
{
    if(i==3 || i==7 || i==11 || i==14 || i==15)
    {
        continue;
    }
    else
    {
        b[i].addEventListener('click', function()
    {
        change(b[i]);
    }); 

    }
}

C.addEventListener('click', function reset()
{
    display.textContent="0";
})

op();
// b.forEach(element => {
//     if()
//   element.addEventListener('click', function e()
//   {
//     change(element);
//   }); 
// // }); 
// b[14].removeEventListener('click', e);
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



