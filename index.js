'use strict';
$(document).ready(function () {
  $('.desktopDownBtn, .downBtn, .returnBtn, #headerDownBtn').on('click', function (event) {
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
