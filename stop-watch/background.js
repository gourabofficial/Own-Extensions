chrome.runtime.onInstalled.addListener(() => {
  console.log('Stopwatch Timer extension installed');
});

// Listen for messages from the popup (if needed)
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.action === 'startTimer') {
    console.log("Start Timer action received");
    // Add timer starting logic here (like starting a timer in background)
  } else if (message.action === 'resetTimer') {
    console.log("Reset Timer action received");
    // Add timer resetting logic here
  }
});
