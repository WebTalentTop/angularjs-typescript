import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { ProjectApiUrl} from './apiUrlConst/projectApiUrls';
import {BaseService} from './base.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProjectService extends BaseService{
    headers: Headers = new Headers({
        'Content-Type': 'application/json'
    });

    body = {
        "locale": "en-us",
        "defaultLocale": "en-us",
        "PageNumber": 1,
        "PageSize": 5,
        "IsPaging": true
    };


    constructor(private http: Http) {
        super();
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }

    getProjectDetails(id): Observable<any> {
        return this.http.get(`${ProjectApiUrl.getProjectDetailsUrl}` + id)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    
    putProjectDetails(filterBody): Observable<any> {
        return this.http.put(`${ProjectApiUrl.putProjectDetailsUrl}`, filterBody)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err)) 
        // .map(this.getJson);
    }

    getBuildLevels(projectId): Observable<any> {
        return this.http.get(`${ProjectApiUrl.getBuildLevelsUrl}` + projectId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    getTorqueBooks(projectId, buildLevelId): Observable<any> {
        return this.http.get(`${ProjectApiUrl.getTorqueBooksByBuildLevelIdUrl }`+ projectId + "&buildLevelId=" + buildLevelId)
            .map(super.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postTorqueBook(torqueBookBody): Observable<any> {
        return this.http.post(`${ProjectApiUrl.postTorqueBookUrl}`, torqueBookBody)
            .map(super.getJson)
        //.chec
        // .catch(err => Observable.throw(err))
        // .map(this.getJson);
    }

    postGridData(): Observable<any> {
        return this.http.post(`${ProjectApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ProjectApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${ProjectApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson).catch(err => Observable.throw(err))
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${ProjectApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(err => Observable.throw(err))
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${ProjectApiUrl.getByIdUrl}/${id}`, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    //private getJson(response: Response) {
    //    console.log("In Data Service response.json() call: ", response.json());
    //    return response.json();
    //}

    //private checkErrors(response: Response): Response {
    //    if (response.status >= 200 && response.status <= 300) {
    //        return response;
    //    }
    //    else {
    //        var error = new Error(response.statusText);
    //        error['response'] = response;
    //        console.error(error);
    //        throw error;
    //    }
    //}
}