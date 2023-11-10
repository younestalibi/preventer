function handleAdSkipButtonClick() {
    console.log('Ad skip button clicked');
  }
  function checkForAdSkipButton() {
    const adSkipButton = document.querySelector('.ytp-ad-skip-button');
    if (adSkipButton) {
      setTimeout(() => {
        adSkipButton.click();
      }, 500);
      handleAdSkipButtonClick();
    }
  }
  
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      checkForAdSkipButton();
    });
  });
  
  // Start observing the document for changes
  observer.observe(document, { childList: true, subtree: true });
  
  // Initial check for the ad skip button in case it already exists
  checkForAdSkipButton();
  