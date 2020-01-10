// Main Javascript File

$(document).ready(function(){


  //start of Postman code
  var settings = {
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?studyAreas=[
    {
      \"geometry\":{
        \"x\":-118.09047,
        \"y\":33.81091
      }
    }
  ]&studyAreasOptions={
    \"areaType\":\"RingBuffer\",
    \"bufferUnits\":\"esriMiles\",
    \"bufferRadii\":[1]
  }&dataCollections=[\"KeyGlobalFacts\", \"KeyUSFacts\"]",
    "method": "POST",
    "timeout": 0,
    "headers": {
      "Content-Type": "application/x-www-form-urlencoded"
    }`,
    "data": {
      "f": "json",
      "token": "ErJPk_70T3vhX4AguDPF98zEJviKZlXf4_v9VNt-4fVXsGh3vAX3yWOs_36mS942CVInVv7_3Z8sFi0x_-URHhHH3QJ2-TFF6BszvPH5_ZLiUAa3ahikbnSHx-5eAc9h",
      "inSR": "4326",
      "outSR": "4326",
      "returnGeometry": "true"
    }
  };
  
  $.ajax(settings).done(function (response) {
    console.log(response);
  }); //ends postman code
  
  
  }); //closes document.ready

/*DEV NOTES====================================================

- first function should be to get input city's map coords and put them into the arcGIS "geometry" field  */