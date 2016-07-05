angular.module('lobby.controllers', [])
//------------------------------------------------------
//----- sign in
//------------------------------------------------------
.controller('AppCtrl', function($scope,$rootScope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {
  console.log('wefew');
  $scope.parents = {};
  $scope.parents.backType = 'Signup';
  $scope.parents.playerID = 1;
  $rootScope.rightButtons = [
    { 
      text: 'Open side navigation',
      type: 'button-positive',
      content: '<i class="icon ion-navicon"></i>',
      click: function(e) {
        $scope.sideMenuController.toggleRight();
      }
    }
  ];
})
.controller('SlideCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {

    $scope.he = $window.innerHeight;
    angular.element($window).bind('resize', function() {
      $scope.he = $window.innerHeight;
    });

    

    document.body.style.backgroundImage = "url('images/welcome_screen_background_one.png')";
    $scope.slideHasChanged = function($index){
      //alert($index);
      switch ($index){
        case 0:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-baseball.jpg')";
          break;
        case 1:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-basketball.jpg')";
          break;
        case 2:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-football.jpg')";
          break;
        case 3:
          document.getElementById("slide").style.backgroundImage = "url('images/mobile-hockey.jpg')";
          break;
      }
      
    }
    $scope.joinclick = "btnjoinactive";
    $scope.down = function(){
      $scope.joinclick = "btnjoininactive";
    }
    $scope.up = function(){
      $scope.joinclick = "btnjoinactive";
    }
    $scope.signup = function(){
      $state.go("app.signup");
      $scope.parents.backType = 'Signup';
    }
    $scope.login = function(){
      $state.go("app.login");
      $scope.parents.backType = 'Login';
    }
   
})

.controller('SignupCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager,$ionicLoading) {
    $scope.selected = -1;
    $scope.visiblestate = "HIDE";


    $scope.signupclick = "btnjoinactive";
    $scope.down = function(){
      $scope.signupclick = "btnjoininactive";
    }
    $scope.up = function(){
      $scope.signupclick = "btnjoinactive";
    }

    $scope.menu = function(){

      if($scope.userfirstname == null){
        console.log("error");
        alert("Please Fill in th all Blanks");
      } else if($scope.userlastname == null){
        alert("Please Fill in th all Blanks");
      } else if($scope.useremail == null){
        alert("Please Fill in th all Blanks");
      } else if($scope.userpassword == null){
        alert("Please Fill in th all Blanks");
      } else if($scope.username == null){
        alert("Please Fill in th all Blanks");
      } else if($scope.userpromocode == null){
        alert("Please Fill in th all Blanks");
      } else {
        $ionicLoading.show();
        var data_test = {
            "email":$scope.useremail,
            "fullName":$scope.firstname + $scope.lastname,
            "password":$scope.userpassword,
            "promoCode":$scope.userpromocode,
            "username": $scope.username,
            "rememberMe":true
        };
    
 
        var req = {
           method: 'POST',
           url: 'http://54.218.29.169:8080/v1/core/signUp',
           headers: {
             'Content-Type': 'application/json'
           },
           data:data_test
        }

        $http(req).then(function(result){
          $state.go("main.menu");
          console.log(result.data);
          $ionicLoading.hide();
        }, function(result){
          $ionicLoading.hide();
      
        });
      }

    }

    $scope.isSelected = function(type) {
        if(type == $scope.selected) {
            return "selected";
        } else {
            return "";
        }
    }

    $scope.selectItem = function(type) {
        $scope.selected = type;
    }

    $scope.visible1 = function(){
        if($scope.visiblestate == "HIDE"){
            $scope.visiblestate = "SHOW";
        }else if($scope.visiblestate == "SHOW"){
            $scope.visiblestate = "HIDE";
        }
    }
})

.controller('LoginCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager) {
  $scope.selected = -1;
    $scope.visiblestate = "HIDE";
    
    $scope.menu = function(){
      //$state.go("main.menu");

      if($scope.username == null){
        alert("Please Fill in th all Blanks");
      } else if ($scope.userpassword == null){
        alert("Please Fill in th all Blanks");
      } else {
        $ionicLoading.show();
        var data_test = {
            "username":$scope.username,
            "password":$scope.userpassword
         };


        var req = {
           method: 'POST',
           url: 'http://54.218.29.169:8080/v1/core/login',
           headers: {
             'Content-Type': 'application/json'
           },
           data:data_test
        }
        console.log("asdfasdf");
        $http(req).then(function(result){
          console.log(result.data);
          $ionicLoading.hide();
          $state.go("main.menu");
          
        } , function(result){
          console.log("asdfasdfsgwergaef");
          console.log(result);
          $ionicLoading.hide();
          
        });
      }
    }

    $scope.isSelected = function(type) {
        if(type == $scope.selected) {
            return "selected";
        } else {
            return "";
        }
    }

    $scope.selectItem = function(type) {
        $scope.selected = type;
    }

    $scope.visible1 = function(){
        if($scope.visiblestate == "HIDE"){
            $scope.visiblestate = "SHOW";
        }else if($scope.visiblestate == "SHOW"){
            $scope.visiblestate = "HIDE";
        }
    }

    $scope.positions = [
      {name:"aaa", minAge:"20", maxAge:"60"},
      {name:"bbb", minAge:"10", maxAge:"70"},
      {name:"ccc", minAge:"30", maxAge:"90"}
    ];
})

