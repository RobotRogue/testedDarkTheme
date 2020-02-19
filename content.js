javascript: (function() {
  // This bit will update their existing Social links with more up to date ones
  var pageHead = document.querySelector("head");
  if (pageHead) {
    var fontAwesome = document.createElement("link");
    fontAwesome.setAttribute("rel", "stylesheet");
    fontAwesome.setAttribute(
      "href",
      "https://use.fontawesome.com/releases/v5.9.0/css/all.css"
    );
    pageHead.appendChild(fontAwesome);
  }

  document.onkeydown = function(e) {
    if (e.ctrlKey && e.shiftKey && e.which == 69) {
      alert("chrome://extensions/");
    }
  };

  // var promoVideo = document.querySelector(
  //   ".js-promo-container .featured-publishable-video"
  // );
  // if (promoVideo) {
  //   promoVideo.classList.add("corner-ribbon");
  // }

  /*
  // WORK IN PROGRESS...
  var promoVideo = document.querySelectorAll(
    ".js-promo-container .featured-publishable-video"
  );
  if (promoVideo) {
    for (var i = 0; i < promoVideo.length; i++) {
      if (promoVideo[i].classList.contains("is_premium_content")) {
        promoVideo[i].querySelector("img.prem-flag").remove();

        var premiumFlag = document.createElement("div");
        premiumFlag.innerHTML = "PREMIUM";
        premiumFlag.setAttribute("class", "corner-ribbon");
        promoVideo[i].insertBefore(
          premiumFlag,
          promoVideo[i].childNodes[0]
        );
      }
    }
  }
  */

  var emailIcon = document.querySelector('[data-icon-after="m"]');
  if (emailIcon) {
    var newEmailIcon = document.createElement("i");
    newEmailIcon.setAttribute("class", "far fa-envelope fa-lg");
    newEmailIcon.setAttribute("style", "color: #fff; padding-top: 3px;");
    emailIcon.appendChild(newEmailIcon);

    emailIcon.removeAttribute("data-icon-after");
  }

  var commentsIcon = document.querySelector('[data-icon-after="c"]');
  if (commentsIcon) {
    var newCommentIcon = document.createElement("i");
    newCommentIcon.setAttribute("class", "far fa-comment-alt fa-lg");
    newCommentIcon.setAttribute("style", "color: #fff; padding-top: 3px;");
    commentsIcon.appendChild(newCommentIcon);

    commentsIcon.removeAttribute("data-icon-after");
  }

  var socialLinks = document.querySelector(".header-social.header-social-top");
  if (socialLinks) {
    socialLinks.innerHTML =
      '<ul class="list-inline"><li><a href="https://www.instagram.com/testedcom/" target="_blank"><i class="fab fa-instagram fa-2x" title="Instagram"></i></a></li><li><a href="https://www.youtube.com/user/testedcom" target="_blank"><i class="fab fa-youtube-square fa-2x" title="YouTube"></i></a></li><li><a href="https://twitter.com/testedcom" target="_blank"><i class="fab fa-twitter-square fa-2x" title="Twitter"></i></a></li><li><a href="https://www.facebook.com/testedcom" target="_blank"><i class="fab fa-facebook-square fa-2x" title="Facebook"></i></a></li><li><a href="https://www.tested.com/feeds/" target="_blank"><i class="fas fa-rss-square fa-2x" title="RSS"></i></a></li></ul>';
  }

  var removeGooglePlus = document.querySelector(
    'a[href*="plus.google.com"][rel="publisher"]'
  );
  if (removeGooglePlus) {
    removeGooglePlus.remove();
  }

  var blockAdSpam = document.querySelector("aside.l-lastcol section.well");
  if (blockAdSpam) {
    blockAdSpam.setAttribute("style", "display: none");
  }

  var blockAdSpam2 = document.querySelector(".aside-promo");
  if (blockAdSpam2) {
    blockAdSpam2.setAttribute("style", "display: none");
  }

  var oolaya = document.querySelector('iframe[src*="ooyala"]');
  if (oolaya) {
    oolaya.setAttribute("style", "display: none");
  }

  var hideNextVideoBox = document.querySelector("section.more");
  if (hideNextVideoBox) {
    hideNextVideoBox.remove();
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
        "color: #39d !important; border-style: solid; border-width: 1px; border-color: #39d;"
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
  }
})();
