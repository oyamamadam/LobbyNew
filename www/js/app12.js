// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic'])
.controller("SlideCtrl", function($scope, $window, $ionicSlideBoxDelegate) {
    
    $scope.he = $window.innerHeight;
    angular.element($window).bind('resize', function() {
      $scope.he = $window.innerHeight;
    });

    

    document.body.style.backgroundImage = "url('images/welcome_screen_background_one.png')";
    $scope.slideHasChanged = function($index){
      //alert($index);
      switch ($index){
        case 0:
          document.body.style.backgroundImage = "url('images/welcome_screen_background_one.png')";
          break;
        case 1:
          document.body.style.backgroundImage = "url('images/welcome_screen_background_two.png')";
          break;
        case 2:
          document.body.style.backgroundImage = "url('images/welcome_screen_background_three.png')";
          break;
        case 3:
          document.body.style.backgroundImage = "url('images/welcome_screen_background_four.png')";
          break;
      }
      
    }


})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs).
    // The reason we default this to hidden is that native apps don't usually show an accessory bar, at
    // least on iOS. It's a dead giveaway that an app is using a Web View. However, it's sometimes
    // useful especially with forms, though we would prefer giving the user a little more room
    // to interact with the app.
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      // Set the statusbar to use the default style, tweak this to
      // remove the status bar on iOS or change it to use white instead of dark colors.
      StatusBar.styleDefault();
    }

  });
});


/*function setSliderHeight() {
  var height = screen.height;
  document.getElementsByClassName('back-image').style.height=height+"px";
  jQuery(".back-image").css("height", height+"px")
}

jQuery(window).resize(function(){
  setSliderHeight();
});
setSliderHeight();
window.addEventListener("resize", setSliderHeight);*/