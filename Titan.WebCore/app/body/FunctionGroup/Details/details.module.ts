import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DetailsComponent } from "./details.component";
import { FormsModule} from '@angular/forms';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { FunctionGroupService } from '../../../shared/services/functionGroup.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { UserService } from '../../../shared/services/user.service';
import { TenantService } from '../../../shared/services/tenant.service';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';
import {

    DataTableModule, AutoCompleteModule, DataGridModule, TabViewModule, ButtonModule, CalendarModule, MultiSelectModule,
    CheckboxModule, InputTextareaModule, InputTextModule, PanelModule, DropdownModule, EditorModule,
    FileUploadModule, GrowlModule, DialogModule, PaginatorModule, SpinnerModule, BreadcrumbModule
} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import detailsRoutes from "./details.routes";




@NgModule({
    imports: [CommonModule,  DataGridModule,  RouterModule, AutoCompleteModule, MultiSelectModule, 
        CheckboxModule,  FormsModule, SpinnerModule, PaginatorModule, EditorModule, DataTableModule,
        TabViewModule, CalendarModule, ButtonModule, InputTextareaModule, DropdownModule, InputTextModule, PanelModule,
        FileUploadModule, GrowlModule, DialogModule, BreadcrumbModule, detailsRoutes],
    providers: [BreadCrumbsService, EquipmentTypeService, FunctionGroupService, TenantService, UserService, TestRequestSensorService],
    declarations: [DetailsComponent]
})

export default class DetailsModule { }
