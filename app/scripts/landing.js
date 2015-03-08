$(document).ready(function(){
  $('.hero-content h3').click(function () {
    var subText = $(this).text();
    $(this).text(subText + "!");
  });

  
  $('.hero-content h3').hover(
    function(){ $(this).css('color', 'red')   },
    function(){ $(this).css('color', 'white') }
  );

  $('.selling-points .point').hover(
    function(){ $(this).animate({'margin-top': '10px'}) },
    function(){ $(this).animate({'margin-top':  '0px'}) }
  );

  $('.selling-points .point h5').click(
    function(){$(this).css('font-size', '20px'); }
  )

  $('nav').click(function(){
    $(this).fadeOut(500);
  });
});
