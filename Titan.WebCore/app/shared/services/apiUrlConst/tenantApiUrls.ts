﻿import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrl';
export class TenantApiUrl {
    public static gridApiUrl:string  = GridApiUrl.testFacilityGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'tenant';
    public static postUpdateUrl: string = titanApiUrl + 'tenant';
    public static getByIdUrl: string = titanApiUrl + 'tenant';
}