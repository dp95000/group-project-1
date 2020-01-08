
//SAVING THIS CODE AS OF RIGHT NOW

 //$(document).ready(function(){
    //  $('#submitWeather').click(function() {

       

//     var area = $("#area").val();
//     var prices = $("#prices").val();

//     if(area != '') {

      $.ajax({

          url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyCf975ZvBPWoy0r6GlhgTohdNA9RYZM5LQ&callback=initMap',
         type: "GET",
          dataType: "jsonp",
          success: function() {
//             console.log(data);
      
        
     


//             $("#area").val('');
//             $("#prices").val('');
//         }
//     })

// }else{
//     $("#error").html("<div class= Field cannot be empty</div>");
// }
// })

// })

function initMap() {
    var options = {
        zoom:8,
        center:{lat:42.3601,lng:-71.0589}
    }

    var map = new google.maps.Map(document.getElementById('map'), options);

    google.maps.event.addListener(map, 'click', function(event) {
        addMarker({coords:event.latLng});
    });

    var markers = [
        {
            coords:{lat:42.4648,lng:-70.9495},
            iconImage:'https://banner2.cleanpng.com/20180220/flw/kisspng-billboard-advertising-outdoor-billboard-5a8c17c72e21c3.945445991519130567189.jpg',
            content:'<h1></h1>'
        },
        {
            coords:{lat:42.8584,lng:-70.9300},
            content:'<h1></h1>'
        },
        {
            coords:{lat:42.7762,lng:-71.0773},  
        }
    ];

    for(var i =0; i< markers.length; i++) {
        addMarker(markers[i]);
    }

    function addMarker(props){
        var marker = new google.maps.Markers({
            position:props.coords,
            map:map,
        });

        if(props.iconImage) {
            marker.setIcon(props.iconImage);

        }

        if(props.content) {
            var InfoWindow = new google.maps.InfoWindow({
                content:props.content
            });

            marker.addListener('click', function(){
                InfoWindow.open(map, marker);
            });
        }
    }

        

    };

   

          }
        })


