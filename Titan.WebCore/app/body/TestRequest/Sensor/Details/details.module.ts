﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule } from '@angular/forms';
import { TestRequestSensorService } from '../../../../shared/services/testrequestsensor.service';
import { EquipmentTypeService } from '../../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
//import { TestFacilityService } from '../../../shared/services/testFacility.service';
//import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { TestFacilityAttachmentService } from '../../../../shared/services/Containers/TestFacilityAttachmentService/testFacilityAttachment.service';
import { EditorModule, SharedModule, DataTableModule, AutoCompleteModule, TabViewModule, ButtonModule, CalendarModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, FileUploadModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import {MultiSelectModule} from 'primeng/primeng';
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [EditorModule, SharedModule, CommonModule, RouterModule, AutoCompleteModule,MultiSelectModule ,FormsModule, DataTableModule, TabViewModule, CalendarModule,ButtonModule, InputTextareaModule, DropdownModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, detailsRoutes],
    providers: [TestRequestSensorService, EquipmentTypeService, TestFacilityAttachmentService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
