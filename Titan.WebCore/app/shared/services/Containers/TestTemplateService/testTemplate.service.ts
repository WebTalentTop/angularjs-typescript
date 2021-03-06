﻿import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { TestTemplateApiUrl} from '../../apiUrlConst/TestTemplate/TestTemplateApiUrls';
import { BaseService } from '../../base.service';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/throw';
import {UserProfileService} from "../../userProfile.service";
import {IUserProfile} from "../../definitions/IUserProfile";

@Injectable()
export class TestTemplateService extends BaseService {
    currentUser: IUserProfile;

    constructor(private http: Http, private userProfileService: UserProfileService) {
        super();
        this.currentUser = this.userProfileService.getCurrentUserProfile();
        this.headers.append("TenantId", this.currentUser.defaultTenantId);
        this.headers.append("UserId", this.currentUser.id);
    }

    postGridData(): Observable<any> {
        return this.http.post(`${TestTemplateApiUrl.gridApiUrl}`, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    getTestTemplates(): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getAllUrl}`, { headers: this.headers })
            .map(this.getJson)
            //.map(data => {
            //    console.log("Notification data --------", data);
            //    return data.$values
            //});
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }
    postGridDataFilter(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestTemplateApiUrl.gridApiUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAdd(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post(`${TestTemplateApiUrl.postCreatedUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);

        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postUpdate(filterBody): Observable<any> {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put(`${TestTemplateApiUrl.postUpdateUrl}`, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getById(id): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getByIdUrl}` + id, { headers: this.headers })
            .map(this.getJson)
            ;
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    }

    postAddProcedures(filterBody, testTemplateId): Observable<any> {
        return this.http.post(`${TestTemplateApiUrl.postAddTestTemplateProcedureUrl}` + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getTestTemplateProcedures(testTemplateId): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getTestTemplateProcedureUrl}` + testTemplateId, { headers: this.headers })
            .map(this.getJson);
    }

    postDeleteTestTemplateProcedure(testTemplateId, procedureId): Observable<any> {
        return this.http.put(`${TestTemplateApiUrl.postDeleteTestTemplateProcedureUrl}` + testTemplateId + '&procedureId=' + procedureId, null, { headers: this.headers })
            .map(this.getJson);
    }

    postAddTestRequirements(filterBody, testTemplateId): Observable<any> {
        return this.http.post(`${TestTemplateApiUrl.postAddTestTemplateRequirementUrl}` + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }

    getTestTemplateRequirements(testTemplateId): Observable<any> {
        return this.http.get(`${TestTemplateApiUrl.getTestTemplateRequirementUrl}` + testTemplateId, { headers: this.headers })
            .map(this.getJson);
    }

    postDeleteTestTemplateRequirement(testTemplateId, requirementId): Observable<any> {
        return this.http.put(`${TestTemplateApiUrl.postDeleteTestTemplateRequirementUrl}` + testTemplateId + '&requirementId=' + requirementId, null, { headers: this.headers })
            .map(this.getJson);
    }

    putTestTemplateProcedureDisplayOrder(filterBody, testTemplateId): Observable<any> {
        return this.http.put(`${TestTemplateApiUrl.putTestTemplateProcedureDisplayOrderUrl}` + testTemplateId, filterBody, { headers: this.headers })
            .map(this.getJson);
    }
}
