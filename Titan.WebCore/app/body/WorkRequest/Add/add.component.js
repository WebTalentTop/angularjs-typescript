"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var AddComponent = (function () {
    function AddComponent(route, dataService, testfacilityservice, service, testtemplateservice, testrequestsensorserice, router, testverificationmethodservice, projectservice, testmodeservice, teststatusservice, testroleservice, testtypeservice, buildlevelservice, priorityservice, confirmservice, departmentservice) {
        var _this = this;
        this.route = route;
        this.dataService = dataService;
        this.testfacilityservice = testfacilityservice;
        this.service = service;
        this.testtemplateservice = testtemplateservice;
        this.testrequestsensorserice = testrequestsensorserice;
        this.router = router;
        this.testverificationmethodservice = testverificationmethodservice;
        this.projectservice = projectservice;
        this.testmodeservice = testmodeservice;
        this.teststatusservice = teststatusservice;
        this.testroleservice = testroleservice;
        this.testtypeservice = testtypeservice;
        this.buildlevelservice = buildlevelservice;
        this.priorityservice = priorityservice;
        this.confirmservice = confirmservice;
        this.departmentservice = departmentservice;
        // qui
        this.gridData = [];
        this.confInfo = {};
        this.cols = [];
        this.gridFilter = {};
        this.IsThermoCouple = false;
        this.entityType = "TestFacility";
        this.entityId = this.id;
        this.filepath = "TestFacility";
        this.display = false;
        this.model = {
            id: '',
            isDeleted: false,
            name: '',
            createdOn: '',
            modifiedOn: '',
            userCreatedById: '',
            userInChargedId: '',
            userModifiedById: ''
        };
        this.uploadedFiles = [];
        this.route.params.subscribe(function (params) { return _this.id = params['id']; });
        this.entityId = this.id;
        console.log("---- TF Details ID Param -----", this.id);
    }
    AddComponent.prototype.ngAfterViewInit = function () {
    };
    AddComponent.prototype.handleChange = function (event) {
        console.log('tes---', event);
        console.log('-------targetid-------', event.originalEvent.target.innerText);
    };
    AddComponent.prototype.OK = function () {
        this.display = false;
    };
    AddComponent.prototype.confirm1 = function () {
        this.display = true;
    };
    AddComponent.prototype.ngOnInit = function () {
        //this.getTestStages();
        //this.getDepartments();
        //this.getTestFacilities();
        //this.getTestModes();
        //this.getTestVerificationMethods();
        //this.getTestTypes();
        this.getBuildLevels();
        this.getPriority();
        //this.getTestStatus();
        this.getProjectCodes();
        //    this.getTestTemplates();
        //    this.getTestRoles();
        //  this.getHourEntryByEntityIdentifierId();
        //    this.getDownTimeReasons();
        var resData;
        //this.testrequestsensorserice.GetAllTestRequestSensors(this.entityId,'')
        //    .subscribe(res => {
        //        this.sensorRequests = res.result;
        //        //  resData = res;
        //        //this.gridData = res.Data;
        //        //this.cols = res.Configuration.Columns;
        //        ////console.log("-------- Cols --------", this.cols);
        //        //this.confInfo = res.Configuration;
        //        //console.log("------- Configuration --------", this.confInfo);
        //    });
        //this.dataService.GetProjectId(this.id)
        //    .subscribe(res => {
        //        this.projectId = res.$values;
        //        //this.formConfiguration = res.formConfiguration;
        //        //this.formObject = res.formObject;
        //        //this.model = res.formObject;
        //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
        //        //console.log("----- Result of formObject -----", this.model);
        //    });
        //this.dataService.GetTrackingListByEntityId(this.id)
        //    .subscribe(res => {
        //        this.TrackingList = res.$values;
        //    });
    };
    AddComponent.prototype.onTestStageChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestStageId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestVerificationMethodChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestVerificationMethods = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestFacilityChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestFacilities = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onDownTimeReasonChange = function (event) {
        console.log('------event------------', event);
        this.selectedDownTimeReasonId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestRoleChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestRoles = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onDepartmentChange = function (event) {
        console.log('------event------------', event);
        this.selectedDepartment = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestTemplateChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestTemplates = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestStatusChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestStatuses = (event.value);
        //this.dataService.getFilteredEvents(this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses, this.selectedTestStatuses)
        //    .subscribe(TestFacilityEvents => {
        //        console.log('-----------  TestFacilitiesEvents------------------', TestFacilityEvents);
        //        //this.TestFacilityEvents = TestFacilityEvents;
        //    });
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onBuildLevelChange = function (event) {
        console.log('------event------------', event);
        this.selectedBuildLevels = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onPriorityChange = function (event) {
        console.log('------event------------', event);
        this.selectedPriority = (event.value);
    };
    AddComponent.prototype.onProjectCodeChange = function (event) {
        console.log('------event------------', event);
        this.selectedProjectCodes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestModeChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestModes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onTestTypeChange = function (event) {
        console.log('------event------------', event);
        this.selectedTestTypes = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.onHourEntryChange = function (event) {
        console.log('------event------------', event);
        this.selectedTimeEntryTypeId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);
    };
    AddComponent.prototype.getTestStages = function () {
        var _this = this;
        //    userRoles
        this.dataService.getTestStages().subscribe(function (response) {
            _this.testStages = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (var _i = 0, response_1 = response; _i < response_1.length; _i++) {
                    var template = response_1[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testStages = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestFacilities = function () {
        var _this = this;
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(function (response) {
            _this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
                    value: null
                });
                for (var _i = 0, response_2 = response; _i < response_2.length; _i++) {
                    var template = response_2[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testFacilities = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestRoles = function () {
        var _this = this;
        //    userRoles
        this.testroleservice.getTestRoles().subscribe(function (response) {
            _this.testRoles = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Role",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testRoles = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getDepartments = function () {
        var _this = this;
        //    userRoles
        this.departmentservice.getDepartments().subscribe(function (response) {
            _this.departments = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Department",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.departments = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestStatus = function () {
        var _this = this;
        //    userRoles
        this.teststatusservice.getTestStatus().subscribe(function (response) {
            _this.testStatus = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Status",
                    value: null
                });
                for (var _i = 0, response_3 = response; _i < response_3.length; _i++) {
                    var template = response_3[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testStatus = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestVerificationMethods = function () {
        var _this = this;
        //    userRoles
        this.testverificationmethodservice.getTestVerificationMethods().subscribe(function (response) {
            _this.testVerificationMethods = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Verification Method",
                    value: null
                });
                for (var _i = 0, response_4 = response; _i < response_4.length; _i++) {
                    var template = response_4[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testVerificationMethods = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestModes = function () {
        var _this = this;
        //    userRoles
        this.testmodeservice.getAllTestModes().subscribe(function (response) {
            _this.testAllModes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
                for (var _i = 0, _a = response.result; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testAllModes = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestTypes = function () {
        var _this = this;
        //    userRoles
        this.testtypeservice.getAllTestTypes().subscribe(function (response) {
            _this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
                for (var _i = 0, _a = response.result; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.label,
                        value: template.value
                    };
                    resultMap.push(temp);
                }
                _this.testTypes = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getProjectCodes = function () {
        var _this = this;
        //    userRoles
        this.projectservice.getProjectCodes().subscribe(function (response) {
            _this.projectCodes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--------Select-------",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.code,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.projectCodes = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getTestTemplates = function () {
        var _this = this;
        //    userRoles
        this.testtemplateservice.getTestTemplates().subscribe(function (response) {
            _this.testTemplates = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Template",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.testTemplates = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getBuildLevels = function () {
        var _this = this;
        //    userRoles
        this.buildlevelservice.getBuildLevels().subscribe(function (response) {
            _this.buildLevels = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Build Level",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.buildLevels = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getPriority = function () {
        var _this = this;
        //    userRoles
        this.priorityservice.getPriority().subscribe(function (response) {
            _this.priority = [];
            if (response.isSuccess) {
                var result = response.result;
                _this.priority = result.map(function (x) {
                    return { label: x.name, value: x.id };
                });
            }
        });
    };
    AddComponent.prototype.getDownTimeReasons = function () {
        var _this = this;
        //    userRoles
        this.dataService.GetAllDownTimeReasons().subscribe(function (response) {
            _this.downTimeReasons = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (var _i = 0, _a = response.$values; _i < _a.length; _i++) {
                    var template = _a[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.downTimeReasons = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.getHourEntryByEntityIdentifierId = function () {
        var _this = this;
        //    userRoles
        this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(function (response) {
            _this.hourEntries = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (var _i = 0, response_5 = response; _i < response_5.length; _i++) {
                    var template = response_5[_i];
                    var temp = {
                        label: template.name,
                        value: template.id
                    };
                    resultMap.push(temp);
                }
                _this.hourEntries = resultMap;
            }
            console.log(response);
        });
    };
    AddComponent.prototype.onWorkRequestSubmit = function (formRef) {
        var _this = this;
        var formWorkRequestData = {
            //   Id : ' ' ,
            //TestNumber: this.number,
            VehicleNumber: 'D3CEE9F2-3178-4A9A-8266-09E2FD06080F',
            Priority: 'D3CEE9F2-3178-4A9A-8266-09E2FD06080F',
            PriorityReason: this.priorityReason,
            PersonInCharge: 'D3CEE9F2-3178-4A9A-8266-09E2FD06080F',
            // TenantId: ' ',
            //   TestTemplateId: this.selectedTestTemplates,
            //   TestFacilityId: this.selectedTestFacilities,
            ProjectCode: this.selectedProjectCodes,
            BuildLevelId: this.selectedBuildLevels,
            PriorityId: this.selectedPriority,
            //VerificationMethodId: this.selectedTestVerificationMethods,
            StartDate: this.plannedStartDate,
            EndDate: this.plannedEndDate
        };
        //if (this.number == null || this.number == "") {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please enter Test Number', detail: '' });
        //    return null;
        //}
        //if (this.selectedProjectCodes == null || this.selectedProjectCodes == undefined) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Project Code', detail: '' });
        //    return null;
        //}
        //if (this.selectedTestFacilities == null || this.selectedTestFacilities == undefined) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Test Facility', detail: '' });
        //    return null;
        //}
        //if (this.selectedBuildLevels == null || this.selectedBuildLevels == undefined) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Build Levels', detail: '' });
        //    return null;
        //}
        //if (this.selectedTestTemplates == null || this.selectedTestTemplates == undefined) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Test Template', detail: '' });
        //    return null;
        //}
        //if (this.selectedTestVerificationMethods == null || this.selectedTestVerificationMethods == undefined) {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Test Verification Method' });
        //    return null;
        //}
        //if (this.plannedStartDate == null || this.plannedStartDate == "") {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Planned Start Date', detail: '' });
        //    return null;
        //}
        //if (this.dueDate == null || this.dueDate == "") {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Due Date', detail: '' });
        //    return null;
        //}
        //if (this.plannedEndDate == null || this.plannedEndDate == "") {
        //    this.msgs = [];
        //    this.msgs.push({ severity: 'error', summary: 'Please select Planned End Date', detail: '' });
        //    return null;
        //}
        this.testrequestsensorserice.postCreateWorkRequest(formWorkRequestData).subscribe(function (res) {
            console.log('-----------testrequestcreated--------', res);
            //  this.TrackingList = res.$values;
            if (res.isSuccess) {
                _this.router.navigate(['workrequest/']);
            }
        });
    };
    AddComponent.prototype.navigateDetails = function (id) {
        this.router.navigate(['testrequest/sensor/details/', id]);
    };
    AddComponent = __decorate([
        core_1.Component({
            selector: 'add-testrequest',
            templateUrl: 'app/body/WorkRequest/Add/add.component.html'
        })
    ], AddComponent);
    return AddComponent;
}());
exports.AddComponent = AddComponent;
