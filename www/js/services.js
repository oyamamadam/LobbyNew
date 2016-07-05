angular.module('lobby.services', [])

.factory('UrlManager', function() {
        /*
  var urls = [
    { id:0, name: 'login', url: 'https://abmeasy.com/app/ajax/login' },
    { id:1, name: 'signup', url: 'http://localhost:80/kivuexpense/api/a.php'}
  ];
         */

  // var urls = [
  //     { id:0, name: 'login', url: 'http://localhost/kivuexpense/api/login.php' },
  //     { id:1, name: 'securityQuestion', url: 'http://localhost/kivuexpense/api/security.php'},
  //     { id:2, name: 'passwordUrl', url: 'http://localhost/kivuexpense/api/password.php'}
  // ];
  
  return {
    all: function() {
      return urls;
    },
    get: function(urlname) {
      for (var i = 0; i < urls.length; i++) {
        if (urls[i].name == urlname) {
          return urls[i].url;
        }
      }
      return null;
    }
  }
})

.factory('DocTypeInfo', function() {
  var receiptDocInfo = {};
  return {
    all: function() {
      return receiptDocInfo;
    },
    set: function(key, value) {
      receiptDocInfo[key] = value;
    }
  }
})

;
