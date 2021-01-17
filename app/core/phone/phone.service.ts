'use strict';

angular.
  module('core.phone').
  factory('Phone', ['$resource',
    function($resource: angular.resource.IResourceService) {
      return $resource('app/phones/:phoneId.json', {}, {
        query: {
          method: 'GET',
          params: {phoneId: 'phones'},
          isArray: true
        }
      });
    }
  ]);
