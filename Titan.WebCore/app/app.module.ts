﻿

import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HeaderModule } from './header/header.module';
import { TitanUserProfileService } from './shared/services/titanUserProfile.service';
import { LoggerService } from './shared/services/logger/logger.service';
import { EntityEventService } from './shared/services/entityEvent.service';
import { FormSchemaService } from './shared/services/formSchema.service';
import { FormSchemaCategoryService } from './shared/services/formSchemaCategory.service';
import { FormSchemaFieldDataTypeService } from './shared/services/formSchemaFieldDataType.service';
import { FooterModule } from './footer/footer.module';
import { SidenavModule } from './sidenav/sidenav.module';
import { AppComponent } from './app.component';
//import { routing }   from './app.routing.3';
//import { DataTableModule } from 'primeng/primeng';
import { DataGridModule } from 'primeng/primeng';
import { enableProdMode } from '@angular/core';
//import { DataTableModule } from 'primeng/primeng';
//import {AccordionModule} from 'primeng/primeng';
import {AutoCompleteModule} from 'primeng/primeng';
//import {BreadcrumbModule} from 'primeng/primeng';
//import {ButtonModule} from 'primeng/primeng';
//import {CalendarModule} from 'primeng/primeng';
//import {CarouselModule} from 'primeng/primeng';
//import {ChartModule} from 'primeng/primeng';
//import {CheckboxModule} from 'primeng/primeng';
//import {CodeHighlighterModule} from 'primeng/primeng';
//import {ConfirmDialogModule} from 'primeng/primeng';
//import {SharedModule} from 'primeng/primeng';
//import {ContextMenuModule} from 'primeng/primeng';
//import {DataGridModule} from 'primeng/primeng';
//import {DataListModule} from 'primeng/primeng';
//import {DataScrollerModule} from 'primeng/primeng';
import { DataTableModule } from 'primeng/primeng';
import { DialogModule } from 'primeng/primeng';
//import {DragDropModule} from 'primeng/primeng';
import { DropdownModule } from 'primeng/primeng';
//import {EditorModule} from 'primeng/primeng';
//import {FieldsetModule} from 'primeng/primeng';
//import {FileUploadModule} from 'primeng/primeng';
//import {GalleriaModule} from 'primeng/primeng';
//import {GMapModule} from 'primeng/primeng';
//import {GrowlModule} from 'primeng/primeng';
//import {InputMaskModule} from 'primeng/primeng';
//import {InputSwitchModule} from 'primeng/primeng';
//import {InputTextModule} from 'primeng/primeng';
//import {InputTextareaModule} from 'primeng/primeng';
//import {LightboxModule} from 'primeng/primeng';
//import {ListboxModule} from 'primeng/primeng';
//import {MegaMenuModule} from 'primeng/primeng';
//import {MenuModule} from 'primeng/primeng';
//import {MenubarModule} from 'primeng/primeng';
//import {MessagesModule} from 'primeng/primeng';
//import {MultiSelectModule} from 'primeng/primeng';
//import {OrderListModule} from 'primeng/primeng';
//import {OverlayPanelModule} from 'primeng/primeng';
//import {PaginatorModule} from 'primeng/primeng';
//import {PanelModule} from 'primeng/primeng';
//import {PanelMenuModule} from 'primeng/primeng';
//import {PasswordModule} from 'primeng/primeng';
//import {PickListModule} from 'primeng/primeng';
//import {ProgressBarModule} from 'primeng/primeng';
//import {RadioButtonModule} from 'primeng/primeng';
//import {RatingModule} from 'primeng/primeng';
//import {ScheduleModule} from 'primeng/primeng';
//import {SelectButtonModule} from 'primeng/primeng';
//import {SlideMenuModule} from 'primeng/primeng';
//import {SliderModule} from 'primeng/primeng';
//import {SpinnerModule} from 'primeng/primeng';
//import {SplitButtonModule} from 'primeng/primeng';
//import {TabMenuModule} from 'primeng/primeng';
//import {TabViewModule} from 'primeng/primeng';
//import {TerminalModule} from 'primeng/primeng';
//import {TieredMenuModule} from 'primeng/primeng';
//import {ToggleButtonModule} from 'primeng/primeng';
//import {ToolbarModule} from 'primeng/primeng';
//import {TooltipModule} from 'primeng/primeng';
//import {TreeModule} from 'primeng/primeng';
//import {TreeTableModule} from 'primeng/primeng';

