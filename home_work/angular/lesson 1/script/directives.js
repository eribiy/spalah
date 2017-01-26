/**
 * Created by user on 25.01.2017.
 */
var app = angular.module("myApp");

app.directive("modal", function() {
    return {
        restrict: "M",
        replace: true,
        template: "<div><h1>This is modal window</h1></div>"
    };
});