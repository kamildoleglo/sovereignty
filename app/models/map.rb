class Map < ApplicationRecord
  belongs_to :user
  has_many :games
  has_many :entities
end