//import {DashboardDemo} from './demo/view/dashboarddemo';
//import {SampleDemo} from './demo/view/sampledemo';
//import {FormsDemo} from './demo/view/formsdemo';
//import {DataDemo} from './demo/view/datademo';
//import {PanelsDemo} from './demo/view/panelsdemo';
//import {OverlaysDemo} from './demo/view/overlaysdemo';
//import {MenusDemo} from './demo/view/menusdemo';
//import {MessagesDemo} from './demo/view/messagesdemo';
//import {MiscDemo} from './demo/view/miscdemo';
//import {EmptyDemo} from './demo/view/emptydemo';
//import {ChartsDemo} from './demo/view/chartsdemo';
//import {FileDemo} from './demo/view/filedemo';
//import {UtilsDemo} from './demo/view/utilsdemo';
//import {Documentation} from './demo/view/documentation';

//import {CarService} from './demo/service/carservice';
//import {CountryService} from './demo/service/countryservice';
//import {EventService} from './demo/service/eventservice';
//import {NodeService} from './demo/service/nodeservice';
import BodyModule from './body/body.module';
import appRoutes from "./app.routing";
import {RouterModule} from "@angular/router";
import {AuthComponent} from "./Auth/auth.component";
import {AuthGuard} from "./shared/services/auth/authGuard";
import {FakePageComponent} from "./fakepage/fakepage.component";
import {UserProfileService} from "./shared/services/userProfile.service";
//enableProdMode();


@NgModule({
    imports: [
        BrowserModule,
        HttpModule,
        FormsModule,
        HeaderModule,
        DataGridModule,
        DataTableModule,

        BodyModule,
        //FooterModule,
        //SidenavModule,
        //AccordionModule,
        AutoCompleteModule,
        //BreadcrumbModule,
        //ButtonModule,
        //CalendarModule,
        //CarouselModule,
        //ChartModule,
        //CheckboxModule,
        //CodeHighlighterModule,
        //ConfirmDialogModule,
        //SharedModule,
        //ContextMenuModule,
        //DataGridModule,
        //DataListModule,
        //DataScrollerModule,
        //DataTableModule,
        DialogModule,
        //DragDropModule,
        DropdownModule,
        //EditorModule,
        //FieldsetModule,
        //FileUploadModule,
        //GalleriaModule,
        //GMapModule,
        //GrowlModule,
        //InputMaskModule,
        //InputSwitchModule,
        //InputTextModule,
        //InputTextareaModule,
        //LightboxModule,
        //ListboxModule,
        //MegaMenuModule,
        //MenuModule,
        //MenubarModule,
        //MessagesModule,
        //MultiSelectModule,
        //OrderListModule,
        //OverlayPanelModule,
        //PaginatorModule,
        //PanelModule,
        //PanelMenuModule,
        //PasswordModule,
        //PickListModule,
        //ProgressBarModule,
        //RadioButtonModule,
        //RatingModule,
        //ScheduleModule,
        //SelectButtonModule,
        //SlideMenuModule,
        //SliderModule,
        //SpinnerModule,
        //SplitButtonModule,
        //TabMenuModule,
        //TabViewModule,
        //TerminalModule,
        //TieredMenuModule,
        //ToggleButtonModule,
        //ToolbarModule,
        //TooltipModule,
        //TreeModule,
        //TreeTableModule,
        RouterModule.forRoot(appRoutes)
    ],//, DataTableModule],
    declarations: [
        AppComponent,
        AuthComponent
        //DashboardDemo,
        //SampleDemo,
        //FormsDemo,
        //DataDemo,
        //PanelsDemo,
        //OverlaysDemo,
        //MenusDemo,
        //MessagesDemo,
        //MessagesDemo,
        //MiscDemo,
        //ChartsDemo,
        //EmptyDemo,
        //FileDemo,
        //UtilsDemo,
        //Documentation
    ],
    //providers: [DataService],

    providers: [AuthGuard,TitanUserProfileService, LoggerService,EntityEventService, FormSchemaService, FormSchemaCategoryService, FormSchemaFieldDataTypeService, UserProfileService],

    bootstrap: [AppComponent]
})
export class AppModule { }