module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :connection_id

    def connect
      self.connection_id = SecureRandom.hex
    end

  end
end
