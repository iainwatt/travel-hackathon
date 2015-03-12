class ChangeColumnNameLongitude < ActiveRecord::Migration
  def change
    rename_column :trees, :logitude, :longitude
  end
end
