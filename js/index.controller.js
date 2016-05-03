"use strict";

(function(){
  angular
  .module("posts")
  .controller("PostIndexController", PostIndexControllerFunc)

  PostIndexControllerFunc.$inject = [ "PostFactory" ];
    function PostIndexControllerFunc(PostFactory) {
    var indexVm = this;
    indexVm.posts = PostFactory.query();
    indexVm.newPost = new PostFactory();

    indexVm.create = function($state){
      indexVm.newPost.$save().then(function(res) {
        indexVm.posts.push(res)
      })
    };
  }

})();
