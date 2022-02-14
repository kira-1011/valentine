var head = document.getElementById("head");
var title = " " + head.innerText;


document.addEventListener("mousemove",(ev) =>{
    head.style.color = `rgb(${ev.clientX},0,${ev.clientY})`;
});


setInterval(function () 
{
 title = title[title.length - 1] + title.substring(0, title.length - 1);
  head.innerText = title;
}, 400);



