class GameChannel < ApplicationCable::Channel
  def subscribed
    #stream_from 'game_channel'
    game_id = params[:game_id].gsub(/\s+/, '')
    stream_from "game_channel_#{game_id}"
    #Entity.new(game_id:game_id, user_id
    #: params[:user_id]
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed

    puts "User_id end = " + params[:user_id].to_s
  end

  def receive(data)
    p data['coordinates']
  end
end
