﻿
import { RouterModule } from "@angular/router";
import { AuthGuard } from "../shared/services/auth/authGuard";
import { LoginComponent } from "./Auth/login.component";
import { ErrorComponent } from "./Error/error.component";


const routes = [
    { path: 'department', canActivate: [AuthGuard], loadChildren: 'app/body/department/department.module' },
    { path: 'equipment', canActivate: [AuthGuard], loadChildren: 'app/body/equipment/equipment.module' },
    { path: 'equipmenttype', canActivate: [AuthGuard], loadChildren: 'app/body/equipmenttype/equipmenttype.module' },
    { path: 'user',  loadChildren: 'app/body/User/user.module' },
    { path: 'tenant', loadChildren: 'app/body/Tenant/tenant.module' },
    { path: 'functionGroup', loadChildren: 'app/body/FunctionGroup/functionGroup.module' },
    { path: 'project', canActivate: [AuthGuard], loadChildren: 'app/body/project/project.module' },
    { path: 'admin', canActivate: [AuthGuard], loadChildren: 'app/body/admin/admin.module' },
    { path: 'calendar', canActivate: [AuthGuard], loadChildren: 'app/body/calendar/titancalendar.module' },
    { path: 'lookup', canActivate: [AuthGuard], loadChildren: 'app/body/lookup/lookup.module' },
    { path: 'catalog', canActivate: [AuthGuard], loadChildren: 'app/body/Catalog/catalog.module' },
    { path: 'problemtracking', canActivate: [AuthGuard], loadChildren: 'app/body/ProblemTracking/problemtracking.module' },
    { path: 'workrequest', canActivate: [AuthGuard], loadChildren: 'app/body/WorkRequest/workrequest.module' },
    //{ path: 'testcatalog', canActivate: [AuthGuard], loadChildren: 'app/body/TestCatalog/testcatalog.module' },
    { path: 'testtempalte', canActivate: [AuthGuard], loadChildren: 'app/body/TestTemplate/testTemplate.module' },
    { path: 'testFacilities', canActivate: [AuthGuard], loadChildren: 'app/body/TestFacilities/testFacilities.module' },
    { path: 'step', canActivate: [AuthGuard], loadChildren: 'app/body/Step/step.module' },
    { path: 'procedure', canActivate: [AuthGuard], loadChildren: 'app/body/Procedure/procedure.module' },
    { path: 'testRequest', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/testRequest.module' },
    { path: 'task', loadChildren: 'app/body/Task/task.module' },
    { path: 'vehicle', canActivate: [AuthGuard], loadChildren: 'app/body/Vehicle/vehicle.module' },
    { path: 'torquesheet', canActivate: [AuthGuard], loadChildren: 'app/body/TorqueSheet/torque-sheet.module' },
    { path: 'testTemplate', canActivate: [AuthGuard], loadChildren: 'app/body/TestTemplate/testTemplate.module' },
    { path: 'login/:id', component: LoginComponent },
    { path: 'login', component: LoginComponent },
    { path: 'error/:statusCode', component: ErrorComponent },
    { path: 'error', component: ErrorComponent }
    //, canActivate:[AuthGuard], },
];

export default RouterModule.forChild(routes);
