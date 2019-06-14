// javascript: (function() {
//   var searchBar = document.querySelector("#id_term");
//   if (searchBar) {
//     searchBar.setAttribute("style", "width: 252px;");
//   }
//   var playerContainer = document.querySelector("div.l-col-fluid");
//   if (playerContainer) {
//     playerContainer.setAttribute("style", "width: 1050px; height: 610px;");
//   }
//   var textBlurb = document.querySelector("aside.l-col-fixed");
//   if (textBlurb) {
//     textBlurb.className = "l-col-fluid";
//   }
//   var background = document.querySelector("#panel");
//   if (background) {
//     background.setAttribute(
//       "style",
//       "background: url(https://d2rormqr1qwzpz.cloudfront.net/static/site/img/layout/bg-grid-alt.png) #101010 !important;"
//     );
//   }
//   var upperBackground = document.querySelector("section.upper");
//   if (upperBackground) {
//     upperBackground.setAttribute("style", "background: #101010 !important;");
//   }
//   var containerBackground = document.querySelector(".featured-publishable");
//   if (containerBackground) {
//     containerBackground.setAttribute(
//       "style",
//       "background: #424242 !important;"
//     );
//   }
//   var containerDescriptionText = document.querySelector(".description");
//   if (containerDescriptionText) {
//     containerDescriptionText.setAttribute("style", "color: white;");
//   }
//   var carouselBack = document.querySelector(".promo-carousel-revamp");
//   if (carouselBack) {
//     carouselBack.setAttribute("style", "background: #424242 !important;");
//   }
//   var titleLink = document.querySelector("a.title");
//   if (titleLink) {
//     titleLink.setAttribute("style", "color: #cacaca;");
//   }
//   document
//     .querySelector("span.author")
//     .setAttribute("style", "color: #e05e00;");
//   document
//     .querySelector("a.comment-count")
//     .setAttribute("style", "color: #e05e00;");
// })();

javascript: (function() {
  var featureVideo = document.querySelector('.featured-publishable-video')
  if (featureVideo) {
  document.querySelector("#id_term").setAttribute("style", "width: 252px;");
  document
    .querySelector("div.l-col-fluid")
    .setAttribute("style", "width: 1050px; height: 610px;");
  document.querySelector("aside.l-col-fixed").className = "l-col-fluid";
  document
    .querySelector("#panel")
    .setAttribute(
      "style",
      "background: url(https://d2rormqr1qwzpz.cloudfront.net/static/site/img/layout/bg-grid-alt.png) #101010 !important;"
    );
  document
    .querySelector("section.upper")
    .setAttribute("style", "background: #101010 !important;");
  document
    .querySelector(".featured-publishable")
    .setAttribute("style", "background: #424242 !important;");
  document.querySelector(".description").setAttribute("style", "color: white;");
  document
    .querySelector(".promo-carousel-revamp")
    .setAttribute("style", "background: #424242 !important;");
  document.querySelector("a.title").setAttribute("style", "color: #cacaca;");
  document.querySelector("span.author").setAttribute("style", "color: #e05e00;");
  document
    .querySelector("a.comment-count")
    .setAttribute("style", "color: #e05e00;");
  }
})();
