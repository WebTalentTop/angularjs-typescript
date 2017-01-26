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
var TestStageApiUrls_1 = require('./apiUrlConst/TestStageApiUrls');
require('rxjs/Rx');
require('rxjs/add/operator/map');
require('rxjs/add/observable/throw');
var TestStageService = (function () {
    function TestStageService(http) {
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
    TestStageService.prototype.postGridData = function () {
        return this.http.post("" + TestStageApiUrls_1.TestStageApiUrl.gridApiUrl, this.body, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestStageService.prototype.postGridDataFilter = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestStageApiUrls_1.TestStageApiUrl.gridApiUrl, filterBody, { headers: this.headers })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestStageService.prototype.postAdd = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.post("" + TestStageApiUrls_1.TestStageApiUrl.postCreatedUrl, filterBody, { headers: this.headers })
            .map(this.getJson).catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
        //this.checkErrors)
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestStageService.prototype.postUpdate = function (filterBody) {
        console.log("-------- Post Customers FilterBody --------", filterBody);
        return this.http.put("" + TestStageApiUrls_1.TestStageApiUrl.postUpdateUrl, filterBody, { headers: this.headers })
            .map(this.getJson)
            .map(this.checkErrors)
            .catch(function (err) { return Observable_1.Observable.throw(err); })
            .map(this.getJson);
    };
    TestStageService.prototype.getById = function (id) {
        return this.http.get(TestStageApiUrls_1.TestStageApiUrl.getByIdUrl + "/" + id, { headers: this.headers })
            .map(this.getJson);
        //.catch(err => Observable.throw(err))
        //.map(this.getJson);
    };
    TestStageService.prototype.getJson = function (response) {
        console.log("In Data Service response.json() call: ", response.json());
        return response.json();
    };
    TestStageService.prototype.checkErrors = function (response) {
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
    TestStageService = __decorate([
        core_1.Injectable()
    ], TestStageService);
    return TestStageService;
}());
exports.TestStageService = TestStageService;