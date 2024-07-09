const url = location.href;
const regExp = /blog.csdn.net\/(.*)\/article\/details\//;
if (regExp.test(url)) {
  const html = document.querySelector("article").innerHTML;
  const title_text = document.querySelector(".title-article").innerHTML;
  const windowId = window.open("", "_blank");
  windowId.document.body.style.padding = "40px";
  windowId.document.body.innerHTML =
    `<h1 style="text-align:center">${title_text}</h1>` + html;
  windowId.document.title = title_text;
  chrome.storage.local.get(["isClose"]).then((result) => {
    const isClose= result.isClose
    if(isClose){
      window.close()
    }
  })
}
