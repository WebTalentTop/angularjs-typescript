import { titanApiUrl } from './titanApiUrl';
export class TorqueSheetApiUrl {
    public static torqueSheetTemplatePostUrl: string = titanApiUrl + 'TorqueSheetTemplate/Post';
    public static getAllTorqueSheetTemplatesUrl: string = titanApiUrl + 'TorqueSheetTemplate/GetAll';
    public static getTorqueSheetTemplatesUrl: string = titanApiUrl + 'TorqueSheetTemplate/Get?id=';
    public static getTorqueSheetUrl: string = titanApiUrl + 'TorqueSheet/Get?id=';
    public static putTorqueSheetTemplateUrl: string = titanApiUrl + 'TorqueSheetTemplate/Put';
    public static putTorqueSheetUrl: string = titanApiUrl + 'TorqueSheet/Put?status=';
    public static putTorqueSheetApprovalRequestUrl: string = titanApiUrl + 'TorqueSheet/putTorqueSheetApprovalRequest?status=';    
    public static postNewTorqueSheetVersionUrl: string = titanApiUrl + 'TorqueSheet/CreateNewVersion';
    public static postTorqueSheetUrl: string = titanApiUrl + 'TorqueSheet/Post?submitForApproval=';
    public static getTorqueSheetsByTorqueBookIdUrl: string = titanApiUrl + 'TorqueSheet/GetTorqueSheetsByTorqueBook?torqueBookId=';
    public static getTorqueBooksTorqueSheetNamesUrl: string = titanApiUrl + 'TorqueSheetName/GetAll?torqueBookId=';
    public static getTorqueSheetApprovalRequestEmailContentUrl: string = titanApiUrl + 'TorqueSheet/getTorqueSheetApprovalRequestEmailContent?torqueSheetNameId=';
    public static torqueSheetNamePostUrl: string = titanApiUrl + 'TorqueSheetName/Post';
}