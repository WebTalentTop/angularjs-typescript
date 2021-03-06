import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { TestFacilityRoleApiUrl} from './apiUrlConst/testFacilityRoleApiUrl';
import {ITestFacilityRole} from './definitions/ITestFacilityRole';
import {DataGridModule} from 'primeng/primeng';
import 'rxjs/add/operator/toPromise';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import { Observable } from 'rxjs/Observable';
import {UserProfileService} from "./userProfile.service";
import {IUserProfile} from "./definitions/IUserProfile";

@Injectable()
export class TestFacilityRoleService {
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

    getByTestFacilityId(id): Observable<ITestFacilityRole[]> {
        return this.http.get(`${TestFacilityRoleApiUrl.getTestFacilityUsersByTestFacilityIdUrl}/${id}`, { headers: this.headers })
         .map(this.getJson)
         .map(data=> {
             return data.$values
            });
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
