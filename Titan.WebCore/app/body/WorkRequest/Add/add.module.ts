import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddComponent } from "./add.component";
import { FormsModule} from '@angular/forms';
import { TimeEntryService } from '../../../shared/services/timeEntry.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
//import { EquipmentTypeService } from '../../../shared/services/equipmentType.service';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';
import { TestTemplateService } from '../../../shared/services/Containers/TestTemplateService/testTemplate.service';
import { TestVerificationMethodService } from '../../../shared/services/testverificationMethod.service';
import { TestStatusService } from '../../../shared/services/Containers/TestStatusService/testStatus.service';
import { TestRoleService } from '../../../shared/services/testRole.service';
import { ProjectService } from '../../../shared/services/Containers/ProjectService/project.service';
import { TestModeService } from '../../../shared/services/testMode.service';
import { TestTypeService } from '../../../shared/services/testType.service';
import { BuildLevelService } from '../../../shared/services/Containers/BuildLevelService/buildLevel.service';
import { PriorityService } from '../../../shared/services/priority.service';
import { DepartmentService } from '../../../shared/services/department.service';
import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { GridModule } from '../../../shared/UIComponents/GridComponent/grid.module';
import { ConfirmationService } from 'primeng/primeng';
import { DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, InputTextModule, CalendarModule, CheckboxModule, DialogModule, MultiSelectModule, ConfirmDialogModule, DropdownModule, PanelModule, MessagesModule, GrowlModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import addRoutes from "./add.routes";

@NgModule({
    imports: [CommonModule, RouterModule, FormsModule, DataTableModule, TabViewModule, ButtonModule, InputTextareaModule, CheckboxModule, DialogModule, MultiSelectModule, ConfirmDialogModule, CalendarModule, GridModule, InputTextModule, PanelModule, DropdownModule, MessagesModule, GrowlModule, addRoutes],

    providers: [TimeEntryService, EquipmentTypeService, ConfirmationService, TestRequestSensorService, TestVerificationMethodService, BuildLevelService,PriorityService, ProjectService, TestRoleService, TestStatusService, TestModeService,
        TestTypeService, TestFacilityService, TestTemplateService, DepartmentService],
    declarations: [AddComponent]
})

export default class AddModule { }