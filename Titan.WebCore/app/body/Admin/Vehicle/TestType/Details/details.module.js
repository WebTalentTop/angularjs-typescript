"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var forms_1 = require('@angular/forms');
var details_component_1 = require("./details.component");
var testType_service_1 = require('../../../../../shared/services/testType.service');
var primeng_1 = require('primeng/primeng');
var details_routes_1 = require("./details.routes");
var DetailsModule = (function () {
    function DetailsModule() {
    }
    DetailsModule = __decorate([
        core_1.NgModule({
            imports: [common_1.CommonModule, forms_1.FormsModule, primeng_1.DataTableModule, primeng_1.InputTextareaModule, primeng_1.ToggleButtonModule, primeng_1.InputTextModule, primeng_1.PanelModule,
                primeng_1.ButtonModule, primeng_1.DropdownModule, primeng_1.CalendarModule, primeng_1.GrowlModule, details_routes_1.default],
            providers: [testType_service_1.TestTypeService],
            declarations: [details_component_1.DetailsComponent],
            exports: [details_component_1.DetailsComponent]
        })
    ], DetailsModule);
    return DetailsModule;
}());
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DetailsModule;
