$(document).ready(function(){
  $("#design-pic").click(function(){
   $(".design-p").toggle();
   $("#design-pic").toggle();
  });
  $(".design-p").click(function(){
   $("#design-pic").show();
   $(".design-p").hide();
  });
  $("#develop-pic").click(function(){
    $(".develop-p").toggle();
    $("#develop-pic").toggle();
  });
  $(".develop-p").click(function(){
    $("#develop-pic").show();
    $(".develop-p").hide();
  });
  $("#prod-pic").click(function(){
     $(".prod-p").toggle();
     $("#prod-pic").toggle();
   });
   $(".prod-p").click(function(){
     $("#prod-pic").show();
     $(".prod-p").hide();
   })
  });

 

$(document).ready(function(){
      $('.overlay').mouseover(function () {
            $('.text').show();
        }).mouseout(function () {
            $('.text').hide();
        });


        $('.overlay2').mouseover(function () {
          $('.text2').show();
      }).mouseout(function () {
          $('.text2').hide();
      });


      $('.overlay3').mouseover(function () {
        $('.text3').show();
    }).mouseout(function () {
        $('.text3').hide();
      });


      $('.overlay4').mouseover(function () {
        $('.text4').show();
    }).mouseout(function () {
        $('.text4').hide();
      });


      $('.overlay5').mouseover(function () {
        $('.text5').show();
    }).mouseout(function () {
        $('.text5').hide();
      });


      $('.overlay6').mouseover(function () {
        $('.text6').show();
    }).mouseout(function () {
        $('.text6').hide();
      });


      $('.overlay7').mouseover(function () {
        $('.text7').show();
    }).mouseout(function () {
        $('.text7').hide();
      });


      $('.overlay8').mouseover(function () {
        $('.text8').show();
    }).mouseout(function () {
        $('.text8').hide();
      });
    });


    function contact(form){
      var name = document.forms["myform"]["name"].value;
      var email = document.forms["myform"]["email"].value;
      var message = document.forms["myform"]["textarea"].value;
          alert("Hi " + name + "," + " We have received your message. Thank you for reaching out to us. ");
            };
            