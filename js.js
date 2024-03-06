document.addEventListener("DOMContentLoaded", function(){
    document.getElementById("burger").addEventListener("click", function(){
        document.querySelector(".header").classList.toggle("open")

    })

})

var message = "Привет! ";
alert(message);

$(window).scroll(function () {
    $(".filtr").css("display", "none").fadeIn("fast");
    });
