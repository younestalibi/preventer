function checkForAdSkipButton() {
  const adSkipButton1 = document.querySelector(".ytp-ad-skip-button");
  const adSkipButton2 = document.querySelector(".ytp-ad-skip-button-modern");
  if (adSkipButton1) {
    adSkipButton1.click();
  } else if (adSkipButton2) {
    adSkipButton2.click();
  } else {
    let targetText = "التخطّي";
    let elementsWithText = document.querySelectorAll(
      ":contains(" + targetText + ")"
    );

    elementsWithText.forEach((element) => {
      let parent = element;
      while (parent && parent.tagName !== "button") {
        parent = parent.parentElement;
      }
      if (parent && parent.tagName === "button") {
        parent.click();
      }
    });
  }
}

const observer = new MutationObserver(function (mutations) {
  mutations.forEach(function (mutation) {
    checkForAdSkipButton();
  });
});

// Start observing the document for changes
observer.observe(document, { childList: true, subtree: true });

// Initial check for the ad skip button in case it already exists
checkForAdSkipButton();
