//alert(document.getElementsByTagName('title')[0].innerText)
//alert(document.location.href);
//var downloadapi = "http://localhost:3000/ytd/download";
//var audiodownloadapi= "http://localhost:3000/ytd/downloada";
//var videodownloadapi= "http://localhost:3000/ytd/downloadv";
var audiodownloadapi= "https://calm-wildwood-17843.herokuapp.com/ytd/downloada";
var videodownloadapi= "https://calm-wildwood-17843.herokuapp.com/ytd/downloadv";

function downloadVideo(){
    window.location=videodownloadapi+"?url="+document.location.href;
}

function downloadAudio(){
    window.location=audiodownloadapi+"?url="+document.location.href;
}
//downloadVideo();
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.e == "vd"){
      downloadVideo();
    }else if (request.e == "ad"){
      downloadAudio();
    }
      /*var xmlhttp = new XMLHttpRequest();   // new HttpRequest instance
      xmlhttp.open("POST", downloadapi);
      xmlhttp.setRequestHeader("Content-Type", "application/json");
      xmlhttp.send(JSON.stringify({"url":document.location.href}));
      xmlhttp.upload.addEventListener("error", function(err){
          sendResponse(err);
      });
      xmlhttp.upload.addEventListener("progress", function(result){
          sendResponse(result);
      });*/
  });
