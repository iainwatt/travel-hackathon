function createTree(){
  console.log("help!")
  $name = $('.tree-name').val();
  $species = $('.tree-species').val();
  $description = $('.tree-description').val();
  $address = $('.tree-address').val();
  $height = $('.tree-height').val();
  $girth = $('.tree-girth').val();
  $image = $('.tree-image').val()

  $.ajax({
    url: "/trees",
    method: 'POST',
    dataType: 'json',
    data: { tree:{
      name:$name,
      species:$species, 
      description:$description, 
      address:$address, 
      height:$height, 
      girth:$girth, 
      image:$image
    }}
  }).done(function() {
    console.log("done!")
  });
}

$(document).ready(function(){

  $('#new_tree').on('submit', function(e){
    e.preventDefault();
    createTree();
  });

}) 


// .done(function(response){
//     $('<h2> Your group ' + response.name + ' is created. <button class="delete" data-id='+ response.id +'>Delete</button></h2>').appendTo('h2.new-group')
//     $('<p>' + response.description + '</p>' ).appendTo('h2.new-group')
//     $('<a href="/groups/'  + response.id + '">check out the group</a>').appendTo('h2.new-group')

//  