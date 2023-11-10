// content.js
// Function to handle the button click
function handleAdSkipButtonClick() {
    console.log('Ad skip button clicked');
    // Perform actions based on the ad skip button click
  }
  
  // Function to check for the existence of the ad skip button
  function checkForAdSkipButton() {
    const adSkipButton = document.querySelector('.ytp-ad-skip-button');
    if (adSkipButton) {
      // The ad skip button exists, trigger the click event
      setTimeout(() => {
        adSkipButton.click();
      }, 1000);
      handleAdSkipButtonClick();
    }
  }
  
  // Create a MutationObserver instance
  const observer = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
      // Check for changes in the document (you can adjust this based on your needs)
      checkForAdSkipButton();
    });
  });
  
  // Start observing the document for changes
  observer.observe(document, { childList: true, subtree: true });
  
  // Initial check for the ad skip button in case it already exists
  checkForAdSkipButton();
  