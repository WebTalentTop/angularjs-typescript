import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FunctionGroupComponent } from "./functionGroup.component";
import { TenantService } from '../../shared/services/tenant.service';
import { UserProfileService } from '../../shared/services/userProfile.service';
import { IUserProfile } from '../../shared/services/definitions/IUserProfile';
import { GridModule } from '../../shared/UIComponents/GridComponent/grid.module';
import { BreadcrumbModule, DataTableModule, TabViewModule, InputTextModule, InputTextareaModule, PanelModule, MessagesModule, ButtonModule, DropdownModule } from 'primeng/primeng';
import { BreadCrumbsService } from '../../shared/services/breadCrumbs/breadCrumbs.service';
import {DialogModule, EditorModule,SharedModule} from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { TestFacilityService } from '../../shared/services/Containers/TestFacilityService/testFacility.service';
import { UserService } from '../../shared/services/user.service';
import functionGroupRoutes from "./functionGroup.routes";

@NgModule({

    imports: [BreadcrumbModule, DialogModule, EditorModule, SharedModule, CommonModule, RouterModule, 
    DataTableModule, PanelModule, ButtonModule, InputTextModule, DropdownModule, MessagesModule, 
    InputTextareaModule, TabViewModule, functionGroupRoutes],
    providers: [BreadCrumbsService, TestFacilityService, TenantService, UserProfileService, UserService],

    declarations: [FunctionGroupComponent]
})

export default class FunctionGroupModule{}
