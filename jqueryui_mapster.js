(function(window, Mapster) {

    $.widget("mapster.mapster", {
        options: { },

        _create: function() {
            var element = this.element[0],
            options = this.options;
            this.map = Mapster.create(element, options);
        },

        _refresh: function() {

        },

        addMarker: function( opts ) {
            this.map.addMarker(opts);

        },

        findMarker: function(callback) {
            return this.map.findBy(callback);

            },

            removeMarkers: function(callback) {
                this.map.removeBy(callback);
            },

            markers: function() {
                return this.map.markers.items;
            },

            setPano: function(selector, opts) {
                var element = $(selector),
                self =this;
                $.each(element, function(key, element) {
                self.map.setPano(element, opts);
            });
        },

        _destroy: function() {
    },

    _setOptions:function() {
        this._superApply( arguements );
        this._refresh();
    }
}),

this._super( key, value );
})

//THIS IS DONE
