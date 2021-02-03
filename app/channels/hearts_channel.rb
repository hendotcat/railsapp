class HeartsChannel < ApplicationCable::Channel
  def subscribed
    stream_from "hearts_channel"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end
