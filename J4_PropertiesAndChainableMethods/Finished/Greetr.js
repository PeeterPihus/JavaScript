(function(global, $) {
    
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    // luuakse massiv  'en', 'es'
    var supportedLangs = ['en', 'es']; 
    // luuakse tervitus
    var greetings = { 
        en: 'Hello',
        es: 'Hola'
    };
    // luuakse viisakas tervitus
    var formalGreetings = { 
        en: 'Greetings',
        es: 'Saludos'
    };
    //luuakse sisselogimisel keelevalikust olenevalt kirje
    var logMessages = { 
        en: 'Logged in',
        es: 'Inició sesión'
    };
    // siin saavad meetodid samad atribuudid mis on genereeritud all 
    Greetr.prototype = { 
        // luuakse funktsioon mis tagastab täisnime
        fullName: function() { 
            return this.firstName + ' ' + this.lastName;   
        },
        // luuakse funktsioon mis vaatab kas keel mida sisestatakse on õige, kui ei ole õige , siis väljastatakse sõne "invalid language"
        validate: function() { 
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        // luuakse terivuts funktsioon, millega väljastakse tervitus vastavalt keelele mis ollakse valitud ja see jörel eesnimi
        greeting: function() { 
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        // luuakse viisakustervitus funktsioon, mis viitab valitud keelele ning see järel täis nimi
        formalGreeting: function() {
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        // luuakse funktsioon greet mille põhjal väljastatakse kas viisakas tervitus või tavaline tervitus
        greet: function(formal) { 
            var msg;
            
            // if undefined or null it will be coerced to 'false' kui peaks olema undefined või null siis on "vale",
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time // this viitab objekti väljakutsumise täitmisele ja teeb meetodi jadas töötavaks
            // makes the method chainable
            return this;
        },
        // logi funktsioon kus salvestatakse "this" keelevalik ja "this" täisnimi
        log: function() { 
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
                            
        setLang: function(lang) {
            // määratakse keel
            this.language = lang;  
            // valideeritakse kui vajutatakse nuppu        
            this.validate(); 
            
            return this;
        }
        
    };
    // tegelik objekt tehakse siin kutsudes välja self'iga
    Greetr.init = function(firstName, lastName, language) { 
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    // kasutades prototüüpi ei pea kasutama "new"'i
    Greetr.init.prototype = Greetr.prototype; 
    //lisatakse Greetr globaalsesse objekti
    global.Greetr = global.G$ = Greetr;  
    
}(window, jQuery));