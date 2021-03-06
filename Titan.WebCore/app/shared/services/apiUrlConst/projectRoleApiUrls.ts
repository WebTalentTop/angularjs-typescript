import { titanApiUrl } from './titanApiUrl';
import { GridApiUrl } from './gridApiUrls';

export class ProjectRoleApiUrl {
    public static gridApiUrl:string  = GridApiUrl.projectRoleGridUrl;
    public static postCreatedUrl: string = titanApiUrl + 'projectRole/post';
    public static postUpdateUrl: string = titanApiUrl + 'projectRole/put';
    public static getByIdUrl: string = titanApiUrl + 'projectRole/get';
    public static getAllProjectRoles: string = titanApiUrl + 'projectRole';
    public static PostAddUserRolesUrl: string = titanApiUrl + 'projectRole/PostUserRoles';
    public static getRolesByProjectIdUrl: string = titanApiUrl + 'projectRole/GetProjectUserRoleByProjectId';
    public static DeleteUserRoleMap: string = titanApiUrl + 'project/DeleteProjectUserRoleMap';
    
    

    
    
}