$(document).ready(function(){ 


function initialize() {

    var mapOptions = {
      center: new google.maps.LatLng(37.42291810, -100.08542120),
      zoom: 4,
      scrollwheel: false,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);


    addAjaxMarker(map);
  
}

function addAjaxMarker(map) {
    $.ajax({
      url: '/trees',
      method: 'GET',
      dataType: 'json'
    }).done(function(response){
      $.each(response, function(index, value){


        var position = new google.maps.LatLng(value.latitude, value.longitude);
        console.log(position)

        // var image = { 
        //   url: 'http://www.davey.com/media/1001/home-tree.png',
        //   // url: "/assets/tree-marker.png",
        //   size: new google.maps.Size(10, 10)
        //   }

        var marker = new google.maps.Marker({
          position: position,
          map: map,
          title: value.species,
          icon: "/assets/tree.marker.mini.png"
          // icon: 'http://www.davey.com/media/1001/home-tree.png'
          // www.davey.com/media/1001/home-tree.png?width=960&height=520&quality=80&mode=crop'
        });




        var infoWindowContent = '<div id="info-window-content">' + '<a href="' + window.location.origin + '/trees' + value.id + '"><h5>' + value.name + '</h5></a>' + '<h5>' + value.species + '</h5><p>' + value.description + '</p>' + '</div>';

        var infoWindowContent = '<div id="info-window-content">' + '<a href="' + window.location.origin + '/trees/' + value.id + '"><h5>' + value.name + '</h5></a>' + '<h5>' + value.species + '</h5><p>' + value.description + '</p>' + '<img src="' + value.tree_image.thumb.url + '">' + '</div>';
        
        
        console.log('look again')


        // attaching info window content
        var infowindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });

        //click event to show content
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        });

      })
    })
}

// function showOneTree(map) {
// $.ajax({
//       url: '/trees/selected_trees',
//       method: 'POST',
//       dataType: 'json',
//       data: {tree: {species: $('.serch_box').val}}
//       }).done(function(response){
//       console.log(response)
//       }) 

function fillDropdown() {
  $.ajax({
    url: '/trees',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
      $.each(response, function(index, value){

      })
      var uniqspecies = $.unique(response)
      console.log(uniqspecies);
  })

}
  
fillDropdown();
google.maps.event.addDomListener(window, 'load', initialize);

});