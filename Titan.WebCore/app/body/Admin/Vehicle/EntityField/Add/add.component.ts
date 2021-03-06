import { Component} from '@angular/core';
import { EntityFieldService } from '../../../../../shared/services/entityField.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-entityField',
    templateUrl: 'app/body/Admin/Vehicle/EntityField/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;

    constructor(private service: EntityFieldService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        let formData: any = {
           
            description: '',
             isDeleted: false,
            entityIdentifierId :'',
           
          allowMultiSelect :'',
          isRequired :'',
          isInitialized :'',
          tenantId :'',
          userCreatedById :'',
          createdOn :'',
          userModifiedById :'',
          modifiedOn :''
         
        };
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
                this.router.navigate(["/vehicle/entityField"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
