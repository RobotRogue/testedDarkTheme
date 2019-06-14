javascript: (function() {
  var searchBar = document.querySelector("#id_term");
  if (searchBar) {
    searchBar.setAttribute("style", "width: 252px;");
  }
  var playerContainer = document.querySelector("div.l-col-fluid");
  if (playerContainer) {
    playerContainer.setAttribute("style", "width: 1050px; height: 610px;");
  }
  var textBlurb = document.querySelector("aside.l-col-fixed");
  if (textBlurb) {
    textBlurb.className = "l-col-fluid";
  }
  var background = document.querySelector("#panel");
  if (background) {
    background.setAttribute("style", "background: #101010 !important;");
  }
  var upperBackground = document.querySelector("section.upper");
  if (upperBackground) {
    upperBackground.setAttribute("style", "background: #101010 !important;");
  }
  var containerBackground = document.querySelector(".featured-publishable");
  if (containerBackground) {
    containerBackground.setAttribute(
      "style",
      "background: #424242 !important;"
    );
  }
  var containerDescriptionText = document.querySelector(".description");
  if (containerDescriptionText) {
    containerDescriptionText.setAttribute("style", "color: white;");
  }
  var carouselBack = document.querySelector(".promo-carousel-revamp");
  if (carouselBack) {
    carouselBack.setAttribute("style", "background: #424242 !important;");
  }
})();
