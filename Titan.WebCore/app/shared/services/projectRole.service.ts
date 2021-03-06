import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProjectRoleApiUrl} from './apiUrlConst/ProjectRoleApiUrls';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class ProjectRoleService {
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 15,
        "IsPaging": true
    };
    private currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    getAllProjectRoles(): Observable<any> {
        return this.http.get(`${ProjectRoleApiUrl.getAllProjectRoles}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    DeleteUserRoleMap(id): Observable<any> {
        return this.http.post(`${ProjectRoleApiUrl.DeleteUserRoleMap}/${id}`, { headers: this.headers })

            .map(this.getJson)
         
    }
    postAddUserNames(filterBody, projectId, projectRoleId): Observable<any> {
        return this.http.post(`${ProjectRoleApiUrl.PostAddUserRolesUrl}/${projectId}/${projectRoleId}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    postGridData(): Observable<any> {
        return this.http.post(`${ProjectRoleApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ProjectRoleApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ProjectRoleApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
         //   .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${ProjectRoleApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }
    getByIdusing(id): Observable<any> {
        return this.http.get(`${ProjectRoleApiUrl.getRolesByProjectIdUrl}/${id}`, { headers: this.headers })

            //     .toPromise()
            //  .then(res => <ITestFacilityRole[]> res.json().data)
            // .then(data => { return data; });
            .map(this.getJson)
            //.map(data => {
            //    console.log('---------getbyusing testdata---------', data);
            //    return data.$values
            //});
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${ProjectRoleApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    private getJson(response: Response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    }

    private checkErrors(response: Response): Response {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    }
}
