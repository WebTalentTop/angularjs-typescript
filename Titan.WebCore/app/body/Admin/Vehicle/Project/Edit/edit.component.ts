import { ProjectService} from '../../../../../shared/services/Containers/ProjectService/project.service';
import { ActivatedRoute} from '@angular/router';
import { InputTextModule, PanelModule } from 'primeng/primeng';
import { Component } from '@angular/core';
import "rxjs/add/operator/map";

@Component({
    selector: 'edit',
    templateUrl: 'app/body/Admin/Vehicle/Project/Edit/edit.component.html'
})
export class EditComponent {
    title = "Project Edit";

    id;
    username: string;
    description: string;
    model:any;

    constructor(private route:ActivatedRoute, private service: ProjectService) {
        route.params.subscribe(params => this.id = params['id']);
        console.log(this.id);
        service.getById(this.id).subscribe(res => this.model = res);
    }

    ngOnInit() {
    }

    onSubmit(formRef) {
        console.log(formRef);
        let formData: any = { id: this.id, name: '', description: '', locale: ''};
        formData.name = formRef.username;
        formData.description = formRef.description;
        formData.locale = "en-us";

        console.log(formData);
        //this.service.postUpdate(formData).subscribe(res => console.log(res));
    }
}