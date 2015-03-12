class AddColumnToTree < ActiveRecord::Migration
  def change
    add_column :trees, :address, :string
  end
end
