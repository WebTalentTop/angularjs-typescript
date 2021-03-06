import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { EditComponent } from "./edit.component";
import { ProjectService} from '../../../../../shared/services/Containers/ProjectService/project.service';

import { ButtonModule, InputTextareaModule, InputTextModule, PanelModule } from 'primeng/primeng';
import { RouterModule } from "@angular/router";
import editRoutes from "./edit.routes";

@NgModule({
    imports: [CommonModule, FormsModule, InputTextareaModule, InputTextModule, PanelModule, ButtonModule, editRoutes],
    providers: [ProjectService],
    declarations: [EditComponent]
})

export default class EditModule{}