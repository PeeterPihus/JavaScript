(function(global, $) {
    //luuakse muutuja Greetr millele omistatakse funktsioon firstname, lastname ja language
    var Greetr = function(firstName, lastName, language) { 
        // tagastatakse uus greetr.init mis on jquery object.
        return new Greetr.init(firstName, lastName, language);
    }
    // luuakse prototüüp et lisada meetodid
    Greetr.prototype = {};
    //luuakse greets init funktsioon
    Greetr.init = function(firstName, lastName, language) {
        // luuakse objekt self et ta ei viitaks this'iga globaalsele objektile
        var self = this; 
        // luuakse self firstname objekt ja määratakse omaduseks firstname või '' string
        self.firstName = firstName || '';  
        self.lastName = lastName || '';
        // siin pannakse language'ile dafault 'en'.
        self.language = language || 'en'; 
        
    }
    // see funktsioon mis omistab või viitab endale kõik greetr'iga saadud objektid
    Greetr.init.prototype = Greetr.prototype; 
    // siin viidatakse global ja jquery'le
    global.Greetr = global.G$ = Greetr; 
    
}(window, jQuery));