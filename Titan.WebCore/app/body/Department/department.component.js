"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var DepartmentComponent = (function () {
    function DepartmentComponent(dataService) {
        this.dataService = dataService;
        this.title = "Department Grid";
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
    }
    DepartmentComponent.prototype.ngOnInit = function () {
        var _this = this;
        var resData;
        this.dataService.postGridData()
            .subscribe(function (res) {
            resData = res;
            _this.gridData = res.Data;
            _this.cols = res.Configuration.Columns;
            _this.confInfo = res.Configuration;
        });
    };
    DepartmentComponent.prototype.loadFreshDepartments = function (event) {
        var _this = this;
        setTimeout(function () {
            _this.getGridFilterValues(event);
            var js = JSON.stringify(_this.gridFilter);
            _this.dataService.postGridDataFilter(JSON.parse(js))
                .subscribe(function (res) {
                var resData = res;
                _this.gridData = res.Data;
                _this.confInfo = res.Configuration;
                _this.cols = res.Configuration.Columns;
            });
        }, 250);
    };
    DepartmentComponent.prototype.getGridFilterValues = function (event) {
        var sortColumn = (typeof event.sortField === 'undefined') ? [] : [{ columnId: event.sortField, sortOrder: event.sortOrder }];
        var pageNumber = event.first === 0 ? 1 : (event.first / 5) + 1;
        var filters = [];
        var eFilters = event.filters;
        if (eFilters) {
            for (var key in eFilters) {
                var fil = eFilters[key].value;
                var matchMode = eFilters[key].matchMode;
                if (fil) {
                    filters.push({
                        columnId: key,
                        operator: matchMode,
                        value: fil
                    });
                }
            }
        }
        this.gridFilter = {
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: 5
        };
    };
    DepartmentComponent = __decorate([
        core_1.Component({
            selector: 'department',
            templateUrl: 'app/body/gridview.component.html'
        })
    ], DepartmentComponent);
    return DepartmentComponent;
}());
exports.DepartmentComponent = DepartmentComponent;
