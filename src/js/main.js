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
// Product count (+ -)
function increaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value++;
  document.getElementById('number').value = value;
}

function decreaseValue() {
  var value = parseInt(document.getElementById('number').value, 10);
  value = isNaN(value) ? 0 : value;
  value < 1 ? value = 1 : '';
  value--;
  document.getElementById('number').value = value;
}

