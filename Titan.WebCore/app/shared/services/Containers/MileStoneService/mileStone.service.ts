import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MilestoneApiUrl} from '../../apiUrlConst/MileStone/mileStoneApiUrls';

import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {IUserProfile} from "../../definitions/IUserProfile";
import {UserProfileService} from "../../userProfile.service";

@Injectable()
export class MilestoneService {
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

    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    postGridData(): Observable<any> {
        return this.http.post(`${MilestoneApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MilestoneApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${MilestoneApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            // .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        //console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${MilestoneApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    getAll(): Observable<any> {
        return this.http.get(
            `${MilestoneApiUrl.getAllUrl}`,
            {headers: this.headers})
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${MilestoneApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    private getJson(response: Response) {
        //console.log("In Data Service response.json() call: ", response.json());
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
