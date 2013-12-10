/*
This is heavily influenced by https://github.com/steeve/angular-seo/blob/master/angular-seo.js

This version adds the ability to call $scope.startedLoading() and $scope.finishedLoading() many times,
in the event that you have multiple controllers making seperate HTTP requests.
*/


(function() {
  (function() {
    var getModule;
    getModule = function(angular) {
      return angular.module("seo", []).run([
        "$rootScope", function($rootScope) {
          var thingsLoading;
          thingsLoading = 0;
          $rootScope.startedLoading = function() {
            return thingsLoading += 1;
          };
          return $rootScope.finishedLoading = function() {
            thingsLoading -= 1;
            if (thingsLoading < 1) {
              return $rootScope.htmlReady();
            }
          };
        }, $rootScope.htmlReady = function() {
          return $rootScope.$evalAsync(function() {
            return setTimeout(function() {
              if (typeof window.callPhantom === "function") {
                return window.callPhantom();
              }
            }, 0);
          });
        }
      ]);
    };
    if (typeof define === "function" && define.amd) {
      return define(["angular"], getModule);
    } else {
      return getModule(angular);
    }
  })(window);

}).call(this);
