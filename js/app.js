"use strict";

(function(){
  angular.module("wdinstagram", [
    'ui.router',
    'posts'
  ])
  .config([
    "$stateProvider",
    RouterFunction
  ])
})();

function RouterFunction ($stateProvider){
  .state("postsIndex", {
    url: "/posts",
    templateUrl: "js/grumbles/index.html"
    controller: "PostIndexController",
    controllerAs: "PostIndexViewModel"
  })
  .state("postShow", {
    url: "/posts/:id",
    templateUrl: "js/posts/show.html"
  })
}