.controller('MainCtrl',function($scope,$http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){

  $scope.parents = {};
  $scope.parents.playerID = 0;
  $scope.parents.addbutton_state = false;
    var req = {
       method: 'GET',
       url: 'http://54.218.29.169:8080/v1/core/profile',
       headers: {
         'Content-Type': 'application/json'
       }
    }
    $scope.useravatar = "";
    $http(req).then(function(result){
      console.log(result.data);
      $scope.username = result.data.username;
      $scope.account_balance = result.data.accountBalance;
      $scope.pending_balance = result.data.pendingBalance;
      $scope.fanpicks_point = result.data.pointsBalance;
      $scope.useravatar = result.data.avatarImage;
    }, function(result){
      console.log(result);
    });

    $scope.toggleMenu = function() {
        $scope.sideMenuController.toggleLeft();
    }

    $scope.addfunds = function(){
        console.log("addfunds");
        $ionicSideMenuDelegate.toggleLeft();
        $state.go("main.addfunds");
    }

    $scope.withdraw = function(){
      console.log("withdraw");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("main.withdraw");
    }

    $scope.transactionhistory = function(){
      console.log("transactionhistory");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("main.transaction");
    }

    $scope.howtoplay = function(){
      console.log("howtoplay");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("main.howtoplay");
    }

    $scope.about = function(){
      console.log("about");
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.rules = function() {
      console.log("rules");
      $ionicSideMenuDelegate.toggleLeft();
    }

    $scope.logout = function(){
      console.log("logout");
      $ionicSideMenuDelegate.toggleLeft();
      $state.go("app.slide");
    }

    $scope.support = function(){
      console.log("support");
      $ionicSideMenuDelegate.toggleLeft();
    }
})

.controller('MenuCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate, $ionicSlideBoxDelegate){
    $scope.leftButtons = [{
        type: 'button-clear button',
        tap: function(e) {
            $scope.toggleMenu();
        }
    }];

    /*var data_test = {
        "contestScope":"PRIVATE",
        "contestType":"FIFTY_FIFTY",
        "entryFeeMax":123,
        "entryFeeMin":1,
        "sortDirection":"asc",
        "sortField":"Entries"
     };


    var req = {
       method: 'POST',
       url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
       headers: {
         'Content-Type': 'application/json'
       },
       data:data_test
    }
    $http(req).then(function(result){
      console.log(result.data);

      
    }, function(result){
      console.log(result);
    });*/

    var contestperiod = {
      liveContests: 0, 
      contestPeriodGroups: []
    };

    var req = {
       method: 'GET',
       url: 'http://54.218.29.169:8080/v1/dfs/dashboard',
       headers: {
         'Content-Type': 'application/json'
       }

    };
    
    $scope.openstate_nfl = true;
    $scope.openstate_nhl = true;
    $scope.openstate_nba = true;
    $scope.openstate_mlb = true;
    $scope.openstate_cfb = true;
    $scope.openstate_cbb = true;

    $http(req).then(function(result){
      console.log(result.data);
      contestperiod = result.data;

      for (var i = contestperiod.contestPeriodGroups.length - 1; i >= 0; i--) {
      
        if(contestperiod.contestPeriodGroups[i].sport == "NFL"){
          $scope.nfl_show_state = true;
          $scope.openstate_nfl = false;

          $scope.items_nfl = contestperiod.contestPeriodGroups[i].contestPeriods;        
          $scope.nfl_count = 0;
          for(var j = $scope.items_nfl.length - 1; j >= 0; j--){
            $scope.nfl_count += $scope.items_nfl[j].activeGames;
          }
        }
        if(contestperiod.contestPeriodGroups[i].sport == "NHL"){
          $scope.nhl_show_state = true;
          $scope.openstate_nhl = false;

          $scope.items_nhl = contestperiod.contestPeriodGroups[i].contestPeriods;        
          $scope.nhl_count = 0;
          for(var j = $scope.items_nhl.length - 1; j >= 0; j--){
            $scope.nhl_count += $scope.items_nhl[j].activeGames;
          }
        }
        if(contestperiod.contestPeriodGroups[i].sport == "NBA"){
          $scope.nba_show_state = true;
          $scope.openstate_nba = false;

          $scope.items_nba = contestperiod.contestPeriodGroups[i].contestPeriods;        
          $scope.nba_count = 0;
          for(var j = $scope.items_nba.length - 1; j >= 0; j--){
            $scope.nba_count += $scope.items_nba[j].activeGames;
          }
        }
        if(contestperiod.contestPeriodGroups[i].sport == "MBL"){
          $scope.mbl_show_state = true;
          $scope.openstate_mlb = false;

          $scope.items_mbl = contestperiod.contestPeriodGroups[i].contestPeriods;        
          $scope.mbl_count = 0;
          for(var j = $scope.items_mbl.length - 1; j >= 0; j--){
            $scope.mbl_count += $scope.items_mbl[j].activeGames;
          }
        }
        if(contestperiod.contestPeriodGroups[i].sport == "CFB"){
          $scope.cfb_show_state = true;
          $scope.openstate_cfb = false;

          $scope.items_cfb = contestperiod.contestPeriodGroups[i].contestPeriods;        
          $scope.cfb_count = 0;
          for(var j = $scope.items_cfb.length - 1; j >= 0; j--){
            $scope.cfb_count += $scope.items_cfb[j].activeGames;
          }
        }
        if(contestperiod.contestPeriodGroups[i].sport == "CBB"){
          $scope.cbb_show_state = true;
          $scope.openstate_cbb = false;

          $scope.items_cbb = contestperiod.contestPeriodGroups[i].contestPeriods;        
          $scope.cbb_count = 0;
          for(var j = $scope.items_cbb.length - 1; j >= 0; j--){
            $scope.cbb_count += $scope.items_cbb[j].activeGames;
          }
        }
      };

    }, function(result){
      //console.log(result);

    });

    $scope.list_height = $window.innerHeight - 250;
    angular.element($window).bind('resize', function() {
      $scope.list_height = $window.innerHeight - 250;
    });
     
    
    
    
    $scope.dropdownimg_nfl = "chevrondown";
    $scope.dropdownimg_nhl = "chevrondown";
    $scope.dropdownimg_nba = "chevrondown";
    $scope.dropdownimg_mlb = "chevrondown";
    $scope.dropdownimg_cfb = "chevrondown";
    $scope.dropdownimg_cbb = "chevrondown";
    $scope.showNFLlist = false;
    $scope.showNHLlist = false;
    $scope.showNBAlist = false;
    $scope.showMLBlist = false;
    $scope.showCFBlist = false;
    $scope.showCBBlist = false;
    $scope.state0 = "menu_action_bar_active";
    $scope.state1 = "menu_action_bar_inactive";
    $scope.state2 = "menu_action_bar_inactive";
    $scope.state3 = "menu_action_bar_inactive";

    $scope.nfl_show_state = false;
    $scope.nhl_show_state = false;
    $scope.nba_show_state = false;
    $scope.mlb_show_state = false;
    $scope.cfb_show_state = false;
    $scope.cbb_show_state = false;


    $scope.slideHasChanged = function($index){
      //alert($index);
      switch ($index){
        case 0:
          $scope.state0 = "menu_action_bar_active";
          $scope.state1 = "menu_action_bar_inactive";
          $scope.state2 = "menu_action_bar_inactive";
          $scope.state3 = "menu_action_bar_inactive";
          break;
        case 1:
          $scope.state0 = "menu_action_bar_inactive";
          $scope.state1 = "menu_action_bar_active";
          $scope.state2 = "menu_action_bar_inactive";
          $scope.state3 = "menu_action_bar_inactive";
          break;
        case 2:
          $scope.state0 = "menu_action_bar_inactive";
          $scope.state1 = "menu_action_bar_inactive";
          $scope.state2 = "menu_action_bar_active";
          $scope.state3 = "menu_action_bar_inactive";
          break;
        case 3:
          $scope.state0 = "menu_action_bar_inactive";
          $scope.state1 = "menu_action_bar_inactive";
          $scope.state2 = "menu_action_bar_inactive";
          $scope.state3 = "menu_action_bar_active";
          break;
      }
      
    }


    $scope.lobby = function(){
      $ionicSlideBoxDelegate.slide(0);
    }
    $scope.upcoming = function(){
      $ionicSlideBoxDelegate.slide(1);
    }
    $scope.live = function(){
      $ionicSlideBoxDelegate.slide(2);
    }
    $scope.recent = function(){
      $ionicSlideBoxDelegate.slide(3);
    }

    $scope.nfl_list_click = function(){
      if($scope.dropdownimg_nfl == "chevrondown"){
        $scope.dropdownimg_nfl = "chevronup";
        $scope.showNFLlist = true;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_nfl == "chevronup"){
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.showNFLlist = false;
      }
    }

    $scope.nhl_list_click = function(){
      if($scope.dropdownimg_nhl == "chevrondown"){
        $scope.dropdownimg_nhl = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = true;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_nhl == "chevronup"){
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.showNHLlist = false;
      }
    }

    $scope.nba_list_click = function(){
      if($scope.dropdownimg_nba == "chevrondown"){
        $scope.dropdownimg_nba = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = true;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_nba == "chevronup"){
        $scope.dropdownimg_nba = "chevrondown";
        $scope.showNBAlist = false;
      }
    }

    $scope.mlb_list_click = function(){
      if($scope.dropdownimg_mlb == "chevrondown"){
        $scope.dropdownimg_mlb = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = true;
        $scope.showCFBlist = false;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_mlb == "chevronup"){
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.showMLBlist = false;
      }
    }

    $scope.cfb_list_click = function(){
      if($scope.dropdownimg_cfb == "chevrondown"){
        $scope.dropdownimg_cfb = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = true;
        $scope.showCBBlist = false;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cbb = "chevrondown";
      }
      else if($scope.dropdownimg_cfb == "chevronup"){
        $scope.dropdownimg_cfb = "chevrondown";
        $scope.showCFBlist = false;
      }
    }

    $scope.cbb_list_click = function(){
      if($scope.dropdownimg_cbb == "chevrondown"){
        $scope.dropdownimg_cbb = "chevronup";
        $scope.showNFLlist = false;
        $scope.showNHLlist = false;
        $scope.showNBAlist = false;
        $scope.showMLBlist = false;
        $scope.showCFBlist = false;
        $scope.showCBBlist = true;
        $scope.dropdownimg_nfl = "chevrondown";
        $scope.dropdownimg_nhl = "chevrondown";
        $scope.dropdownimg_nba = "chevrondown";
        $scope.dropdownimg_mlb = "chevrondown";
        $scope.dropdownimg_cfb = "chevrondown";
      }
      else if($scope.dropdownimg_cbb == "chevronup"){
        $scope.dropdownimg_cbb = "chevrondown";
        $scope.showCBBlist = false;
      }
    }
    $scope.items = [
      {date:"8:25pm ET", during:"Thu-Mon", count:"1234"},
      {date:"9:25pm ET", during:"Sunday only", count:"4567"},
      {date:"10:25pm ET", during:"Fri-Sat Conference Showcase", count:"6789"}
      ];

    $scope.items1 = [
        {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000", type:"100-Player League($2-Top 12 Win)"},
        {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000", type:"100-Player League($2-Top 12 Win)"},
        {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000", type:"100-Player League($2-Top 12 Win)"}
    ];
    $scope.nfl_item_click = function(){
      $state.go("main.contests");
    }
    $scope.nhl_item_click = function(){
      $state.go("main.contests");
    }
    $scope.nba_item_click = function(){
      $state.go("main.contests");
    }
    $scope.mlb_item_click = function(){
      $state.go("main.contests");
    }
    $scope.cfb_item_click = function(){
      $state.go("main.contests");
    }
    $scope.cbb_item_click = function(){
      $state.go("main.contests");
    }
})

.controller('AddfundsCtrl', function($scope, $timeout, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
    $ionicSideMenuDelegate.canDragContent(false);
    $scope.showvalue = true;
    $scope.showvalue1 = false;

   var data_test = {
    "cardholderName":"Paul Zain",
    "cardNumber":"4242424242424242",
    "expirationMonth":"12","expirationYear":"2016",
    "cvv":"123",
    "state":"TX",
    "zipcode":"78739",
    "amount":100};
  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/core/depositCreditCard',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    
    console.log(result.data);
  }, function(result){
    console.log(result.data);
  });

    $scope.amount10 = function(){
      $scope.amount = "100.0";
      $scope.active10 = "addfunds_amountbtnactive";
      $scope.active25 = "addfunds_amountbtninactive";
      $scope.active50 = "addfunds_amountbtninactive";
    }
    $scope.amount25 = function(){
      $scope.amount = "200.0"; 
      $scope.active10 = "addfunds_amountbtninactive";
      $scope.active25 = "addfunds_amountbtnactive";
      $scope.active50 = "addfunds_amountbtninactive";
    }
    $scope.amount50 = function(){
      $scope.amount = "500.0";
      $scope.active10 = "addfunds_amountbtninactive";
      $scope.active25 = "addfunds_amountbtninactive";
      $scope.active50 = "addfunds_amountbtnactive";
    }
    $scope.credit = function(){
      $scope.showvalue = false;
      $scope.showvalue1 = true;
    }
    $scope.changepayment = function(){
      $scope.showvalue = true;
      $scope.showvalue1 = false;
    }
    $scope.counter = 120;
    $scope.countdown = function(){
    $timeout(function() {
      $scope.counter--;
      if($scope.counter <= 0){
        $scope.counter = 120;
      }
      $scope.countdown();
    }, 1000);
  };
  $scope.countdown();
})

.controller('ContestsCtrl', function($scope, $http, $state, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.featured_state = false;
  $scope.league_state = false;
  $scope.fifty_state = false;
  $scope.tournament_state = false;
  $scope.head_state = false;
  $scope.multiplier_state = false;
  var req = {
     method: 'GET',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/home',
     headers: {
       'Content-Type': 'application/json'
     }
  }
  $http(req).then(function(result){
    var contesttypes = result.data.contestTypes;
    console.log(contesttypes);

    for (var i = contesttypes.length - 1; i >= 0; i--) {
      if(contesttypes[i].contestScope == "FEATURED"){
        $scope.featured_state = true;
        $scope.featured_count = contesttypes[i].activeGames;
      }
      if(contesttypes[i].contestType == "LEAGUE"){
        $scope.league_state = true;
        $scope.league_count = contesttypes[i].activeGames;
      }
      if(contesttypes[i].contestType == "FIFTY_FIFTY"){
        $scope.fifty_state = true;
        $scope.fifty_count = contesttypes[i].activeGames;
      }
      if(contesttypes[i].contestType == "TOURNAMENT"){
        $scope.tournament_state = true;
        $scope.tournament_count = contesttypes[i].activeGames;
      }
      if(contesttypes[i].contestType == "HEAD_TO_HEAD"){
        $scope.head_state = true;
        $scope.head_count = contesttypes[i].activeGames;
      }
      if(contesttypes[i].contestType == "MULTIPLIER"){
        $scope.multiplier_state = true;
        $scope.multiplier_count = contesttypes[i].activeGames;
      }
      
    };
  }, function(result){

  });


  $scope.contest_featured_click = function(){
    $state.go("main.featured");
  }
  $scope.contest_league_click = function(){
    $state.go("main.leagues");
  }
  $scope.contest_50_click = function(){
    $state.go("main.50s");
  }
  $scope.contest_tournament_click = function(){
    $state.go("main.tournaments");
  }
  $scope.contest_headto_click = function(){
    $state.go("main.headtohead");
  }
  $scope.contest_multiplier_click = function(){
    $state.go("main.multiplier");
  }
  $scope.contest_create_click = function(){
    $state.go("main.createpublic");
  }

})

.controller('FeaturedCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;
  $scope.feeviewpop = null;


  $scope.reloadData = function(event,sortvalue){
    var data_test = {
        "contestScope":"FEATURED",
        
        "entryFeeMax":999999,
        "entryFeeMin":0,
        "sortDirection":"UpDown",
        "sortField":sortvalue
     };


    var req = {
       method: 'POST',
       url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
       headers: {
         'Content-Type': 'application/json'
       },
       data:data_test
    }
    $http(req).then(function(result){
      console.log(result.data);

      var featured_contest = result.data.contests;
      $scope.items = featured_contest;
      console.log(featured_contest);
    }, function(result){
      //console.log(result);
    });
  }
  
  $scope.reloadData("Name");

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/feeview.html', {
    scope: $scope,
  }).then(function(feeviewpop) {
    console.log("vcvbcbvcbcv");
    $scope.feeviewpop = feeviewpop
  });

  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  $scope.featured_item_click = function(){
    $state.go("main.contestplayerselection");
  }

  $scope.$on('scanner-started', function(event, args) {

      // do what you want to do
      $scope.reloadData(args.sort);

      //alert("scanner");
  });

 
})

