class GameChannel < ApplicationCable::Channel
  def subscribed
    stream_from 'game_channel'
    #stream_from "game_channel_user_#{connection_id}"
    # stream_from "game_channel_#{game.id}"
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end

end
