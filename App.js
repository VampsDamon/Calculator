const output=document.querySelector(".out");
output.textContent="0";
let btns = document.querySelectorAll('button');
btns.forEach(function (btn) {
  btn.addEventListener('click', function() {
    if(btn.textContent==="AC")
     output.textContent="";
    else if(btn.textContent==="=")
    calculate();
    else
    output.textContent+=btn.textContent;
  });
});

function calculate(){
  const result=eval(output.textContent);
  output.textContent=result;
}