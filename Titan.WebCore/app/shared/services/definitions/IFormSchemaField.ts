import {IFormSchemaFieldDataTypeData} from "./IFormSchemaFieldDataTypeData";
/**
 * Created by ZeroInfinity on 12/4/2016.
 */
export interface IFormSchemaField{
    id:string;
    formSchemaVersionId?:number;
    name:string;
    label:string;
    isRequired:boolean;
    maxLength:number;
    data?:any[];
    order?:number;
    fieldDataType?:any;
    checkBoxData?:any;
    radioBoxData?:any;
    selectBoxData?:any;
    displaySelectBoxData?:any[];
    formSchemaFieldDataTypeId:string;
    formSchemaFieldDataTypeData?:IFormSchemaFieldDataTypeData[];
}