window.onload = init;

function init(){
   const mbtn = document.querySelector('#m_menu');
   const hd = document.querySelector("#hd");

   mbtn.addEventListener('click', function(){
        hd.classList.toggle('active')
   })
}