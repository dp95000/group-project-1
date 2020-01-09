(function(window, google) {

    var Mapster = (function() {
        function Mapster(element, opts) {
            this.gMap = new google.maps.Map(elemnt, opts);

        }
        Mapster.prototype = {
            zoom: function(level) {
                if (level) {
                    this.gMap.setZoom(level);

                } else {
                    return this.gMap.getZoom();
                }
            },
            _on: function(opts) {
                var self = this;
                google.maps.event.addListener(opts.obj, opts.event, function(e){
                    opts.callback.call(self, e, opts.obj);
                });

                },
                geocode: function(opt) {
                    this.geocode.geocode({
                        address: opts.address
                    }, function(results, status) {
                        if(status ===google.maps.GeocoderStatus.OK) {
                            opts.success.call(this, results, status);
                        } else {
                            opts.error.call(this, status);

                        }
                    });
                },
                getCurrentPosition: function(callback) {
                    if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(function(position) {
                            callback.call(this, position);
                        });
                    }
                },
                setPano: function(element, opts) {
                    var panorama = new google.maps.StreetViewPanorama(element, opts);
                        if(opts.events) {
                            this._attachEvents(panorama, opts.events);
                        }
                        this.gMap.setStreetView(panorama);
                    },
                    addMarker: function(opts) {
                        var marker,
                        self = this;

                        opts.position ={
                            lat: opts.lat,
                            lng: opts.lng
                        }
                        marker = this._createMarker(opts);
                        if(this.markerClusterer) {
                            this.markerClusterer.addMarker(marker);
                        }
                        this._addMarker(marker);
                        if(opts.events) {
                            this._attachEvents(marker, opts.events);
                        }
                        if(opts.content) {
                            this._on({
                                obj: marker,
                                event: 'click',
                                callback: function() {
                                    var infoWindow = new google.maps.InfoWindow({
                                        content: opts.content
                                    });
                                }
                            })
                        }

                    }
                }
            })
        });

        return Mapster;
    

    // Mapster.create = function(element, opts)
    //     return new Mapster(element, opts);
    // };

    // window.Mapster = Mapster;
//}(window, google));