class CreateMaps < ActiveRecord::Migration[5.1]
  def change
    create_table :maps do |t|
      t.string :name
      t.text :description
      t.text :data
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end
