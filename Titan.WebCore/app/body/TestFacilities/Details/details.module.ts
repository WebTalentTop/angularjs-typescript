﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestFacilityService } from '../../../shared/services/testFacility.service';
import { TestFacilityRoleService } from '../../../shared/services/testFacilityRole.service';
import { TestFacilityAttachmentService } from '../../../shared/services/testFacilityAttachment.service';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, GrowlModule, detailsRoutes],
    providers: [TestFacilityService, TestFacilityRoleService, TestFacilityAttachmentService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }