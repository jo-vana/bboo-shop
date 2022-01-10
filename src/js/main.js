//All your JS code goes here
// Back to top btn
var btn = $('#button');

jQuery(window).on('scroll' ,function() {
  if (jQuery(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  jQuery('html, body').animate({scrollTop:0}, '300');
});
// PopUp Cart
jQuery('#cart').click(function(e) {
  e.stopPropagation();
  jQuery(".shopping-cart").toggleClass("active");
});
// Close on outher click
jQuery(document).click(function() {
  var $item = jQuery(".shopping-cart");
  if ($item.hasClass("active")) {
    $item.removeClass("active");
  }
});

