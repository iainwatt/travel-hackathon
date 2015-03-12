$(document).ready(function(){

  function initialize() {
    var mapOptions = {
      center: new google.maps.LatLng(51.5, 0.07),
      zoom: 10,
      styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"lightness":33}]},{"featureType":"landscape","elementType":"all","stylers":[{"color":"#f2e5d4"}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#c5dac6"}]},{"featureType":"poi.park","elementType":"labels","stylers":[{"visibility":"on"},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"color":"#c5c6c6"}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#e4d7c6"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#fbfaf7"}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"color":"#acbcc9"}]}]        
      };

    var markers = [];
    var map = new google.maps.Map(document.getElementById("map_canvas"), mapOptions);
      addMarker(map);
      map.setTilt(45);

    var input = (document.getElementById("search"));
      map.controls[google.maps.ControlPosition.TOP_LEFT].push(input);
      
    var searchBox = new google.maps.places.SearchBox(input);

    google.maps.event.addListener(searchBox, 'places_changed', function() {
    var places = searchBox.getPlaces();

    if (places.length == 0) {
      return;
    }
    for (var i = 0, marker; marker = markers[i]; i++) {
      marker.setMap(null);
    }

    // For each place, get the icon, place name, and location.
    markers = [];
    var bounds = new google.maps.LatLngBounds();
    for (var i = 0, place; place = places[i]; i++) {
      var image = {
        url: place.icon,
        size: new google.maps.Size(71, 71),
        origin: new google.maps.Point(0, 0),
        anchor: new google.maps.Point(17, 34),
        scaledSize: new google.maps.Size(25, 25)
      };

      // Create a marker for each place.
      var marker = new google.maps.Marker({
        map: map,
        icon: image,
        title: place.name,
        position: place.geometry.location
      });

      markers.push(marker);

      bounds.extend(place.geometry.location);
    }

    map.fitBounds(bounds);
    });
  // [END region_getplaces]

  // Bias the SearchBox results towards places that are within the bounds of the
  // current map's viewport.
    google.maps.event.addListener(map, 'bounds_changed', function() {
      var bounds = map.getBounds();
      searchBox.setBounds(bounds);
    });
  }



  function addMarker(map) {
    var geocoder = new google.maps.Geocoder();
    var showMarkerFromGeocoderResults = function(results, status) {
      if (status == google.maps.GeocoderStatus.OK) {
        var position = results[0].geometry.location;
        var marker = new google.maps.Marker({          
          map: map,
          position: position  
        });
        map.setCenter(position)
       } else {
        console.log("sorry, you cant geocode that address")
      }
    };

    $('address').each(function(index, element) {
      var geocoderOptions = { address: $(element).text() };
      geocoder.geocode( geocoderOptions, showMarkerFromGeocoderResults );
    });      
  }

  

  google.maps.event.addDomListener(window, 'load', initialize);

});