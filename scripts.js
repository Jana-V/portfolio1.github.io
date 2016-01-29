// Twitter
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.parentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');


// Facebook ??

$(document).ready(function(){

    alert("Document is ready!");
    $(".message-box").css("background", "#EEF4F5");


    // Smooth scrolling
      var $root = $('html, body');
        $('.navbar-nav a').click(function() {
            var href = $.attr(this, 'href');
            $root.animate({
                scrollTop: $(href).offset().top
            }, 500, function () {
                window.location.hash = href;
            });
            return false;
        });

    // Tooltips
      $(function () {
        $('[data-toggle="tooltip"]').tooltip();
      });


    // Tool tip jQuery
      $(function () {
        $('#item1').tooltip();
      });


    // Event Listener - Submit Button

      $("#button").on("click", function() {
              console.log("clicked");
              var comment = $(".message-box").val();
              
              if (comment = "") {
                $(".message-box").css("border", "5px solid red");
              } else {
                console.log(comment);
                $("#visible-comment").html(comment);
                $("form").hide();
              };

              return false;
      });

      $(".message-box").on("keyup", function() {
        console.log("keyup happened");
        var nameName = 3;
        var name = "string";
        var charCount = $(".message-box").val().length;
        console.log(charCount);
        $("#char-count").html(charCount);
        if(charCount > 50) {
          $("#char-count").css("color", "red");
        } else {
          $("#char-count").css("color", "black");
        };
      
      });



});
