function checkForAdSkipButton() {
  const adSkipButton1 = document.querySelector(".ytp-ad-skip-button");
  const adSkipButton2 = document.querySelector(".ytp-ad-skip-button-modern");
  const adSkipButton3 = document.querySelector('button[id^="skip-button:"]');
  if (adSkipButton1) {
    adSkipButton1.click();
  } else if (adSkipButton2) {
    adSkipButton2.click();
  } else if (adSkipButton3) {
    adSkipButton3.click();
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