.controller('LeaguesCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;


  var data_test = {
      "contestScope":"PUBLIC",
      "contestType":"LEAGUE",
      "entryFeeMax":999999,
      "entryFeeMin":0,
      "sortDirection":"UpDown",
      "sortField":"Name"
   };


  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    console.log(result.data);

    var league_contest = result.data.contests;
    $scope.items = league_contest;
    console.log(league_contest);
  }, function(result){
    //console.log(result);
  });


  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  /*$scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];*/

  $scope.leagues_item_click = function(){
    $state.go("main.contestplayerselection");
  }

})

.controller('50sCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

    var data_test = {
      "contestScope":"PUBLIC",
      "contestType":"FIFTY_FIFTY",
      "entryFeeMax":999999,
      "entryFeeMin":0,
      "sortDirection":"UpDown",
      "sortField":"Name"
   };


  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    console.log(result.data);

    var fifty_contest = result.data.contests;
    $scope.items = fifty_contest;
    console.log(fifty_contest);
  }, function(result){
    //console.log(result);
  });


  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  /*$scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];*/

  $scope.c50s_item_click = function(){
    $state.go("main.contestplayerselection");
  }
})

.controller('TournamentsCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

    var data_test = {
      "contestScope":"PUBLIC",
      "contestType":"TOURNAMENT",
      "entryFeeMax":999999,
      "entryFeeMin":0,
      "sortDirection":"UpDown",
      "sortField":"Name"
   };


  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    console.log(result.data);

    var tournament_contest = result.data.contests;
    $scope.items = tournament_contest;
    console.log(tournament_contest);
  }, function(result){
    //console.log(result);
  });


  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  /*$scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];*/

  $scope.tournaments_item_click = function(){
    $state.go("main.contestplayerselection");
  }
  $scope.getColor = function(idx) {
    console.log(idx);
    if(idx >= 3)
      return "#FFF";
    else
      return "#ADF";
  }
})

