

//   function initialize() {
//     var mapOptions = {
//       center: new google.maps.LatLng(51.5, 0.07),
//       zoom: 6,
//       styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]        
//       };

//     var markers = [];
//     var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
//       addMarker(map);
//       map.setTilt(45);

//     var input = (document.getElementById("search"));
//       map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      
//     var searchBox = new google.maps.places.SearchBox(input);

//     google.maps.event.addListener(searchBox, 'places_changed', function() {
//     var places = searchBox.getPlaces();

//     if (places.length == 0) {
//       return;
//     }
//     for (var i = 0, marker; marker = markers[i]; i++) {
//       marker.setMap(null);
//     }
//     });
// }    

    


//   function addMarker(map) {
//     var geocoder = new google.maps.Geocoder();
//     var showMarkerFromGeocoderResults = function(results, status) {
//       if (status == google.maps.GeocoderStatus.OK) {
//         var position = results[0].geometry.location;
//         var marker = new google.maps.Marker({          
//           map: map,
//           position: position  
//         });
//         map.setCenter(position)
//        } else {
//         console.log("sorry, you cant geocode that address")
//       }
//     };

//     $('address').each(function(index, element) {
//       var geocoderOptions = { address: $(element).text() };
//       geocoder.geocode( geocoderOptions, showMarkerFromGeocoderResults );
//     });      
//   }

function initialize() {

    var mapOptions = {
      center: new google.maps.LatLng(51.511841, -0.106258),
      zoom: 13,
      scrollwheel: false,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]
    };

    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);

    addMarker(map);
  }


function addAjaxMarker() {
  $.ajax({
    url: '/trees',
    method: 'GET',
    dataType: 'json'
  }).done(function(response){
    console.log(response)
    $.each(response, function(index, value){
    console.log(value.species)

    var position = new google.maps.LatLng(value.latitude, value.longitude);

    var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: value.species
    });

    var infoWindowContent = '<div id="info-window-content">' + '<a href="' + window.location.origin + '/trees' + value.id + '"><h5>' + value.name + '</h5></a>' + '<p>' + value.description + '</p>' + '</div>';

    var infowindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });


    })
  })
}





$(document).ready(function(){  

addAjaxMarker();
  
google.maps.event.addDomListener(window, 'load', initialize);

});