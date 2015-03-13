

$(document).ready(function(){  

  $('#species-select').on('change', search);





function initialize() {

    var mapOptions = {
      center: new google.maps.LatLng(37.42291810, -100.08542120),
      zoom: 4,
      scrollwheel: false,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

  window.map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

  markersArray = [];
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
        // console.log(position)

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





          map: window.map,
          title: value.species
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

      $( "#clear-map" ).click(function() {
        console.log(markersArray)
        console.log(marker)
        markersArray.push(marker);
        google.maps.event.addListener(marker, "click", function(){

        });
        window.map.clearOverlays();
        // AddNewMarkers(marker)

        })        


      })
    })
}

function search(e) {
  searchType = $(':selected').val();
  // console.log(searchType);  

  $.ajax({
    url: '/trees/selected_trees',
    method: 'POST',
    dataType: 'json',
    data: {
      tree: {
        species: searchType
      }
    }
  }).done(function(response) {
    $.each(response, function(index, value) {
      console.log(value.species)
      var position = new google.maps.LatLng(value.latitude, value.longitude);
      console.log(position)
      // debugger;

      var marker = new google.maps.Marker({
        position: position,
        // map: window.map,
        title: value.species
      });

      var infoWindowContent = '<div id="info-window-content">' + '<a href="' + window.location.origin + '/trees' + value.id + '"><h5>' + value.name + '</h5></a>' + '<h5>' + value.species + '</h5><p>' + value.description + '</p>' + '</div>';

        // attaching info window content
        var infowindow = new google.maps.InfoWindow({
          content: infoWindowContent
        });

        //click event to show content
        google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map, marker);
        });

      marker.setMap(window.map);

      $( "#clear-map" ).click(function() {
        console.log(markersArray)
        console.log(marker)
        markersArray.push(marker);
        google.maps.event.addListener(marker, "click", function(){

        });
        window.map.clearOverlays();
        // AddNewMarkers(marker)

        })        

      
    })
  })
}


function fillDropdown(map) {
  $.ajax({
    url: '/trees',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    var species = []
    $.each(response, function(index, value){
      species.push(value.species);
      // console.log(species)
    })

    var uniquespecies = [];
    $.each(species, function(i, el){
      if($.inArray(el, uniquespecies) === -1) uniquespecies.push(el);
    // console.log(uniquespecies)
    // $('#species-select').append('<option>' + uniquespecies + '</option>');
    }); 
    $.each(uniquespecies, function(index, value) {
      $('#species-select').append('<option>' + value + '</option>'); 
    })
      
    $('#species-select').prepend('<option>' + '---select your species---' + '</option>') 
        
  })
}

function AddNewMarkers(marker) {

}




fillDropdown();
google.maps.event.addDomListener(window, 'load', initialize);

});

google.maps.Map.prototype.clearOverlays = function() {
  for (var i = 0; i < markersArray.length; i++ ) {
    markersArray[i].setMap(null);
  }
  markersArray.length = 0;
}