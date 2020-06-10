
let a = document.querySelectorAll(".close");

a.forEach(function(close){

  close.addEventListener("click",function(click){
    click.preventDefault();
    let content = document.querySelector('.content');

    content.classList.remove("animate__fadeInDown");
    content.classList.remove("animate__animated");

    content.classList.add("animate__fadeOutUp");
    content.classList.add("animate__animated");

    setTimeout(function () {
      location.href="../index.html";
    },600);
  });
});
