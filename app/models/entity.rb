class Entity < ApplicationRecord
  belongs_to :game
  belongs_to :map
  enum size: %i[tiny small medium large huge gargantuan]
  before_create :set_default_size

  private

  def set_default_size
    self.size ||= :medium
  end
end
