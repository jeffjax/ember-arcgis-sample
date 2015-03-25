
define(function () {

    var isDebug = true;
    var App = Ember.Application.create({
        LOG_TRANSITIONS: isDebug,
        LOG_TRANSITIONS_INTERNAL: isDebug,
        LOG_STACKTRACE_ON_DEPRECATION: isDebug
    });
    App.deferReadiness();

    return App;
});