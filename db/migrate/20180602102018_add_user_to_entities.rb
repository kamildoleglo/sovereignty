class AddUserToEntities < ActiveRecord::Migration[5.1]
  def change
    add_reference :entities, :user, foreign_key: true
  end
end
