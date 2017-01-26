(function(global, $) {
    // luuakse uus objekt
    var Greetr = function(firstName, lastName, language) {
        return new Greetr.init(firstName, lastName, language);   
    }
    
    var supportedLangs = ['en', 'es']; //luuakse massiiv en ja es.
    
    var greetings = { //luuakse tava tervitus
        en: 'Hello',
        es: 'Hola'
    };
    
    var formalGreetings = { // luuakse viisakas tervitus
        en: 'Greetings',
        es: 'Saludos'
    };
    
    var logMessages = { // luuakse sisselogimsel vastav sõne.
        en: 'Logged in',
        es: 'Inició sesión'
    };
    
    Greetr.prototype = { // prototyybi loomine et hoida meetodeid ning vähendada mälu kasutust.
        
        fullName: function() { // luuakse funktsioon mis tagastab eesnime ja perekonnanime. This viitab prototyybi enda meetoditele.
            return this.firstName + ' ' + this.lastName;   
        },
        
        validate: function() { // valideeritakse funktsioon , mis kontrollib keelevalikut.
             if (supportedLangs.indexOf(this.language)  === -1) {
                throw "Invalid language";   
             }
        },
        
        greeting: function() { // tervitus funktsioon mis väljastab objektilt sõne.
            return greetings[this.language] + ' ' + this.firstName + '!';
        },
        
        formalGreeting: function() { // sama mis eelmine aga väljastab viisaka tervituse
            return formalGreetings[this.language] + ', ' + this.fullName();  
        },
        
        greet: function(formal) { // jadalähtestusega meetodid väljastavad enda objektid
            var msg;
            
            // if undefined or null it will be coerced to 'false' - // kui on fomraalne tervitus  siis väljastatakse see
            if (formal) {
                msg = this.formalGreeting();  
            }
            else {
                msg = this.greeting();  // kui ei ole siis väljastatakse tavatervitus
            }

            if (console) {
                console.log(msg);
            }

            // 'this' refers to the calling object at execution time
            // makes the method chainable
            return this;
        },
        
        log: function() {
            if (console) {
                console.log(logMessages[this.language] + ': ' + this.fullName()); 
            }
                            
            return this;
        },
                            
        setLang: function(lang) {
            this.language = lang;
                    
            this.validate();
            
            return this;
        },
        
        HTMLGreeting: function(selector, formal) { // luuakse uus functioon millel on klassi selektor ja tervitusviis
            if (!$) { // kui jquery't ei ole siis antakse sõne mis ütleb et jqueryt ei laetud 2ra.
                throw 'jQuery not loaded';   
            }
            
            if (!selector) { // kui selektorit ei ole olemas kuvatakse sõne puudub jquery selektor
                throw 'Missing jQuery selector';   
            }
            
            var msg; //otsustab kuvatava sõne tüübi. kas viisakas v tavatervitus.
            if (formal) {
                msg = this.formalGreeting();   
            }
            else {
                msg = this.greeting();   
            }

            $(selector).html(msg); //sisestatakse vastav sõne sellesse fomraati ja kohta kuhu vaja.Document object model'isse.
            
            return this;
        }
        
    };
    
    Greetr.init = function(firstName, lastName, language) {
        
        var self = this;
        self.firstName = firstName || '';
        self.lastName = lastName || '';
        self.language = language || 'en';
        
    }
    
    Greetr.init.prototype = Greetr.prototype;
    
    global.Greetr = global.G$ = Greetr;
    
}(window, jQuery));