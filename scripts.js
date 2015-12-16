// Twitter 
!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!
d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+'://platform.twitter.com/widgets.js';fjs.p
arentNode.insertBefore(js,fjs);}}(document, 'script', 'twitter-wjs');

// Facebook
<div id="fb-root">
$(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_GB/sdk.js#xfbml=1&version=v2.5";
      fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</div>



$(document).ready(function(){

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
  
  // Stellar
  $.stellar();

  // Tooltips
  $(function () {
    $('#item1').tooltip();
  });

  $(function () {
    $('[data-toggle="tooltip"]').tooltip();
  });

  // Event listener
  $("#button").on("click", function() {
      console.log("clicked");
      var comment = $(".message-box").val();
      // all the rest of our code still goes up here
      return false;
      // no code here!
});
  $("#visible-comment").html(comment);
  $(",message-box").hide();



});
