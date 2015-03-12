
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