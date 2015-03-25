/**
 * Created by jeff on 3/24/15.
 */

require([
    "sample/app",
    "sample/map-view"
], function (App) {

    // define the routes
    //
    App.IndexRoute = Ember.Route.extend({
        beforeModel: function (transition) {
            this.transitionTo("map");
        }
    });

    
    // start the router
    //
    App.Router.map(function() {
        this.resource("map");
    });

    // we are now ready and can let the app
    // start running
    //
    App.advanceReadiness();
});