.controller('HeadtoheadCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

    var data_test = {
      "contestScope":"PUBLIC",
      "contestType":"HEAD_TO_HEAD",
      "entryFeeMax":999999,
      "entryFeeMin":0,
      "sortDirection":"UpDown",
      "sortField":"Name"
   };


  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    console.log(result.data);

    var head_contest = result.data.contests;
    $scope.items = head_contest;
    console.log(head_contest);
  }, function(result){
    //console.log(result);
  });



  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  /*$scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];*/

  $scope.headtohead_item_click = function(){
    $state.go("main.contestplayerselection");
  }
  $scope.getColor = function(idx) {
    
    if(idx >= 3)
      return "#FFF";
    else      
      return "#ADF";
  }
})

.controller('MultiplierCtrl', function($scope, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.popover = null;

  $scope.feeviewpop = null;

   var data_test = {
      "contestScope":"PUBLIC",
      "contestType":"MULTIPLIER",
      "entryFeeMax":999999,
      "entryFeeMin":0,
      "sortDirection":"UpDown",
      "sortField":"Name"
   };


  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/lobby',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    console.log(result.data);

    var multiplier_contest = result.data.contests;
    $scope.items = multiplier_contest;
    console.log(multiplier_contest);
  }, function(result){
    //console.log(result);
  });

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    console.log("asdfasdfasdf");
    $scope.popover = popover
  });
   $scope.feeclick = function($event){
    $scope.feeviewpop.show($event);
  }

  $ionicPopover.fromTemplateUrl('../View/menu.tpl.html', {
    scope: $scope,
  }).then(function(popover) {
    $scope.popover = popover
  });
  
  $scope.showMenu = function($event) {
    $scope.popover.show($event);
  }

  /*$scope.items = [
      {title:"8:25pm ET", entries1:"12345",entries2:"55555", entry:"$2", prizes:"$1500000"},
      {title:"9:25pm ET", entries1:"9988",entries2:"111122", entry:"$20", prizes:"$2500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"},
      {title:"10:25pm ET", entries1:"123455",entries2:"199999", entry:"$200", prizes:"$3500000"}
  ];*/

  $scope.multiplier_item_click = function(){
    $state.go("main.contestplayerselection");
  }
  $scope.getColor = function(idx) {

    if(idx >= 3)
      return "#FFF";
    else
      return "#ADF";
  }
})

