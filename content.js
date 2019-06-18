javascript: (function() {
  // Modifies styling on every page regardless
  document.querySelector("#id_term").setAttribute("style", "width: 252px;");

  var pageBackground = document.querySelector("#panel");
  if (pageBackground) {
    pageBackground.setAttribute(
      "style",
      "background: url(https://d2rormqr1qwzpz.cloudfront.net/static/site/img/layout/bg-grid-alt.png) #101010 !important;"
    );
  }

  var podcastPlayer = document.querySelector(
    "section.podcast-player .player"
  );
  if (podcastPlayer) {
    podcastPlayer.setAttribute("style", "background: #ffb732;");
  }

  var titleBar = document.querySelector("section.upper");
  if (titleBar) {
    titleBar.setAttribute("style", "background: #000000 !important;");
  }

  var popularNews = document.querySelector("section.popular-news");
  if (popularNews) {
    popularNews.setAttribute("style", "background: #424242 !important;");
  }

  // // Warning: This is inherently very slow to run.
  // var activeLinkText = document.getElementsByClassName("title");
  // if (activeLinkText) {
  //   for (var i = 0; i < activeLinkText.length; i++) {
  //     activeLinkText[i].setAttribute("style", "color: #cacaca;"); // Twitter blue.
  //   }
  // }

  // // Warning: This is inherently very slow to run.
  // var articleWrapper = document.getElementsByClassName("publishable");
  // if (articleWrapper) {
  //   for (var i = 0; i < articleWrapper.length; i++) {
  //     articleWrapper[i].setAttribute(
  //       "style",
  //       "background: #424242 !important; overflow: hidden;"
  //     );
  //   }
  // }

  var adSpamBlock = document.querySelector("aside.l-lastcol section.well");
  if (adSpamBlock) {
    adSpamBlock.setAttribute("style", "display: none");
  }

  var articleText = document.getElementsByClassName("parchment-content");
  if (articleText) {
    for (var i = 0; i < articleText.length; i++) {
      articleText[i].setAttribute("style", "color: #cacaca !important;");
    }
  }

  var recentVideos = document.querySelector("section.recent-videos");
  if (recentVideos) {
    recentVideos.setAttribute("style", "background: #424242 !important;");
  }

  var contactBox = document.querySelector(".aside-contact");
  if (contactBox) {
    contactBox.setAttribute("style", "background: #424242 !important;");
  }

  var podcastWrapper = document.querySelector(".featured-publishable-podcast");
  if (podcastWrapper) {
    podcastWrapper.setAttribute("style", "background: #424242 !important;");
  }

  var podcastWrapperText = document.querySelector("p.description");
  if (podcastWrapperText) {
    podcastWrapperText.setAttribute("style", "color: #cacaca;");
  }

  var oolaya = document.querySelector('iframe[src*="ooyala"]');
  if (oolaya) {
    oolaya.setAttribute("style", "display: none");
  }

  var videoArchive = document.getElementById("video-archive");
  if (videoArchive) {
    videoArchive.setAttribute("style", "background: #424242 !important;");
  }

  var nextVideoBox = document.querySelector('section.more');
  if (nextVideoBox) {
    nextVideoBox.remove();
  }

  // Replace all the premium flag images with pure CSS
  var articlePremiumContainer = document.querySelectorAll("article");
  if (articlePremiumContainer) {
    for (var i = 0; i < articlePremiumContainer.length; i++) {
      if (articlePremiumContainer[i].classList.contains("is_premium_content")) {
        articlePremiumContainer[i].querySelector("img.prem-flag").remove();

        var premiumFlag = document.createElement("div");
        premiumFlag.innerHTML = "PREMIUM";
        premiumFlag.setAttribute("class", "corner-ribbon");
        articlePremiumContainer[i].insertBefore(
          premiumFlag,
          articlePremiumContainer[i].childNodes[0]
        );
      }
    }
  }

  // // The stupid NEXT VIDEO Promo box code:
  // // .
  // var promoBox = document.querySelector('.js-promo-container');
  // if (promoBox) {
  //   // Grabs the selector that houses your content
  //   var contentToMove = document.querySelector(
  //     ".js-promo-container section.more"
  //   );
  //   // Creates a copy of that content
  //   var cloneContent = contentToMove.cloneNode(true);

  //   // Create the aside element to put the content into
  //   var newAsideBox = document
  //     .querySelector(".js-promo-container .l-row-fixed-fluid")
  //     .appendChild(document.createElement("aside"));

  //   // Gives the new aside container the correct style
  //   newAsideBox.setAttribute("class", "l-col-fixed");
  //   // Adds the cloned content into the aside container
  //   newAsideBox.appendChild(cloneContent);

  //   // Removes the original content from the old container (or else it'd be a duplicate)
  //   document.querySelector(
  //     ".js-promo-container .l-row-fixed-fluid section.more"
  //   ).remove();

  //   // Adds another selector to the promo container
  //   document
  //     .querySelector(".js-promo-container .more")
  //     .classList.add("promo-more");

  //   // Grabs the container by selector 'promo-more' and removes the '.more' selector
  //   document.querySelector(".promo-more").classList.remove("more");

  //   // Applies new style to the 'promo-more' container
  //   document
  //     .querySelector(".promo-more")
  //     .setAttribute(
  //       "style",
  //       "-webkit-box-sizing: border-box;-moz-box-sizing: border-box;box-sizing: border-box;background: #f000000;min-height: 100px;padding-left: 0px;position: absolute;bottom: 25px;width: 350px;padding-top: 0px;top: 630px;height: 190px;"
  //     );
  // }

  // Below applies styling to pages that contain 'feature-publishable-video' selector
  var hasFeatureVideo = document.querySelector(".featured-publishable-video");
  if (hasFeatureVideo) {
    var premVidContainer = document.querySelector(
      "section.is_premium_content > div.well-header-wrap"
    );
    if (premVidContainer) {
      var premiumTile = document.createElement("div");
      premiumTile.innerHTML = "PREMIUM";
      premiumTile.setAttribute("class", "well-subheader");
      premiumTile.setAttribute(
        "style",
        "color: #39d; border-style: solid; border-width: 1px; border-color: #39d;"
      );
      premVidContainer.appendChild(premiumTile);
    }

    var premiumFlag = document.querySelector(".prem-flag");
    if (premiumFlag) {
      premiumFlag.remove();
    }

    var vidPlayer = document.querySelector("div.l-col-fluid");
    if (vidPlayer) {
      vidPlayer.setAttribute("style", "width: 1050px; height: 610px;");
    }

    var videoBlurb = document.querySelector("aside.l-col-fixed");
    if (videoBlurb) {
      videoBlurb.className = "l-col-fluid";
    }

    var articleContainer = document.querySelector(".featured-publishable");
    if (articleContainer) {
      articleContainer.setAttribute("style", "background: #424242 !important;");
    }

    var descriptionTitle = document.querySelector("a.title");
    if (descriptionTitle) {
      descriptionTitle.setAttribute("style", "color: #cacaca;");
    }

    var author = document.querySelector("span.author");
    if (author) {
      author.setAttribute("style", "color: #e05e00;");
    }

    var descriptionText = document.querySelector(".description");
    if (descriptionText) {
      descriptionText.setAttribute("style", "color: white;");
    }

    var promoCarousel = document.querySelector(".promo-carousel-revamp");
    if (promoCarousel) {
      promoCarousel.setAttribute("style", "background: #424242 !important;");
    }
  }
})();
