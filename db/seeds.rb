# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Tree.delete_all

Tree.create(
  name: 'General Sherman', 
  species: 'Sequoias', 
  location: 'Giant Forest Grove California', 
  latitude: '37.42291810', 
  longitude: '-122.08542120', 
  tree_image: open("http://tourismattraction.com/wp-content/uploads/2013/12/pano_1976.jpg"),
  description: 'named after William Tecumseh Sherman', 
  height: 274.9, 
  girth: 102.6,
  address: 'Three Rivers California USA')

Tree.create(
  name: 'Old Fathful', 
  species: 'Yew', 
  location: 'Top Secret', 
  latitude: '39.42426708029149', 
  longitude: '-122.0840722197085', 
  tree_image: open("http://fc03.deviantart.net/fs71/i/2011/137/c/7/amazing_tree_by_zlata_petal-d3glqk5.jpg"),
  description: 'Said to have eaten 3 children', 
  height: 264.9, 
  girth: 104.6)

Tree.create(
  name: 'Quinault Lake Spruce', 
  species: 'Sitka Spruce', 
  location: 'Quinault Lake Spruce Olympic National Park Washington USA', 
  latitude: '47.9694', 
  longitude: '-123.4986', 
  tree_image: open("http://upload.wikimedia.org/wikipedia/commons/9/9e/QuinaltSpruce_7246c.jpg"),
  description: 'Cousin to the deceased Golden Spruce, subject of the blockbuster film: A True Story of Myth, Madness, and Greed', 
  height: 350, 
  girth: 92)

puts "seed success"


# "http://upload.wikimedia.org/wikipedia/commons/thumb/4/46/General_Sherman_tree_looking_up.jpg/170px-General_Sherman_tree_looking_up.jpg"
# remote_[attribut name]_url