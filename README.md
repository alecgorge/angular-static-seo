angular-static-seo
==================

Works with [alecgorge/express-static-angular-seo](http://github.com/alecgorge/alecgorge/express-static-angular-seo) to deliever static version of websites to bots (google, twitter, facebook, etc).

# Bower

Install on bower using

```
bower install angular-static-seo --save
```

# Usage

1. Include `angular-static-seo.js` or `angular-static-seo.min.js` on your webpage by downloading it from GitHub or using Bower.

2. Add `seo` as a dependency: `app = angular.module('app-name', ['seo'])`

3. Call `$scope.startedLoading()` for every time an asyncronous event starts and `$scope.startedLoading()` once each is complete. When they are all complete, `express-static-angular-seo` will know to capture the HTML and send it to the Googlebot/Twitterbot etc.

## Example

```coffeescript
angular.module('sample-app')
	.controller('LoadData', ['$scope', ($scope) ->
		$scope.startedLoading()
			$http.get('/route').success (results) ->
			$scope.finishedLoading()

			$scope.startedLoading()
		$http.get('/moreDataInTheSameController').success (results) ->
			$scope.finishedLoading()
```
