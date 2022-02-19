// 2/18/2022 9:06PM @MANDY"S

/*!
 *Create a new execution context for our own framework/library
 *All our variables declared here are safe, we only exposing on  *the global object what we want
 */

 (function(gloabl,jQuery){
     var Greetr = function(firstName, lastName, language){
         return new Greetr.init(firstName,lastName,language);
     }

     var validLanguage = ['en','cn'];

     var greetings = {
         en: 'whats up ',
         cn: '你好呀 '
     }

     var formalGreetings = {
         en: 'Hello',
         cn: '您好 '
     }

     var logMsg = {
         en: 'logged in',
         cn: '已登陆'
     }


     Greetr.prototype = {

         fullName: function(){
             return this.firstName+' '+this.lastName;
         },

         regularGreet: function(){
             return greetings[this.language] + this.fullName() + '!';
         },

         formalGreet: function(){
             return formalGreetings[this.language] + this.fullName();
         },

         greet: function(formal){
             var msg;
             if(formal){
                 msg = this.formalGreet();
             }else{
                 msg = this.regularGreet();
             }
             if(window.console){
                 console.log(msg);
             }
             return this;
         },

         HTMLGreeting: function(selector,formal){
             if(!jQuery){throw 'jQuery not loaded';}
             if(!selector){throw 'Missing jQuery selector';}
             var msg;
             if(formal){
                 msg = this.formalGreet();
             }else{
                 msg = this.regularGreet();
             }
             $(selector).html(msg);
             return this;
         },

         setLang: function(language){
             this.language = language;
             this.isValid();
             return this;
         },

         isValid: function(){
             if(validLanguage.includes(this.language)){
                 return this;
             }else{
                 throw 'Not valid language input';
             }
             
         },

         log: function(){
             console.log('Display successfully');
         }


     }

     

     Greetr.init = function(firstName,lastName,language){
         var self = this;
         self.firstName = firstName || ' ';
         self.lastName = lastName || ' ';
         self.language = language || 'en';

         self.isValid();
     }

     Greetr.init.prototype = Greetr.prototype;



     window.Greetr = window.G$ = Greetr;



 }(window,jQuery));