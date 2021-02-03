import consumer from "./consumer"

let index = 0
const emojis = ["♥️", "🧡", "💛", "💚", "💙", "💜"]

const heartsChannel = consumer.subscriptions.create("HeartsChannel", {
  connected() {
    console.log("connected to hearts channel")
  },

  disconnected() {
    console.log("disconnected from hearts channel")
  },

  received(data) {
    const hearts = document.querySelector(".hearts")
    const heart = document.createElement("li")
    heart.className = "heart"
    heart.innerText = emojis[index]

    index += 1
    index %= emojis.length

    hearts.appendChild(heart)

    setTimeout(() => {
      hearts.removeChild(heart)
    }, Math.pow(2, 10))
  },
});

document.addEventListener("click", event => {
  event.preventDefault()
  console.log("click")
  heartsChannel.send({})
})

