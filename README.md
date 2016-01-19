MaestoPrinterPlugin
===================

## Phonegap plugin for printing on Maesto printer from android app. This is tested on Printer model Meastro Script 57

### Steps to use plugin

#### 1) Add plugin on your mobile application using plugin URL 
```javascript
(Eg. cordova plugin add https://github.com/ToshanVerma/mstprinter.git or add in hooks)
```

#### 2) To connect mobile with printer, use below command
```javascript
MSTPrinter.connectPrinter(<Bluetooth_printer_mac_id>,function(){ },function(){ });
```

#### 3) To dis-connect mobile with printer, use below command
```javascript
MSTPrinter.disconnectPrinters(<Bluetooth_printer_mac_id>,function(){ },function(){ });
```

#### 4) To get status of printer, use below command
```javascript
MSTPrinter.getStatus(<Bluetooth_printer_mac_id>,function(){ },function(){ });
```

#### 5) To print text use below command
```javascript
MSTPrinter.PrintText(<Bluetooth_printer_mac_id>, <Print_Data_In_String>, 0, 0, 0,function(){ },function(){ });
```

#### 6) To print blank line, use below command
```javascript
MSTPrinter.setLineFeed(<Bluetooth_printer_mac_id>,function(){ },function(){ });
```