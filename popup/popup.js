var switchButton = document.querySelector(".switch input");
chrome.storage.local.get(["isClose"]).then((result) => {
  switchButton.checked = result.isClose;
});
switchButton.addEventListener("change", async function () {
  if (this.checked) {
    value = 1;
  } else {
    value = 0;
  }
  chrome.storage.local.set({ isClose: value });
});
