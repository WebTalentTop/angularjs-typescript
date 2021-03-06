import { Component} from '@angular/core';
import { StepService } from '../../../../../shared/services/step.service';
import { Validators } from '@angular/forms';
import { SelectItem, Message } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-step',
    templateUrl: 'app/body/Admin/Vehicle/Step/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    msgs: Message[];
    constructor(private service: StepService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        //console.log(formRef);
        //console.log(this.username);
        //console.log(this.description);
        //formRef.locale = "en-us";
        //formRef.isDeleted = false;
        let formData: any = {name: '', description: '', locale:'', isDeleted: false};
        formData.name = formRef.name;
        formData.description = formRef.description;
        formData.locale = "en-us";
        let added: any="true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.msgs = [];
                this.msgs.push({ severity: 'success', summary: 'Success', detail: '' });
                setTimeout(()=>this.router.navigate(["admin/vehicle/step"], { queryParams: { page: 1 } }),2000);
            }
           
        }
            );
     
                  // );
       
    }
}
