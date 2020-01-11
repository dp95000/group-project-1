function initMap(){
    // Map options
    var options = {
      zoom:13,
      center:{lat:39.952583,lng:-75.165222}
    }

    // New map
    var map = new google.maps.Map(document.getElementById('map'), options);

    // Listen for click on map
    google.maps.event.addListener(map, 'click', function(event){
      // Add marker
     // addMarker({coords:event.latLng});
    });

   

    /*
    // Add marker
    var marker = new google.maps.Marker({
      position:{lat:42.4668,lng:-70.9495},
      map:map,
      icon:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png'
    });

    var infoWindow = new google.maps.InfoWindow({
      content:'<h1>Lynn MA</h1>'
    });

    marker.addListener('click', function(){
      infoWindow.open(map, marker);
    });
    */

    // Array of markers

    var markers = [
        // Main Philly Marker
      {
        coords:{lat:39.952583,lng:-75.165222},
        iconImage:'https://developers.google.com/maps/documentation/javascript/examples/full/images/beachflag.png',
        content:'<strong><h4>Welcome to our specialized Billboard Tracking System! Click on any location to view availability.</h4><strong>'
      },
      {
        coords:{lat:39.947475,lng:-75.117828},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Admiral Wilson Blvd<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 001</p><strong>'
      },
      {
        coords:{lat:39.948934,lng:-75.119765},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Ben Franklin Bridge<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 001</p><strong>'
      },

      {
        coords:{lat:39.946107,lng:-75.111171},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Admiral Wilson Blvd<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 002</p><strong>'
      },

      {
        coords:{lat:39.948934,lng:-75.119765},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Admiral Wilson Blvd<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 003</p><strong>'
      },

      {
        coords:{lat:39.945966,lng:-75.109798},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Admiral Wilson Blvd<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 004</p><strong>'
      },

      {
        coords:{lat:39.945142,lng:-75.107525},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Admiral Wilson Blvd<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 005</p><strong>'
      },

      {
        coords:{lat:39.954656,lng:-75.143354},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Ben Franklin Bridge<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 006</p><strong>'
      },

      {
        coords:{lat:39.954013,lng:-75.142501},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Ben Franklin Bridge<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 3<br>Sign No. 007</p><strong>'
      },

      {
        coords:{lat:39.955122,lng:-75.145205},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Ben Franklin Bridge<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 008</p><strong>'
      },

      {
        coords:{lat:39.955244,lng:-75.146927},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Ben Franklin Bridge<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 009</p><strong>'
      },

      {
        coords:{lat:39.955244,lng:-75.146927},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Ben Franklin Bridge<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 010</p><strong>'
      },

      {
        coords:{lat:39.956393,lng:-75.148440},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Vine St.<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 011</p><strong>'
      },

      {
        coords:{lat:39.958061,lng:-75.148027},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Vine St. Expressway<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 012</p><strong>'
      },

      {
        coords:{lat:39.956281,lng:-75.154412},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Route 676<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 013</p><strong>'
      },

      {
        coords:{lat:39.957162,lng:-75.159969},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Route 676<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 014</p><strong>'
      },

      {
        coords:{lat:39.957282,lng:-75.161248},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Route 676<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 015</p><strong>'
      },

      {
        coords:{lat:39.957374,lng:-75.162230},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Route 676<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 016</p><strong>'
      },

      {
        coords:{lat:39.959219,lng:-75.178592},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: Route 676<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 017</p><strong>'
      },

      {
        coords:{lat:39.960094,lng:-39.960094},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 1<br>Sign No. 018</p><strong>'
      },

      {
        coords:{lat:39.959057,lng:-75.181095},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 48ft x 14ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 019</p><strong>'
      },

      {
        coords:{lat:39.957633,lng:-75.180609},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 48ft x 14ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 020</p><strong>'
      },

      {
        coords:{lat:39.965405,lng:-75.186515},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 10ft x 24ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 021</p><strong>'
      },
      
      {
        coords:{lat:39.966288,lng:-75.187528},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 10ft x 24ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 022</p><strong>'
      },

      {
        coords:{lat:39.967099,lng:-75.188857},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 10ft x 24ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 023</p><strong>'
      },

      {
        coords:{lat:39.948747,lng:-75.186253},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 024</p><strong>'
      },

      {
        coords:{lat:39.944126,lng:-75.192377},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 025</p><strong>'
      },

      {
        coords:{lat:39.943752,lng:-75.192783},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 025</p><strong>'
      },

      {
        coords:{lat:39.940331,lng:-75.197740},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: S. 34th St.<br> Billboard Size: 32ft x 24ft <br>Billboard Available: Yes<br>No. of Sides: 2<br>Sign No. 026</p><strong>'
      },

      {
        coords:{lat:39.941661,lng:-75.196996},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: S. 34th St.<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 027</p><strong>'
      },

      {
        coords:{lat:39.941318,lng:-75.195047},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 028</p><strong>'
      },

      {
        coords:{lat:39.940407,lng:-75.195284},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: I76<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 2<br>Sign No. 028</p><strong>'
      },

      {
        coords:{lat:39.938456,lng:-75.199076},
        content:'<img alt="Billboard Icon" class="bbicon" src="assets/images/billboard-icon.png"><strong><p>Location: S. 34th & Warton St.<br> Billboard Size: 14ft x 48ft <br>Billboard Available: No<br>No. of Sides: 1<br>Sign No. 029</p><strong>'
      },

    ];

    // Loop through markers
    for(var i = 0;i < markers.length;i++){
      // Add marker
      addMarker(markers[i]);
    }

    // Add Marker Function
    function addMarker(props){
      var marker = new google.maps.Marker({
        position:props.coords,
        map:map,
        //icon:props.iconImage
      });

      // Check for customicon
      if(props.iconImage){
        // Set icon image
        marker.setIcon(props.iconImage);
      }

      // Check content
      if(props.content){
        var infoWindow = new google.maps.InfoWindow({
          content:props.content
        });

        marker.addListener('click', function(){
          infoWindow.open(map, marker);
        });
      }
    }
  }


  var locations = [];
  locations.push( {name:"", lating: new google.maps.LatLng(0,0)} );
  locations.push( {name:"", lating: new google.maps.LatLng(0,0)} );
  locations.push( {name:"", lating: new google.maps.LatLng(0,0)} );

  var bounds = new google.maps.LatLngBounds ();
  for(var i=0; i<locations.length; i++) {
    var marker = new google.maps.Marker({position: locations[i].latlng, map:map, title:locations[i].name});
    bounds.extend (locations[i].latlng);
  }
  map.fitBounds (bounds);