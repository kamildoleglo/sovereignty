$(document).on "turbolinks:load", ->
  uid = new Uint32Array(1);
  window.crypto.getRandomValues(uid);

  App.game = App.cable.subscriptions.create {channel: "GameChannel", game_id: $("#join_id").html(), user_id: uid[0]},
    connected: ->
      # Called when the subscription is ready for use on the server

    disconnected: ->
      # Called when the subscription has been terminated by the server

    received: (data) ->
      alert data
      # Called when there's incoming data on the websocket for this channel
