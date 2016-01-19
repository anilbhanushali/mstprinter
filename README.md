MaestoPrinterPlugin
===================

Phonegap plugin for printing on Maesto printer from android app. This is tested on Printer model MST

Steps to use plugin

1) Add plugin on your mobile application using plugin URL (Eg. cordova plugin add https://github.com/ToshanVerma/mstprinter.git or add in hooks)

2) To connect mobile with printer, use below command
	MSTPrinter.connectPrinter(<Bluetooth_printer_mac_id>,function(){ },function(){ });

3) To dis-connect mobile with printer, use below command
	MSTPrinter.disconnectPrinters(<Bluetooth_printer_mac_id>,function(){ },function(){ });

4) To get status of printer, use below command
	MSTPrinter.getStatus(<Bluetooth_printer_mac_id>,function(){ },function(){ });

5) To print text use below command
	MSTPrinter.PrintText(<Bluetooth_printer_mac_id>, <Print_Data_In_String>, 0, 0, 0,function(){ },function(){ });

6) To print blank line, use below command
	MSTPrinter.setLineFeed(<Bluetooth_printer_mac_id>,function(){ },function(){ });