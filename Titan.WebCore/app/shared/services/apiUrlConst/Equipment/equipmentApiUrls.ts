﻿import { titanApiUrl } from '../titanApiUrl';
import { GridApiUrl } from '../gridApiUrls';

export class EquipmentApiUrl {
    public static gridApiUrl:string  = GridApiUrl.equipmentGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'equipment';
    public static getLogComments: string = titanApiUrl + 'equipment/GetEquipmentLogCommentByEquipmentId';
    public static PostLogCommentsUrl: string = titanApiUrl + 'equipment/PostLogComments';

    public static postManufacturerCreatedUrl: string = titanApiUrl + 'equipmentManufacturer';
    public static postUpdateUrl: string = titanApiUrl + 'equipment/put';
    public static getByIdUrl: string = titanApiUrl + 'equipment';
    public static getManufacturerDetailsByIdUrl: string = titanApiUrl + 'equipmentManufacturer';
    public static getEquipmentBarCodeImage: string = titanApiUrl + 'equipment/GetEquipmentBarcode';
    public static getAllUrl: string = titanApiUrl + 'equipmentManufacturer';
    public static getAllEquipmentTypesUrl: string = titanApiUrl + 'Equipmenttype/GetAllEquipmentTypes';
   
}