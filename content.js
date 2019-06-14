javascript: (function() {
  document.querySelector("#id_term").setAttribute("style", "width: 252px;");
  document
    .querySelector(".header-sitenav .subscribe a")
    .setAttribute("style", "color: #00ccff;");

  var hasFeatureVideo = document.querySelector(".featured-publishable-video");
  if (hasFeatureVideo) {
    var vidPlayer = document.querySelector("div.l-col-fluid");
    if (vidPlayer) {
      vidPlayer.setAttribute("style", "width: 1050px; height: 610px;");
    }

    var videoBlurb = document.querySelector("aside.l-col-fixed");
    if (videoBlurb) {
      videoBlurb.className = "l-col-fluid";
    }

    var pageBackground = document.querySelector("#panel");
    if (pageBackground) {
      pageBackground.setAttribute(
        "style",
        "background: url(https://d2rormqr1qwzpz.cloudfront.net/static/site/img/layout/bg-grid-alt.png) #101010 !important;"
      );
    }

    var titleBar = document.querySelector("section.upper");
    if (titleBar) {
      titleBar.setAttribute("style", "background: #000000 !important;");
    }

    var articleContainer = document.querySelector(".featured-publishable");
    if (articleContainer) {
      articleContainer.setAttribute("style", "background: #424242 !important;");
    }

    var descriptionText = document.querySelector(".description");
    if (descriptionText) {
      descriptionText.setAttribute("style", "color: white;");
    }

    var promoCarousel = document.querySelector(".promo-carousel-revamp");
    if (promoCarousel) {
      promoCarousel.setAttribute("style", "background: #424242 !important;");
    }

    var commentsContainer = document.querySelector(".comments-wrap");
    if (commentsContainer) {
      commentsContainer.setAttribute(
        "style",
        "background: #424242 !important;"
      );
    }

    var descriptionTitle = document.querySelector("a.title");
    if (descriptionTitle) {
      descriptionTitle.setAttribute("style", "color: #cacaca;");
    }

    var author = document.querySelector("span.author");
    if (author) {
      author.setAttribute("style", "color: #e05e00;");
    }

    var commentCounter = document.querySelector("a.comment-count");
    if (commentCounter) {
      commentCounter.setAttribute("style", "color: #e05e00;");
    }
  }
})();
