"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var buildLevel_component_1 = require("./buildLevel.component");
var primeng_1 = require('primeng/primeng');
var grid_module_1 = require('../../../../shared/UIComponents/GridComponent/grid.module');
var breadCrumbs_service_1 = require('../../../../shared/services/breadCrumbs/breadCrumbs.service');
var buildLevel_service_1 = require('../../../../shared/services/buildLevel.service');
var buildLevel_routes_1 = require("./buildLevel.routes");
var BuildLevelModule = (function () {
    function BuildLevelModule() {
    }
    BuildLevelModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, grid_module_1.GridModule, buildLevel_routes_1.default, primeng_1.BreadcrumbModule, primeng_1.MessagesModule],
            providers: [buildLevel_service_1.BuildLevelService, breadCrumbs_service_1.BreadCrumbsService],
            declarations: [buildLevel_component_1.BuildLevelComponent]
        })
    ], BuildLevelModule);
    return BuildLevelModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = BuildLevelModule;
