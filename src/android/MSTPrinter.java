package org.betterlife.printermst;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaInterface;
import org.apache.cordova.CordovaPlugin;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.bluetooth.BluetoothDevice;
import android.bluetooth.BluetoothAdapter;

//import mmsl.*;
import mmsl.DeviceUtility.DeviceBluetoothCommunication;
import mmsl.DeviceUtility.DeviceCallBacks;

public class MSTPrinter extends CordovaPlugin implements DeviceCallBacks {

    public static final String ACTION_CONNECT_PRINTER = "connect";
    public static final String ACTION_PRINT_TEXT = "printtext";
    private static BluetoothAdapter mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();
    private static CallbackContext callbackContext;
    private static Boolean isConnected = false;
    private static String macaddress;

    final DeviceBluetoothCommunication bluetoothCommunication =  new DeviceBluetoothCommunication();

    @Override
    public void initialize(CordovaInterface cordova, CordovaWebView webView) {
        super.initialize(cordova, webView);
    }

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        this.callbackContext = callbackContext;

        if(ACTION_CONNECT_PRINTER.equals(action)){
            //call connect printer method

            try{
                JSONObject arg_object;
                arg_object = args.getJSONObject(0);
                macaddress = arg_object.getString("macaddress");
            }
            catch (JSONException e){
                callbackContext.error(e.getMessage());
            }
            BluetoothDevice macid = mBluetoothAdapter.getRemoteDevice(macaddress);
            bluetoothCommunication.StartConnection(macid, this);
        }

        if (ACTION_PRINT_TEXT.equals(action)) {

            try{
                JSONObject arg_object;
                arg_object = args.getJSONObject(0);
                macaddress = arg_object.getString("macaddress");
            }
            catch (JSONException e){
                callbackContext.error(e.getMessage());
            }
            if(isConnected){
                String name = "Toshan Verma";
                bluetoothCommunication.SendData(name.getBytes());
                bluetoothCommunication.LineFeed();
                bluetoothCommunication.LineFeed();
                bluetoothCommunication.LineFeed();
            }else{
                callbackContext.error("Printer not connected");
            };


        }
        return true;

    }

    @Override
    public void onConnectComplete() {
        isConnected = true;
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onConnectionFailed() {
        isConnected = false;
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onOutofPaper() {
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onPlatenOpen() {
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onHighHeadTemperature() {
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onLowHeadTemperature() {
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onImproperVoltage() {
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }

    @Override
    public void onSuccessfulPrintIndication() {
        PluginResult result = new PluginResult(PluginResult.Status.OK);
        result.setKeepCallback(true);
        callbackContext.sendPluginResult(result);
    }
}
