import consumer from "./consumer"

consumer.subscriptions.create("HeartsChannel", {
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
