class CreateGames < ActiveRecord::Migration[5.1]
  def change
    create_table :games do |t|
      t.references :map, foreign_key: true
      t.references :user, foreign_key: true
      t.string :join_id

      t.timestamps
    end
  end
end
