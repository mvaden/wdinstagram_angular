"use strict";

(function(){
  angular
  .module("posts")
  .controller("PostShowController", PostShowControllerFunc)

  PostShowControllerFunc.$inject = [ "PostFactory", "$stateParams" ];
  function PostShowControllerFunc(PostFactory, $stateParams) {
    var showVm = this;
    showVm.post = PostFactory.get({id: $stateParams.id});

    showVm.update = function() {
      showVm.post.$update({id: $stateParams.id});
    };

    showVm.delete = function() {
      showVm.post.$delete({id: $stateParams.id} );
    }
  };

})();
