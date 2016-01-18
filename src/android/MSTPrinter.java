package org.betterlife.printermst;

import org.apache.cordova.CallbackContext;
import org.apache.cordova.CordovaPlugin;
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

    @Override
    public boolean execute(String action, JSONArray args, CallbackContext callbackContext) throws JSONException {
        DeviceBluetoothCommunication bluetoothCommunication;
        bluetoothCommunication = new DeviceBluetoothCommunication();

        BluetoothAdapter mBluetoothAdapter;
        mBluetoothAdapter = BluetoothAdapter.getDefaultAdapter();

        if(ACTION_CONNECT_PRINTER.equals(action)){

            //call connect printer method
            JSONObject arg_object = args.getJSONObject(0);
            BluetoothDevice macid = mBluetoothAdapter.getRemoteDevice(arg_object.getString("macaddress"));
            //arg_object.getString("macaddress");
            bluetoothCommunication.StartConnection(macid,this);
            return true;
        }
        else if (ACTION_PRINT_TEXT.equals(action)) {

            //call print text method
            String name = "Toshan Verma";
            bluetoothCommunication.SendData(name.getBytes());
            return true;
        }

        return false;
    }

    @Override
    public void onConnectComplete() {

    }

    @Override
    public void onConnectionFailed() {

    }

    @Override
    public void onOutofPaper() {

    }

    @Override
    public void onPlatenOpen() {

    }

    @Override
    public void onHighHeadTemperature() {

    }

    @Override
    public void onLowHeadTemperature() {

    }

    @Override
    public void onImproperVoltage() {

    }

    @Override
    public void onSuccessfulPrintIndication() {

    }
}