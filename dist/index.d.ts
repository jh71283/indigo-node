import { Device } from "./device";
import { ObjectHeader } from "./objectheader";
import { ActionGroup } from "./actiongroup";
import { Variable } from "./variable";
export declare function init(indigoServerURL: string, port: number, username: string, password: string): Promise<boolean>;
export declare function GetDevices(): Promise<ObjectHeader[]>;
export declare function GetDevice(name: string): Promise<Device>;
export declare function SetDeviceOnOff(name: string, isOn: boolean): Promise<Device>;
export declare function SetDevicePropertyValue(name: string, propertyname: string, propertyvalue: string): Promise<Device>;
export declare function ToggleDeviceOnOff(name: string): Promise<Device>;
export declare function SetDeviceBrightness(name: string, brightness: number): Promise<Device>;
export declare function GetVariable(name: string): Promise<Variable>;
export declare function GetVariableValue(name: string): Promise<string>;
export declare function SetVariable(name: string, value: string): Promise<Variable>;
export declare function GetActionGroup(name: string): Promise<ActionGroup>;
export declare function ExecuteActionGroup(name: string): Promise<ActionGroup>;
export declare function GetVariables(): Promise<ObjectHeader[]>;
export declare function GetActionGroups(): Promise<ObjectHeader[]>;
