function createTree(){
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
  // }).done(function(response) {
  //   $('<h1> The ' + tree.name + 'has been added to our collection.  Thank you').appendTo(#new-tree)
  // });
})
}

$(document).ready(function(){

  $('.tree-form').on('submit', function(e){
    e.preventDefault();
    createTree();
  });

  $('#add-tree').on('click', function(){
    $('#tree-form').removeClass('hidden')
  });


}) 

