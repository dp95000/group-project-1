// Main Javascript File

$(document).ready(function(){


  //start of Postman code 
  //if we wanted to dynamically show data for any user-entered city, we need to figure out how to take the user-input city and get it into the proper format of the "studyAreas" URL parameter
  //because we're limiting the MVP version to just Philly, we are hard coding Philly's lat/lon in the "geometry" part of the URL below
  var settings = {
    "url": `https://geoenrich.arcgis.com/arcgis/rest/services/World/geoenrichmentserver/GeoEnrichment/enrich?studyAreas=[
    {
      \"geometry\":{
        \"x\":-75.165222, 
        \"y\":39.952583
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
      "token": "20TQGv5mqE_S1-xnEch0M5CpRWEXwJ2p_hP2pHxrd--9By-YhbrdhFONCH4QDeFR8TfcxfJqVAQ5gsJ9T0k_4Culo3yJjtk8bFdanpeYyJekK83gL5ztX2qGkINtNgqJXDERAGOuL1TyE4ZGHCQBMg..",
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