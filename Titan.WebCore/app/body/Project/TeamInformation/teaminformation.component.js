"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var TeamInformationComponent = (function () {
    function TeamInformationComponent(route, router, service) {
        this.route = route;
        this.router = router;
        this.service = service;
    }
    TeamInformationComponent.prototype.ngOnInit = function () {
    };
    TeamInformationComponent.prototype.onAddTorqueSheetTemplate = function () {
        this.displayAddTorqueSheetTemplate = true;
        this.spreadInstance = new GC.Spread.Sheets.Workbook(document.getElementById("spreadContainer"));
        // Get active sheet in spread instance
        var activeSheet = this.spreadInstance.getActiveSheet();
    };
    TeamInformationComponent.prototype.onAddTorqueSheetTemplateConfirmation = function () {
        var _this = this;
        var data = {
            name: this.TemplateName,
            contents: JSON.stringify(this.spreadInstance.toJSON())
        };
        this.service.postTorqueSheetTemplate(data).subscribe(function (res) {
            _this.closeTemplateWindow();
        });
        //this.spreadInstance = null;
    };
    TeamInformationComponent.prototype.onAddTorqueSheetTemplateCancel = function () {
        this.closeTemplateWindow();
    };
    TeamInformationComponent.prototype.closeTemplateWindow = function () {
        $("#spreadContainer").html("");
        this.displayAddTorqueSheetTemplate = false;
        this.spreadInstance = null;
    };
    __decorate([
        core_1.ViewChild("spreadContainer")
    ], TeamInformationComponent.prototype, "spreadContainer", void 0);
    TeamInformationComponent = __decorate([
        core_1.Component({
            selector: 'teaminfo-template',
            templateUrl: 'app/body/Project/TeamInformation/teaminformation.component.html'
        })
    ], TeamInformationComponent);
    return TeamInformationComponent;
}());
exports.TeamInformationComponent = TeamInformationComponent;
