// good tutorial: http://www.ng-newsletter.com/posts/angular-translate.html
(function(){
  var app = angular.module('translateApp', ['pascalprecht.translate']);

  app.config(['$translateProvider', function ($translateProvider) {

    // here we will build out a mapping of the content gathered from the phrase service
    var englishPhrases = { "title": "ENGLISH",
                           "index/greeting": "hellooo",
                           "index/text": "some sample text" };

    var spanishPhrases = { "title": "SPANISH",
                           "index/greeting": "hola",
                           "index/text": "como estas" };

    // our translations by language. takes in a json object. would be helpful
    // if the property name was a literal reference to where it is displayed (ex. views/navigation)
    $translateProvider.translations('en-US', englishPhrases)
    .translations('es', spanishPhrases);

    // set the language from the browser's settings
    var language = navigator.language;
    $translateProvider.preferredLanguage(language);

  }]);

})();
