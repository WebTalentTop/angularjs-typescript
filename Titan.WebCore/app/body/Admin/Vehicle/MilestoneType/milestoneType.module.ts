import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MilestoneTypeComponent } from "./milestoneType.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule, BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { MilestoneTypeService } from '../../../../shared/services/milestoneType.service';

import milestoneTypeRoutes from "./milestoneType.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, milestoneTypeRoutes, MessagesModule, GrowlModule, BreadcrumbModule],
    providers: [MilestoneTypeService, BreadCrumbsService],
    declarations: [MilestoneTypeComponent]
})

export default class MilestoneTypeModule{}