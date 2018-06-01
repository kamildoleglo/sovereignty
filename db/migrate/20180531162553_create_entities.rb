class CreateEntities < ActiveRecord::Migration[5.1]
  def change
    create_table :entities do |t|
      t.integer :position_x
      t.integer :position_y
      t.boolean :can_be_overlapped
      t.string :name
      t.references :game, foreign_key: true
      t.references :map, foreign_key: true
      t.integer :color
      t.integer :size

      t.timestamps
    end
  end
end
