"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Observable_1 = require('rxjs/Observable');
var ProblemtrackingApiUrls_1 = require('./apiUrlConst/ProblemtrackingApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var ProblemtrackingService = (function () {
    function ProblemtrackingService(http) {
        this.http = http;
        this.headers = new http_1.Headers({
            'Content-Type': 'application/json'
        });
        this.body = {
            "locale": "en-us",
            "defaultLocale": "en-us",
            "PageNumber": 1,
            "PageSize": 15,
            "IsPaging": true
        };
        this.headers.append("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");
    }
    ProblemtrackingService.prototype.postGridData = function () {
        return this.http.post("" + ProblemtrackingApiUrls_1.ProblemtrackingApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProblemtrackingService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + ProblemtrackingApiUrls_1.ProblemtrackingApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProblemtrackingService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + ProblemtrackingApiUrls_1.ProblemtrackingApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProblemtrackingService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + ProblemtrackingApiUrls_1.ProblemtrackingApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    ProblemtrackingService.prototype.getById = function (id) {
        return this.http.get(ProblemtrackingApiUrls_1.ProblemtrackingApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    ProblemtrackingService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    ProblemtrackingService.prototype.checkErrors = function (response) {
        if (response.status >= 200 && response.status <= 300) {
            return response;
        }
        else {
            var error = new Error(response.statusText);
            error['response'] = response;
            console.error(error);
            throw error;
        }
    };
    ProblemtrackingService = __decorate([
        core_1.Injectable()
    ], ProblemtrackingService);
    return ProblemtrackingService;
}());
exports.ProblemtrackingService = ProblemtrackingService;