.controller('ContestPlayerSelectionCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;

  $scope.items_playerlist = [];
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);


  var req = {
     method: 'GET',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/entry/1',
     headers: {
       'Content-Type': 'application/json'
     }
  }

  var length = 0;

  $http(req).then(function(result){
    console.log(result.data);
    $scope.salary_remaining = result.data.salaryRemaining;
    var sportslist = result.data.sportsPositions;
    //console.log(sportslist);
    
    //var length = 0;
    for (var i = 0; i <= sportslist.length - 1; i++) {
      length += sportslist[i].slots;
      if(sportslist[i].selectedPlayers != null){
        var object = {};

        for (var j = length - 1; j >= (length - sportslist[i].slots); j--) {
          object.showPlayeritem = true;
          object.showBlankitem = false;
          object.position = sportslist[i].selectedPlayers[j].position;
          object.firstname = sportslist[i].selectedPlayers[j].firstName.substr(0, 1);
          object.lastname = sportslist[i].selectedPlayers[j].lastName;
          object.ffpg = sportslist[i].selectedPlayers[j].ffpg;
          object.salary = sportslist[i].selectedPlayers[j].salary;
          object.played = sportslist[i].selectedPlayers[j].timesPlayed;
          object.homeTeam = sportslist[i].selectedPlayers[j].sportsEvent.homeTeam.abbreviation;
          object.awayTeam = sportslist[i].selectedPlayers[j].sportsEvent.awayTeam.abbreviation;
          object.startsAt = sportslist[i].selectedPlayers[j].sportsEvent.startsAt;
          object.id = sportslist[i].selectedPlayers[j].id;
          $scope.items_playerlist.push(object);
        };

        //console.log($scope.items_playerlist);
      }
      else if(sportslist[i].selectedPlayers == null){
        var object = {};

        for (var j = length - 1; j >= (length - sportslist[i].slots); j--) {
          object.showPlayeritem = false;
          object.showBlankitem = true;
          $scope.items_playerlist.push(object);
        };
      }


    }
    
  }, function(result){
    //console.log(result);
  });

  $scope.playerAdd = function(){
    $scope.parents.addbutton_state = true;
    $state.go("main.playerlist");
  }

  $scope.playerselect_item_click = function(item){
    console.log(item);
    $scope.parents.playerID = item.id;
    $state.go("main.playerdetails");
    $scope.parents.addbutton_state = false;
    console.log($scope.parents.playerID);
  }

  $scope.submit = function(){
    $state.go("main.playerlist");
  }

  $scope.contestinfo = function(){
    $state.go("main.contestinfo");
  }
  $scope.contestimport = function(){
    $state.go("main.importlineup");
  }
  $scope.contestclearall = function(){

  }
})

