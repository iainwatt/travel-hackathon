class CreateTrees < ActiveRecord::Migration
  def change
    create_table :trees do |t|
      t.string :name
      t.string :species
      t.string :location
      t.string :latitude
      t.string :logitude
      t.string :image
      t.string :description
      t.integer :height
      t.integer :girth
      t.integer :age

      t.timestamps null: false
    end
  end
end
