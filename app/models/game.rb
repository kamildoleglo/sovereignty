class Game < ApplicationRecord
  belongs_to :map
  belongs_to :user
  before_create :set_random_join_id

  private

  def set_random_join_id
    self.join_id ||= SecureRandom.hex
  end
end