.controller('PlayerListCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.playerlist= [];
  var req = {
     method: 'GET',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/entry/1/players',
     headers: {
       'Content-Type': 'application/json'
     },
  }
  $http(req).then(function(result){
    console.log(result.data);

    for (var i = result.data.availablePlayers.length - 1; i >= 0; i--) {
      var object = {};
      object.firstname = result.data.availablePlayers[i].firstName;
      object.lastname = result.data.availablePlayers[i].lastName;
      object.position = result.data.availablePlayers[i].position;
      object.homeTeam = result.data.availablePlayers[i].sportsEvent.homeTeam.abbreviation;
      object.awayTeam = result.data.availablePlayers[i].sportsEvent.awayTeam.abbreviation;
      object.salary = result.data.availablePlayers[i].salary;
      object.startsAt = result.data.availablePlayers[i].sportsEvent.startsAt;
      object.ffpg = result.data.availablePlayers[i].ffpg;
      object.played = result.data.availablePlayers[i].timesPlayed;
      object.id = result.data.availablePlayers[i].id;
      $scope.playerlist.push(object);
    };

    console.log($scope.playerlist);
  }, function(result){
    //console.log(result);
  });
  $scope.playerselect = function(item){
    var data_test = {
      "playerID":item.id
    }
    var req = {
       method: 'POST',
       url: 'http://54.218.29.169:8080/v1/dfs/contest/entry/1/player/' + item.id,
       headers: {
         'Content-Type': 'application/json'
       },
       data:data_test
    }
    $http(req).then(function(result){
      console.log(result.data);
      //$window.history.back();
      $state.go("main.contestplayerselection");
    }, function(result){

    });

  }
  $scope.playeritemclick = function(item){
    $scope.parents.playerID = item.id;
    $scope.parents.addbutton_state = true;
    $state.go("main.playerdetails");
  }
})

