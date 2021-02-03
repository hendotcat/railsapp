import consumer from "./consumer"

const heartsChannel = consumer.subscriptions.create("HeartsChannel", {
  connected() {
    console.log("connected to hearts channel")
  },

  disconnected() {
    console.log("disconnected from hearts channel")
  },

  received(data) {
    console.log("received", data)
  },
});

document.addEventListener("click", event => {
  event.preventDefault()
  console.log("click")
  heartsChannel.send({})
})
