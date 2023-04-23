$(document).ready(function() {
  var gallery = $('.gallery');
  var originalOrder = gallery.html();
  
  // Filter by category
  $('.button').click(function() {
      var category = $(this).data('filter');
      if (category === 'all') {
          $('.image').fadeIn(1).removeClass('hide filtered').addClass('visible');
          $('.caption').fadeIn(1).removeClass('hide filtered').addClass('visible');
          // Restore original order
          gallery.html(originalOrder);
      } else {
          var filteredImages = $('.image.' + category);
          var filteredCaptions = filteredImages.siblings('.caption');
          var nonFilteredImages = $('.image:not(.' + category + ')');
          var nonFilteredCaptions = nonFilteredImages.siblings('.caption');
          
          filteredImages.fadeIn(1).removeClass('hide filtered').addClass('visible');
          filteredCaptions.fadeIn(1).removeClass('hide filtered').addClass('visible');
          
          nonFilteredImages.fadeOut(1).addClass('hide filtered').removeClass('visible');
          nonFilteredCaptions.fadeOut(1).addClass('hide filtered').removeClass('visible');
          
          // Move the filtered articles to the leftmost position
          filteredImages.each(function(index) {
              $(this).parent().insertBefore(gallery.children().eq(index));
          });
      }

      // Change button class on click
      $('.button').removeClass('default primary');
      $(this).addClass('default primary');
  });
});
