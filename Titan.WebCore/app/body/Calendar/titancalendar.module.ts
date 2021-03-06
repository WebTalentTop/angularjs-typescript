﻿/// <reference path="../../shared/services/Containers/TestRequestService/testRequest.service.ts" />
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TitanCalendarComponent } from "./titancalendar.component";
import { FormsModule, FormBuilder, Validator } from '@angular/forms';
import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { BuildLevelService } from '../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { TestStatusService } from '../../shared/services/Containers/TestStatusService/testStatus.service';
import { TestRoleService } from '../../shared/services/testRole.service';
import { ProjectService } from '../../shared/services/Containers/ProjectService/project.service';
import { TestModeService } from '../../shared/services/testMode.service';
import { TestTypeService } from '../../shared/services/testType.service';
import { TestRequestService } from '../../shared/services/Containers/TestRequestService/testRequest.service';



import {
    BreadcrumbModule, DataTableModule, AutoCompleteModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, CheckboxModule,
    FileUploadModule, DialogModule, GrowlModule, RadioButtonModule, CalendarModule, TooltipModule, OverlayPanelModule, FieldsetModule, AccordionModule, ToolbarModule
} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { MultiSelectModule } from 'primeng/primeng';
import { ContextMenuModule } from 'primeng/primeng';

import calendarRoutes from "./titancalendar.routes";
import {TitanService} from "../../shared/services/titan.service";

import {CalendarService} from "../../shared/services/Containers/CalendarService/calendar.service";
import {TenantService} from "../../shared/services/tenant.service";
import {TestFacilityRoleService} from "../../shared/services/testFacilityRole.service";
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';



@NgModule({
    imports: [BreadcrumbModule, CommonModule, calendarRoutes, RouterModule, AutoCompleteModule,
        MultiSelectModule, FormsModule, DataTableModule, TabViewModule, ButtonModule,
        InputTextareaModule, DropdownModule, InputTextModule, PanelModule, FileUploadModule,
        DialogModule, GrowlModule, RadioButtonModule, CalendarModule, TooltipModule, OverlayPanelModule,
        ContextMenuModule, FieldsetModule, AccordionModule, ToolbarModule, CheckboxModule],

    providers: [BreadCrumbsService, TestFacilityService,  ProjectService, TestRoleService, TestStatusService, TestModeService, BuildLevelService,
        TestTypeService, TestRequestService, TitanService, CalendarService, TenantService, TestFacilityRoleService
    ],
    declarations: [TitanCalendarComponent]
})

export default class TitanCalendarModule { }