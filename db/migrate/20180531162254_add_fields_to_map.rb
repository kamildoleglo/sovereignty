class AddFieldsToMap < ActiveRecord::Migration[5.1]
  def change
    add_column :maps, :size_x, :integer
    add_column :maps, :size_y, :integer
  end
end
