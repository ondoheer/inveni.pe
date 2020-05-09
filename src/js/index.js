window.onscroll = function () {
  scrollFunction();
};

/**
 * Things that happen as you scroll down or up
 * 1. Header rezises
 * 2.  toggles To the top button
 */
function scrollFunction() {
  if (
    document.body.scrollTop > 105 ||
    document.documentElement.scrollTop > 105
  ) {
    // Header
    document.getElementById("logo").style.width = "140px";
  } else {
    // header
    document.getElementById("logo").style.width = "200px";
  }
}

$(".c-carousel").slick({
  dots: true,
  infinite: true,
  autoplay: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
      },
    },
  ],
});

// Close menu when clicking it
$(".navbar-collapse ul li").click(function () {
  var menu = document
    .getElementById("navbarSupportedContent")
    .classList.remove("show");
});
