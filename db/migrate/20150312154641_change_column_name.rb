class ChangeColumnName < ActiveRecord::Migration
  def change
    rename_column :trees, :image, :tree_image
  end
end
