﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule } from '@angular/forms';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
//import { TestFacilityService } from '../../../shared/services/testFacility.service';
//import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachment.service';
import { DataTableModule, AutoCompleteModule, TabViewModule, ButtonModule, CalendarModule, InputTextareaModule, EditorModule, CheckboxModule, DialogModule, InputTextModule, PanelModule, DropdownModule, FileUploadModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import {MultiSelectModule} from 'primeng/primeng';
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, AutoCompleteModule, MultiSelectModule, FormsModule, DataTableModule, EditorModule, CheckboxModule, DialogModule, TabViewModule, CalendarModule, ButtonModule, InputTextareaModule, DropdownModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, detailsRoutes],
    providers: [TestRequestSensorService, EquipmentTypeService, TestFacilityAttachmentService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }