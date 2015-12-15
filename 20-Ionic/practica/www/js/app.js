// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider

  // setup an abstract state for the tabs directive
    .state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  })

  // Each tab has its own nav history stack:

  .state('tab.dash', {
    url: '/dash',
    views: {
      'tab-dash': {
        templateUrl: 'templates/tab-dash.html',
        controller: 'DashCtrl'
      }
    }
  })

  .state('tab.chats', {
      url: '/chats',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-chats.html',
          controller: 'ChatsCtrl'
        }
      }
    })
  .state('tab.login', {
      url: '/login',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-login.html'
        }
      }
    })
  .state('tab.ingredients', {
      url: '/ingredients',
      views: {
        'tab-chats': {
          templateUrl: 'templates/tab-ingredients.html'
        }
      }
    })
    .state('tab.chat-detail', {
      url: '/chats/:chatId',
      views: {
        'tab-chats': {
          templateUrl: 'templates/chat-detail.html',
          controller: 'ChatDetailCtrl'
        }
      }
    })

  .state('tab.account', {
    url: '/account',
    views: {
      'tab-account': {
        templateUrl: 'templates/tab-account.html',
        controller: 'AccountCtrl'
      }
    }
  });

  //--------------------------------------

  .state('login', {
        url: "/login",
        templateUrl: "templates/login.html",
        controller: 'LoginCtrl'
    })

    .state('app.home', {
        url: '/home',
        views: {
            'menuContent': {
                templateUrl: 'templates/home.html',
                controller: 'HomeCtrl'
            }
        }
    })

    .state('app.calendar', {
        url: '/calendar',
        views: {
            'menuContent': {
                templateUrl: 'templates/calendar.html',
                controller: 'CalendarCtrl'
            }
        }
    })

    .state('app.event-form', {
        url: '/event-form',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventForm.html',
                controller: 'EventFormCtrl'
            }
        }
    })

    .state('app.event-edit', {
        url: '/event-edit/:eventId/:officeId/:contactId',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventEdit.html',
                controller: 'EventEditCtrl'
            }
        }
    })

    .state('app.event-detail', {
        url: '/event-detail/:eventId/:officeId',
        views: {
            'menuContent': {
                templateUrl: 'templates/eventDetail.html',
                controller: 'EventDetailCtrl'
            }
        }
    })

    .state('app.patients', {
        url: '/patients',
        views: {
            'menuContent': {
                templateUrl: 'templates/patients.html',
                controller: 'PatientsCtrl'
            }
        }
    })

    .state('app.patient-form', {
        url: '/patient-form',
        views: {
            'menuContent': {
                templateUrl: 'templates/patientForm.html',
                controller: 'PatientFormCtrl'
            }
        }
    })

    .state('app.patient-detail', {
        url: '/patient-detail/:patientId',
        views: {
            'menuContent': {
                templateUrl: 'templates/patientDetail.html',
                controller: 'PatientDetailCtrl'
            }
        }
    })

    .state('app.patient-edit', {
        url: '/patient-edit/:patientId',
        views: {
            'menuContent': {
                templateUrl: 'templates/patientEdit.html',
                controller: 'PatientEditCtrl'
            }
        }
    })

    .state('app.configuration', {
        url: '/configuration',
        views: {
            'menuContent': {
                templateUrl: 'templates/configuration.html',
                controller: 'ConfigurationCtrl'
            }
        }
    })

    .state('app.profile', {
        url: '/profile',
        views: {
            'menuContent': {
                templateUrl: 'templates/profile.html',
                controller: 'ProfileCtrl'
            }
        }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/dash');

});
