
angular.module('lobby', ['ionic', 'lobby.controllers', 'lobby.services', 'uiSlider' ])

.factory('$localstorage', ['$window', function($window) {
  return {
    set: function(key, value) {
      $window.localStorage[key] = value;
    },
    get: function(key, defaultValue) {
      return $window.localStorage[key] || defaultValue;
    },
    setObject: function(key, value) {
      $window.localStorage[key] = JSON.stringify(value);
    },
    getObject: function(key) {
      return JSON.parse($window.localStorage[key] || '{}');
    }
  }
}])

.run(function($ionicPlatform, $http, $localstorage, $state) {


  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.constant('$ionicLoadingConfig', {
  template: 'Loading ...'
})

.config(function($stateProvider,$urlRouterProvider) {
  $stateProvider.state('app', {
    abstract: true,
    views: {
      'appContent': {
        templateUrl: "index.html",
        controller: 'AppCtrl'
      }
    }
  })

  $stateProvider.state('app.slide', {
    url: '/slide',
    views: {
      'appContent': {
        templateUrl: "View/slide.html",
        controller: 'SlideCtrl'
      }
    }
    
  });

  $stateProvider.state('app.signup', {
    url: '/signup',
    views: {
      'appContent': {
        templateUrl: "View/join.html",
        controller: 'SignupCtrl'
      }
    }
  });

  $stateProvider.state('app.login', {
    url: '/login',
    views: {
      'appContent': {
        templateUrl: "View/login.html",
        controller: 'LoginCtrl'
      }
    }

  });



  $stateProvider.state('main', {
    abstract : true,
    views: {
      'appContent': {
        templateUrl: "maincontainer.html",
        controller: 'MainCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.menu', {
    url : '/menu',
    views: {
      'appContent': {
        templateUrl: "View/menu.html",
        controller: 'MenuCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.addfunds', {
    url : '/addfunds',
    views: {
      'appContent': {
        templateUrl: "View/addfunds.html",
        controller: 'AddfundsCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.contests', {
    url : '/contests',
    views: {
      'appContent': {
        templateUrl: "View/contests.html",
        controller: 'ContestsCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.featured', {
    url : '/featured',
    views: {
      'appContent': {
        templateUrl: "View/featured.html",
        controller: 'FeaturedCtrl'
      }
    }
  });

  $stateProvider.state('main.leagues', {
    url : '/leagues',
    views: {
      'appContent': {
        templateUrl: "View/leagues.html",
        controller: 'LeaguesCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.50s', {
    url : '/50s',
    views: {
      'appContent': {
        templateUrl: "View/50:50s.html",
        controller: '50sCtrl'
      }
    }
  });

  $stateProvider.state('main.tournaments', {
    url : '/tournaments',
    views: {
      'appContent': {
        templateUrl: "View/tournaments.html",
        controller: 'TournamentsCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.headtohead', {
    url : '/headtohead',
    views: {
      'appContent': {
        templateUrl: "View/headtohead.html",
        controller: 'HeadtoheadCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.multiplier', {
    url : '/multiplier',
    views: {
      'appContent': {
        templateUrl: "View/multiplier.html",
        controller: 'MultiplierCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.contestplayerselection', {
    url : '/contrestplayerselection',
    views: {
      'appContent': {
        templateUrl: "View/contestplayerselection.html",
        controller: 'ContestPlayerSelectionCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.playerlist', {
    url : '/playerlist',
    views: {
      'appContent': {
        templateUrl: "View/playerlist.html",
        controller: 'PlayerListCtrl'
      }
    },
    cache: false
  });
 
 $stateProvider.state('main.contestinfo', {
    url : '/contestinfo',
    views: {
      'appContent': {
        templateUrl: "View/contestinfo.html",
        controller: 'ContestInfoCtrl'
      }
    },
    cache: false
  });

 $stateProvider.state('main.playerdetails', {
    url : '/playerdetails',
    views: {
      'appContent': {
        templateUrl: "View/playerdetails.html",
        controller: 'PlayerDetailsCtrl'
      }
    }
  });

 $stateProvider.state('main.importlineup', {
    url : '/importlineup',
    views: {
      'appContent': {
        templateUrl: "View/importlineup.html",
        controller: 'ImportLineUpCtrl'
      }
    },
    cache: false
  });

 $stateProvider.state('main.withdraw', {
    url : '/withdraw',
    views: {
      'appContent': {
        templateUrl: "View/withdraw.html",
        controller: 'WithDrawCtrl'
      }
    },
    cache: false
  });

 $stateProvider.state('main.transaction', {
    url : '/transaction',
    views: {
      'appContent': {
        templateUrl: "View/transaction.html",
        controller: 'TransactionCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.howtoplay', {
    url : '/howtoplay',
    views: {
      'appContent': {
        templateUrl: "View/howtoplay.html",
        controller: 'HowtoPlayCtrl'
      }
    }
  });

  $stateProvider.state('main.createpublic', {
    url : '/createpublic',
    views: {
      'appContent': {
        templateUrl: "View/createpublic.html",
        controller: 'CreatePublicCtrl'
      }
    },
    cache: false
  });

  $stateProvider.state('main.createh2hs', {
    url : '/createh2hs',
    views: {
      'appContent': {
        templateUrl: "View/createh2hs.html",
        controller: 'CreateH2HsCtrl'
      }
    },
    cache: false
  });

  $urlRouterProvider.otherwise("/slide");
})