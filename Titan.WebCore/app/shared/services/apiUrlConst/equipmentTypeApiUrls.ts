﻿import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';

export class EquipmentTypeApiUrl {
    public static gridApiUrl: string = GridApiUrl.equipmentTypeGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'equipmentType/AddEquipmentSubTypes';
    public static postUpdateUrl: string = titanApiUrl + 'equipmentType/put';
    public static postdeleteUrl: string = titanApiUrl + 'equipmentType/DeleteEquipments';
    public static getByIdUrl: string = titanApiUrl + 'equipmentType';
    public static getSubTypesByIdUrl: string = titanApiUrl + 'equipmentType/GetEquipmentSubTypes';
    public static getSensorListUrl: string = titanApiUrl + 'equipmentType/GetAllEquipmentTypes';
  
}