let bigImg = document.querySelector(".bigImg img");

let images = document.querySelectorAll(".smallImage img");

images.forEach((img) => {
    img.addEventListener("click", () => {
        bigImg.src = img.src;
        bigImg.parentElement.children[1].innerHTML = img.parentElement.children[1].innerHTML
        speakText(img.parentElement.children[1].innerHTML)
    })
})

// function speakText(text) {
//     window.speechSynthesis.cancel();
//     var msg = new SpeechSynthesisUtterance();
//     msg.text = text;
//     msg.lang = "en-US";
//     window.speechSynthesis.speak(msg);
//   }
  