function checkForAdSkipButton() {
    const BUTTONS = [
        document.querySelector(".ytp-ad-skip-button"),
        document.querySelector(".ytp-ad-skip-button-modern"),
        document.querySelector('button[id^="skip-button:"]'),
        document.querySelector(".ytp-skip-ad-button"),
    ]
    console.log('---preventer----')
    for (let button of BUTTONS) {
        if (button) {
            button.click()
        }
    }
    console.log('---preventer----')
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