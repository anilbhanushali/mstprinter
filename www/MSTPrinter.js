module.exports = {
    getStatus: function(successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'getstatus', // with this action name
            []
        ); 
    },
    connectPrinter: function(address, successCallback, errorCallback) {
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'connect', // with this action name
            [{                  // and this array of custom arguments to create our entry
                "macaddress": address
            }]
        ); 
    },
    showDeviceList: function(successCallback,errorCallback){
        cordova.exec(
            successCallback,
            errorCallback,
            'MSTPrinter',
            'showdevicelist',
            []
        );
    },
    clearPrinters: function(successCallback,errorCallback){
        cordova.exec(
            successCallback,
            errorCallback,
            'MSTPrinter',
            'clearprinters',
            []
        );
    },
    SetFontSize : function(textsize,successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'setfontsize', // with this action name
            [{   
                // and this array of custom arguments to create our entry
                "textsize":textsize
            }]
        ); 
    },
    SetFontStyle : function(attribute,successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'setfontstyle', // with this action name
            [{   
                "attribute":attribute
            }]
        ); 
    },
    setLineFeed : function(macaddress, successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'setlinefeed', // with this action name
            [{   
                "macaddress":macaddress,// and this array of custom arguments to create our entry
            }]
        ); 
    },
    setAlignment : function(macaddress, alignment, successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'setalignment', // with this action name
            [{   
                "macaddress":macaddress,// and this array of custom arguments to create our entry
                "alignment":alignment,
            }]
        ); 
    },
    PrintText : function(macaddress,text, alignment, attribute, textsize,successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'printtext', // with this action name
            [{   
                "macaddress":macaddress,// and this array of custom arguments to create our entry
                "text": text,
                "alignment":alignment,
                "attribute":attribute,
                "textsize":textsize
            }]
        ); 
    },
    SetImage : function(file,successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'setimage', // with this action name
            [{   
                "file": file
            }]
        );
    },
    PrintImage : function(successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'printimage', // with this action name
            []
        );
    }
};