.controller('ContestInfoCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate, $ionicSlideBoxDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);

  $scope.prizesdata = [];
  $scope.gamesdata = [];
  var req = {
     method: 'GET',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/1',
     headers: {
       'Content-Type': 'application/json'
     },
  }
  $http(req).then(function(result){
    console.log(result.data);

    $scope.title = result.data.contestDetail.name;
    $scope.currentEntries = result.data.contestDetail.currentEntries;
    $scope.maxEntries = result.data.contestDetail.maxEntries;
    $scope.entryFee = result.data.contestDetail.entryFee;
    $scope.startsAt = result.data.contestDetail.startsAt;
    $scope.totalPrizes = result.data.contestDetail.totalPrizes;

    for (var i = result.data.contestDetail.prizes.length - 1; i >= 0; i--) {
      var object = {};
      object.prize = result.data.contestDetail.prizes[i].prize;
      object.rank = result.data.contestDetail.prizes[i].rank;
      console.log(object);
      console.log($scope.prizesdata);
      $scope.prizesdata.push(object);

    };

    for (var i = result.data.contestDetail.events.length - 1; i >= 0; i--) {
      var object = {};
      object.homeTeam = result.data.contestDetail.events[i].homeTeam.abbreviation;
      object.awayTeam = result.data.contestDetail.events[i].awayTeam.abbreviation;
      object.startsAt = result.data.contestDetail.events[i].startsAt;
      $scope.gamesdata.push(object);
    };

  }, function(result){
    //console.log(result);
  });

  $scope.users = [];
  var req = {
     method: 'GET',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/1/entries',
     headers: {
       'Content-Type': 'application/json'
     },
  }
  $http(req).then(function(result){
    console.log(result.data);
    
    for (var i = result.data.entries.length - 1; i >= 0; i--) {
      var object = {};
      object.username = result.data.entries[i].username;
      $scope.users.push(object);
    };
    
    console.log($scope.users);
  }, function(result){
    //console.log(result);
  });

  $scope.he = $window.innerHeight - 220;
  angular.element($window).bind('resize', function() {
      $scope.he = $window.innerHeight - 220;
  });

  $scope.state0 = "contest_menu_bar_active";
  $scope.state1 = "contest_menu_bar_inactive";
  $scope.state2 = "contest_menu_bar_inactive";
  $scope.state3 = "contest_menu_bar_inactive";

  $scope.slideHasChanged = function($index){
    //alert($index);
    switch ($index){
      case 0:
        $scope.state0 = "contest_menu_bar_active";
        $scope.state1 = "contest_menu_bar_inactive";
        $scope.state2 = "contest_menu_bar_inactive";
        $scope.state3 = "contest_menu_bar_inactive";
        break;
      case 1:
        $scope.state0 = "contest_menu_bar_inactive";
        $scope.state1 = "contest_menu_bar_active";
        $scope.state2 = "contest_menu_bar_inactive";
        $scope.state3 = "contest_menu_bar_inactive";
        break;
      case 2:
        $scope.state0 = "contest_menu_bar_inactive";
        $scope.state1 = "contest_menu_bar_inactive";
        $scope.state2 = "contest_menu_bar_active";
        $scope.state3 = "contest_menu_bar_inactive";
        break;
      case 3:
        $scope.state0 = "contest_menu_bar_inactive";
        $scope.state1 = "contest_menu_bar_inactive";
        $scope.state2 = "contest_menu_bar_inactive";
        $scope.state3 = "contest_menu_bar_active";
        break;
    }
    
  }


    $scope.entries = function(){
      $ionicSlideBoxDelegate.slide(0);
    }

    $scope.games = function(){
      $ionicSlideBoxDelegate.slide(1);
    }

    $scope.prizes = function(){
      $ionicSlideBoxDelegate.slide(2);
    }

    $scope.rulescon = function(){
      $ionicSlideBoxDelegate.slide(3);
    }

})

.controller('PlayerDetailsCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

  //$scope.addbutton_state = $scope.parents.addbutton_state;
  $scope.addbutton_state = false;
  $scope.newsitems = [];
  $scope.gamelogs=[];
  $scope.gameslogitem=[];

  console.log($scope.parents.playerID);
  var req = {
     method: 'GET',
     url: 'http://54.218.29.169:8080/v1/dfs/contest/entry/1/player/'+$scope.parents.playerID,
     headers: {
       'Content-Type': 'application/json'
     },
  }

  $scope.lastestnews_logged = 0;
  $scope.lastestnews_text ="";

  $http(req).then(function(result){
    console.log(result.data);
    var player = result.data.playerEventDetail;
    $scope.player_position = player.player.position;
    $scope.player_salary = player.player.position;
    $scope.player_firstname = player.player.firstName;
    $scope.player_lastname = player.player.lastName;
    $scope.player_homeTeam = player.player.sportsEvent.homeTeam.abbreviation;
    $scope.player_awayTeam = player.player.sportsEvent.awayTeam.abbreviation;
    $scope.player_startsAt = player.player.sportsEvent.startsAt;
    $scope.player_timesPlayed = player.player.timesPlayed;
    $scope.player_ffpg = player.player.ffpg;

    $scope.player_carries = player.seasonStats.carries;
    $scope.player_gamesPlayed = player.seasonStats.gamesPlayed;
    $scope.player_passesAttempted = player.seasonStats.passesAttempted;
    $scope.player_passesCompleted = player.seasonStats.passesCompleted;
    $scope.player_passingTDS = player.seasonStats.passingTDS;
    $scope.player_passingYards = player.seasonStats.passingYards;
    $scope.player_rushingTDS = player.seasonStats.rushingTDS;
    $scope.player_rushingYards = player.seasonStats.rushingYards;

    for (var i = player.news.length - 1; i >= 0; i--) {
      var object={};
      object.news_logged = player.news[i].logged;
      object.news_text = player.news[i].text;
      $scope.newsitems.push(object);
      if($scope.lastestnews_logged < object.news_logged){
        $scope.lastestnews_logged = object.news_logged;
        $scope.lastestnews_text = object.news_text;
      }
    };

    for (var i = player.gameLogs.length - 1; i >= 0; i--) {
      var object={};
      object.during = player.gameLogs[i].period;
      $scope.gamelogs.push(object);
      for (var j = player.gameLogs[i].logItems.length - 1; j >= 0; j--) {

          for (var k = Object.keys(player.gameLogs[i].logItems[j].gameData).length - 1; k >= 0; k--) {
            var object1 = {};
            object1.data1 = (Object.keys(player.gameLogs[i].logItems[j].gameData)[k]).toString();
            object1.data2 = player.gameLogs[i].logItems[j].gameData[object1.data1];
            console.log(object1);
            $scope.gameslogitem.push(object1);
          };

      };
    };
    console.log($scope.newsitems);
  }, function(result){
    //console.log(result);
  });

  $scope.summary_click = "playerdetails_btn_active"
  $scope.gamelog_click = "playerdetails_btn_inactive"
  $scope.news_click = "playerdetails_btn_inactive"
  $scope.show_summary = true;
  $scope.show_gamelog = false;
  $scope.show_news = false;
  $scope.summary_state = function(){
    $scope.summary_click = "playerdetails_btn_active"
    $scope.gamelog_click = "playerdetails_btn_inactive"
    $scope.news_click = "playerdetails_btn_inactive"
    $scope.show_summary = true;
    $scope.show_gamelog = false;
    $scope.show_news = false;
  }
  $scope.gamelog_state = function(){
    $scope.summary_click = "playerdetails_btn_inactive"
    $scope.gamelog_click = "playerdetails_btn_active"
    $scope.news_click = "playerdetails_btn_inactive"
    $scope.show_summary = false;
    $scope.show_gamelog = true;
    $scope.show_news = false;
  }
  $scope.news_state = function(){
    $scope.summary_click = "playerdetails_btn_inactive"
    $scope.gamelog_click = "playerdetails_btn_inactive"
    $scope.news_click = "playerdetails_btn_active"
    $scope.show_summary = false;
    $scope.show_gamelog = false;
    $scope.show_news = true;
  }

  $scope.contestinfo = function(){
    $scope.parents.playerID = item.id;
    $state.go("main.playerdetails");
  }
})

