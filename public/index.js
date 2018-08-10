'use strict';
$(document).ready(function() {
  $('.downBtn').on('click', function(event) {
    event.preventDefault();
    let target = event.currentTarget.hash;
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      1000
    );
  });

  $('.returnBtn').on('click', function(event) {
    event.preventDefault();
    let target = event.currentTarget.hash;
    $('html, body').animate(
      {
        scrollTop: $(target).offset().top
      },
      1000
    );
  });
});
