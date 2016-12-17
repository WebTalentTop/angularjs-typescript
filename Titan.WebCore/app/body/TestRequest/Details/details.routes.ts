import { DetailsComponent } from "./details.component";
import { RouterModule } from "@angular/router";

const routes = [
    { path: '', component: DetailsComponent },
    { path: 'add/:id', loadChildren: 'app/body/TestRequest/Sensor/add.module' },
    { path: 'details/:id/:entityId', loadChildren: 'app/body/TestRequest/Sensor/Details/details.module' },
];

export default RouterModule.forChild(routes);