.controller('ImportLineUpCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

})

.controller('WithDrawCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

  var data_test = {
    "cardholderName":"Paul Zain",
    "cardNumber":"4242424242424242",
    "expirationMonth":"12",
    "expirationYear":"2016",
    "cvv":"123",
    "state":"TX",
    "zipcode":"78739",
    "amount":100};


  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/core/depositCreditCard',
     headers: {
       'Content-Type': 'application/json'
     },
     data:data_test
  }
  $http(req).then(function(result){
    
    console.log(result.data);
    $scope.available = result.data.availableBalance;

  }, function(result){
    console.log(result.data);
  });

  $scope.paypal_state = "playerdetails_btn_active";
  $scope.check_state = "playerdetails_btn_inactive";
  $scope.show_paypal = true;
  $scope.show_check = false;
  $scope.paypal_click = function(){
    $scope.paypal_state = "playerdetails_btn_active";
    $scope.check_state = "playerdetails_btn_inactive";
    $scope.show_paypal = true;
    $scope.show_check = false;
  }
  $scope.check_click = function(){
    $scope.paypal_state = "playerdetails_btn_inactive";
    $scope.check_state = "playerdetails_btn_active";
    $scope.show_paypal = false;
    $scope.show_check = true;
  }

})

.controller('TransactionCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

  $scope.transactions = [];
  var req = {
     method: 'POST',
     url: 'http://54.218.29.169:8080/v1/core/transactionHistory',
     headers: {
       'Content-Type': 'application/json'
     },
  }
  $http(req).then(function(result){
    console.log(result.data);
    for (var i = result.data.transactions.length - 1; i >= 0; i--) {
      var object = {};
      object.amount = result.data.transactions[i].amount;
      object.transactionID = result.data.transactions[i].transactionID;
      object.logged = result.data.transactions[i].logged;
      object.note = result.data.transactions[i].notes;
      $scope.transactions.push(object);
    };
  }, function(result){
    //console.log(result);
  });

})
.controller('HowtoPlayCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);

})

.controller('CreatePublicCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);
    $scope.next = function(){
    $state.go("main.createh2hs");
  }
})

.controller('CreateH2HsCtrl', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate){
  $ionicSideMenuDelegate.canDragContent(false);
  $scope.date = new Date();
  $scope.timeInMs = 0;
  var countUp = function() {
      $scope.timeInMs+= 500;
      $timeout(countUp, 500); 
      $scope.date = new Date();
  }
  $timeout(countUp, 500);

  $scope.showBlankitem = true;
  $scope.showPlayeritem = false;

})

.controller('sortpopup', function($scope, $timeout, $http, $location, $state, $ionicPopover, $window, $ionicPopup, $ionicLoading, UrlManager, $ionicSideMenuDelegate,$rootScope){
  $scope.name = function(){
    //alert("name");
    $rootScope.$broadcast('scanner-started',{sort:"Name"});
  }
  $scope.entries = function(){
    $rootScope.$broadcast('scanner-started',{sort:"Entries"});
  }
  $scope.size = function(){
    $rootScope.$broadcast('scanner-started',{sort:"Size"});
  }
  $scope.entryfee = function(){
    $rootScope.$broadcast('scanner-started',{sort:"EntryFee"});
  }
  $scope.prizes = function(){
    $rootScope.$broadcast('scanner-started',{sort:"Prizes"});
  }

})

