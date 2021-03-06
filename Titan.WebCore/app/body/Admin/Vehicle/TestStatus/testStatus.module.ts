import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TestStatusComponent } from "./testStatus.component";
import { ButtonModule, DataTableModule, MessagesModule, GrowlModule,BreadcrumbModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import { GridModule} from '../../../../shared/UIComponents/GridComponent/grid.module';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';
import { TestStatusService } from '../../../../shared/services/Containers/TestStatusService/testStatus.service';

import testStatusRoutes from "./testStatus.routes";

@NgModule({
    imports: [ButtonModule, CommonModule, DataTableModule, GridModule, testStatusRoutes,BreadcrumbModule, MessagesModule, GrowlModule],
    providers: [TestStatusService,BreadCrumbsService],
    declarations: [TestStatusComponent]
})

export default class TestStatusModule{}