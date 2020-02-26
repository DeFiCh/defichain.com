$(function() {
  $('body').scrollspy({
    target: '#TableOfContents',
    offset: 154
  });

  $("#TableOfContents").stick_in_parent({
    offset_top: 144
  });
})