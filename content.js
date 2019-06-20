javascript: (function() {
  // This bit will update their existing Social links with more up to date ones... (not dont yet)
  // var socialLinks = document.querySelector(
  //   ".header-social.header-social-top"
  // );
  // if (socialLinks) {
  //   socialLinks.innerHTML = '<a href="http://www.google.com/>lul</a>'
  // }
  // SVG Author Credit: <div>Icons made by <a href="https://www.flaticon.com/authors/simpleicon" title="SimpleIcon">SimpleIcon</a> from <a href="https://www.flaticon.com/"                 title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

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
