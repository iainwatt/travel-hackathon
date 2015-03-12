class CreateCountries < ActiveRecord::Migration
  def change
    create_table :countries do |t|
      t.string :name
      t.string :map
      t.string :murders

      t.timestamps null: false
    end
  end
end
