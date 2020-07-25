window.onload = function() {
  if (window.jQuery) {
    $(document).ready(function() {
      $(".sidebarNavigation .navbar-collapse").hide().clone().appendTo("body").removeAttr("class").addClass("sideMenu").show();
      $("body").append("<div class='overlay'></div>");
// When navbar (menu button) is toggled add the side menu and overlay
      $(".navbar-toggle, .navbar-toggler").on("click", function() {
        $(".sideMenu").addClass($(".sidebarNavigation").attr("data-sidebarClass"));
        $(".sideMenu, .overlay").toggleClass("open");
// If the overlay is clicked then close the side menu and remove the overlay
        $(".overlay").on("click", function() {
          $(this).removeClass("open");
          $(".sideMenu").removeClass("open")
        })
// If the close button is clicked then close the side menu and remove the overlay
        $(".closeBtn").on("click", function() {
          $(this).removeClass("open");
          $(".sideMenu").removeClass("open")
          $(".overlay").removeClass("open")
        })
      });
// Drop down menu (not currently in use)
      $("body").on("click", ".sideMenu.open .nav-item", function() {
        if (!$(this).hasClass("dropdown")) {
          $(".sideMenu, .overlay").toggleClass("open")
        }
      });
// Hide sidebar if there is no menu button
      $(window).resize(function() {
        if ($(".navbar-toggler").is(":hidden")) {
          $(".sideMenu, .overlay").hide()
        } else {
          $(".sideMenu, .overlay").show()
        }
      })
    })


  $(document).ready(function() {
// On scroll show/hide menu at top of screen
    $('body').css('padding-top', $('.navbar').outerHeight() + 'px')

// Detect scroll top or down
    if ($('.smart-scroll').length > 0) { // check if element exists
        var last_scroll_top = 0;
        $(window).on('scroll', function() {
            scroll_top = $(this).scrollTop();
            if(scroll_top < last_scroll_top) {
                $('.smart-scroll').removeClass('scrolled-down').addClass('scrolled-up');
            }
            else {
                $('.smart-scroll').removeClass('scrolled-up').addClass('scrolled-down');
            }
            last_scroll_top = scroll_top;
        });
    }
// Function for Scroll button on header
    $(function() {
      $(".scrollBtn").on('click', function(e) {
        e.preventDefault();
        $('html, body').animate({ scrollTop: $(window).height() + 110}, 600);
      });
    });
    })

  } else {
    console.log("Page Requires jQuery")
  }
}
