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
    // to the top button
    document.getElementById("toTheTop").style.display = "block";
  } else {
    // header
    document.getElementById("logo").style.width = "200px";
    // to the top button
    document.getElementById("toTheTop").style.display = "none";
  }
}

$(".c-carousel").slick({ dots: true });
