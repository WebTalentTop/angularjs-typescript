﻿import {FunctionGroupComponent} from "./functionGroup.component";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "../../shared/services/auth/authGuard";

const routes = [
    {path: '', component: FunctionGroupComponent},
    {path: 'details/:id', loadChildren: 'app/body/FunctionGroup/Details/details.module'},
    {path: 'add', loadChildren: 'app/body/FunctionGroup/Add/add.module'},
    //  { path: 'testRequest/details/:testRequestId/add/:testRequestId/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    //{ path: 'details/:taskId', canActivate: [AuthGuard], loadChildren: 'app/body/Task/Details/details.module' }

];

export default RouterModule.forChild(routes);
