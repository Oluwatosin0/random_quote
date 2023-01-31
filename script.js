const quoteText = document.getElementById("text"),
authorName = document.getElementById("author"),
quoteBtn = document.querySelector("button"),
soundBtn = document.querySelector(".sound"),
copyBtn = document.querySelector(".copy"),
twitterBtn = document.getElementById("tweet-quote");


function randomQuote(){
  quoteBtn.classList.add("loading");
  quoteBtn.innerText = "Loading Quote...";
 fetch("https://api.quotable.io/random").then(res => res.json()).then(result =>{
   console.log(result);
   quoteText.innerText = result.content;
   authorName.innerText = result.author;
   quoteBtn.innerText = "New Quote";
   quoteBtn.classList.remove("loading");
 });
}

var index = 0;
function changeColors(){
  var colors = ["red", "blue", "orange", "green", "lightgrey","yellow", "purple", "brown"];

  document.getElementsByTagName("body")[0].
  style.background = colors[index++];

  if(index > colors.length - 1)
  index = 0;
}

soundBtn.addEventListener("click", ()=>{
  let utterance = new SpeechSynthesisUtterance(`${quoteText.innerText} by ${authorName.innerText}`);
  speechSynthesis.speak(utterance);
});

copyBtn.addEventListener("click", ()=>{
  navigator.clipboard.writeText(quoteText.innerText); 
});

twitterBtn.addEventListener("click", ()=>{
 let twwetUrl = `https://twitter.com/intent/tweet?url=${quoteText.innerText}`;
 window.open(tweetUrl, "_blank");
});


quoteBtn.addEventListener("click", randomQuote);   


