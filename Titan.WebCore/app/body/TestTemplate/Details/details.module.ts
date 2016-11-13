﻿import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestTypeService} from './../../../shared/services/testtype.services';
import { TestModeService } from './../../../shared/services/testmode.services';
import { TestTemplateService} from './../../../shared/services/testtemplate.services';

import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule  } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, DropdownModule, InputTextareaModule, InputTextModule, PanelModule, detailsRoutes],
    providers: [TestTemplateService, TestTypeService, TestModeService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }