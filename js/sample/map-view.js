
/**
 * Created by jeff on 3/25/15.
 */
define([
    'sample/app',
    'esri/arcgis/utils'
], function (App, arcgisUtils) {
    'use strict';
    App.MapView = Ember.View.extend({

        onDidInsertElement: function() {

            var mapDiv = document.createElement('div');
            mapDiv.id = 'map';
            this.element.appendChild(mapDiv);

            arcgisUtils.createMap('22d8f8438f294b3e8710bbade31b4ee6', 'map').then(function(response) {
                response.map.resize();
            });

        }.on('didInsertElement')
    });
});