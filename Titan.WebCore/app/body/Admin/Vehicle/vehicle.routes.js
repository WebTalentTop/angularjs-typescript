"use strict";
var vehicle_component_1 = require('./vehicle.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../shared/services/auth/authGuard");
var routes = [
    { path: '', component: vehicle_component_1.VehicleComponent },
    { path: 'buildLevel', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/BuildLevels/buildLevel.module' },
    { path: 'equipment', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Equipment/equipment.module' },
    { path: 'equipmenttype', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EquipmentType/equipmenttype.module' },
    { path: 'titanRole', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TitanRole/titanRole.module' },
    { path: 'platform', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Platform/platform.module' },
    //{ path: 'titanUser', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TitanUser/titanUser.module' },
    { path: 'market', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Market/market.module' },
    { path: 'project', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Project/project.module' },
    { path: 'tenant', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Tenant/tenant.module' },
    { path: 'testfacility', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestFacility/testfacility.module' },
    { path: 'testVerificationMethod', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/testVerificationMethod.module' },
    { path: 'testStatus', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestStatus/testStatus.module' },
    //{ path: 'milestoneEvent', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneEvent/milestoneEvent.module' },
    { path: 'milestoneStatus', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneStatus/milestoneStatus.module' },
    { path: 'permission', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Permission/permission.module' },
    { path: 'projectStatus', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ProjectStatus/projectStatus.module' },
    { path: 'projectRole', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ProjectRole/projectRole.module' },
    // { path: 'schedule', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/schedule/schedule.module' },
    { path: 'shift', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Shift/shift.module' },
    { path: 'downTimeReason', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/DownTimeReason/downTimeReason.module' },
    // { path: 'entityField', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EntityField/entityField.module' },
    // { path: 'contact', canActivate: [AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Contact/contact.module' },
    { path: 'accessGroup', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/AccessGroup/accessGroup.module' },
    { path: 'access', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Access/access.module' },
    { path: 'role', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Role/role.module' },
    { path: 'milestone', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Milestone/milestone.module' },
    { path: 'milestoneCategory', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneCategory/milestoneCategory.module' },
    { path: 'milestoneType', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MilestoneType/milestoneType.module' },
    { path: 'grade', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Grade/grade.module' },
    { path: 'modelName', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ModelName/modelName.module' },
    { path: 'modelYear', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/ModelYear/modelYear.module' },
    { path: 'maintenanceFrequency', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/MaintenanceFrequency/maintenanceFrequency.module' },
    { path: 'vehicleType', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/VehicleType/vehicleType.module' },
    { path: 'requirementItemType', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/RequirementItemType/requirementItemType.module' },
    { path: 'sensorType', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/SensorType/sensorType.module' },
    { path: 'stepFrequency', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/StepFrequency/stepFrequency.module' },
    { path: 'stepType', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/StepType/stepType.module' },
    { path: 'testMode', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestMode/testMode.module' },
    { path: 'testType', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestType/testType.module' },
    { path: 'testRequirement', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestRequirement/testRequirement.module' },
    { path: 'testActivity', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestActivity/testActivity.module' },
    { path: 'priority', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Priority/priority.module' },
    { path: 'judgement', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Judgement/judgement.module' },
    { path: 'testStage', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestStage/testStage.module' },
    { path: 'testRole', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestRole/testRole.module' },
    { path: 'units', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Units/units.module' },
    { path: 'operatingHours', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/OperatingHours/operatingHours.module' },
    { path: 'holiday', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Holiday/holiday.module' },
    { path: 'engineCode', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/EngineCode/engineCode.module' },
    { path: 'step', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/Step/step.module' },
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
