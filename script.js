$(document).ready(function(){
  $(window).scroll(function(){
      if(this.scrollY > 20){
          $('.navbar').addClass("sticky");
      }
      else{
          $('.navbar').removeClass("sticky");
      }
      
  });




   

  $('.scroll-up').click(function(){
      $('html').animate({scrollToP: 0});
  });


  
$('.menu-btn').click(function(){
  $('.navbar .menu').toggleClass("active")
})

});


function git1(){
  window.location.href = "https://github.com/sanjanyadav420/Loseit-Clone"
  window.target = "_blank"
}

function deploy1(){
  window.location.href = "https://genuine-chimera-647bdb.netlify.app/"
}

function git2(){
  window.location.href = "https://github.com/rakeshrauniyar12/Spartans"
}

function deploy2(){
  window.location.href = "https://hilarious-ganache-c9d651.netlify.app/"
}

function git3(){
  window.location.href = "https://github.com/mrprincesingh/eager-mice-5540/"
}

function deploy3(){
  window.location.href = "https://delicate-alfajores-3592c1.netlify.app/"
}

function git4(){
  window.location.href = "https://github.com/DipaliSarjare/OverStack-Clone/"
}

function deploy4(){
  window.location.href = "https://deft-gecko-5d1a08.netlify.app/"
}

GitHubCalendar(".calendar", "DipaliSarjare");
// or enable responsive functionality
GitHubCalendar(".calendar", "DipaliSarjare", { responsive: true });