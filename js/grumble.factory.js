"use strict";

(function(){
  angular
    .module( "posts" )
    .factory("PostFactory", PostFactoryFunc);

    PostFactoryFunc.$inject = [ "$resource" ];
    function PostFactoryFunc($resource) {
      return $resource("http://localhost:3000/grumbles/:id", {}, {
        update: { method: "PUT" }
      });
    }

})();
