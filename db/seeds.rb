# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Tree.destroy_all

Tree.create(
  name: 'General Sherman', 
  species: 'sequoias', 
  location: 'Giant Forest Grove California', 
  latitude: '36° 34′ 51″ N', 
  longitude: '118° 45′ 3″ W', 
  tree_image: open("http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/General_Sherman_tree_looking_up.jpg/170px-General_Sherman_tree_looking_up.jpg"),
  description: 'named after William Tecumseh Sherman', 
  height: 274.9, 
  girth: 102.6)

puts "seed success"

# remote_[attribut name]_url