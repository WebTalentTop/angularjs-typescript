"use strict";
var testVerificationMethod_component_1 = require('./testVerificationMethod.component');
var router_1 = require("@angular/router");
var authGuard_1 = require("../../../../shared/services/auth/authGuard");
var routes = [
    { path: '/:page', component: testVerificationMethod_component_1.TestVerificationMethodComponent },
    { path: '', component: testVerificationMethod_component_1.TestVerificationMethodComponent },
    { path: 'add', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/Add/add.module' },
    { path: 'details/:id', canActivate: [authGuard_1.AuthGuard], loadChildren: 'app/body/Admin/Vehicle/TestVerificationMethod/Details/details.module' }
];
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = router_1.RouterModule.forChild(routes);
