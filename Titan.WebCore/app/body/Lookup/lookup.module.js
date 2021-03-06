"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var lookup_component_1 = require("./lookup.component");
var lookup_service_1 = require('../../shared/services/lookup.service');
var primeng_1 = require('primeng/primeng');
var lookup_routes_1 = require("./lookup.routes");
var LookupModule = (function () {
    function LookupModule() {
    }
    LookupModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, primeng_1.DataTableModule, lookup_routes_1.default],
            providers: [lookup_service_1.LookupService],
            declarations: [lookup_component_1.LookupComponent]
        })
    ], LookupModule);
    return LookupModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = LookupModule;
