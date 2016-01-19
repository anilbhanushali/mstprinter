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
    disconnectPrinters: function(successCallback,errorCallback){
        cordova.exec(
            successCallback,
            errorCallback,
            'MSTPrinter',
            'disconnectprinters',
            []
        );
    },
    /*showDeviceList: function(successCallback,errorCallback){
        cordova.exec(
            successCallback,
            errorCallback,
            'MSTPrinter',
            'showdevicelist',
            []
        );
    },*/
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
    PrintText : function(macaddress,printtext, fontAlignment, fontStyle, fontSize, successCallback, errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'printtext', // with this action name
            [{   
                "macaddress":macaddress,// and this array of custom arguments to create our entry
                "printtext": printtext,
                "fontAlignment":fontAlignment,
                "fontStyle":fontStyle,  //i.e. Bold
                "fontSize":fontSize     //
            }]
        ); 
    }/*,
    /*PrintImage : function(successCallback,errorCallback){
        cordova.exec(
            successCallback, // success callback function
            errorCallback, // error callback function
            'MSTPrinter', // mapped to our native Java class called "MSTPrinter"
            'printimage', // with this action name
            []
        );
    },*/

    /*
    No need
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
    }
    */    
};
