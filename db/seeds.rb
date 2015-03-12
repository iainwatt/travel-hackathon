# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Tree.create(
  name: 'General Sherman', 
  species: 'sequoias', 
  location: 'Giant Forest Grove California', 
  latitude: '36° 34′ 51″ N', 
  longitude: '118° 45′ 3″ W', 
  tree_image: open("http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/General_Sherman_tree_looking_up.jpg/170px-General_Sherman_tree_looking_up.jpg"),
  description: 'named after William Tecumseh Sherman', 
  height: 274.9, 
  girth: 102.6,
  address: 'Three Rivers California USA')

puts "seed success"

Tree.create(
  name: 'Old Fathful', 
  species: 'Yew', 
  location: 'Top Secret', 
  latitude: '11° 34′ 51″ N', 
  longitude: '115° 12′ 3″ W', 
  tree_image: open("http://fc03.deviantart.net/fs71/i/2011/137/c/7/amazing_tree_by_zlata_petal-d3glqk5.jpg"),
  description: 'Said to have eaten 3 children', 
  height: 264.9, 
  girth: 104.6)

# remote_[attribut name]_url