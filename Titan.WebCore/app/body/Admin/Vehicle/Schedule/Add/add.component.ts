import { Component} from '@angular/core';
import { ScheduleService } from '../../../../../shared/services/schedule.service';
import { Validators } from '@angular/forms';
import { SelectItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-schedule',
    templateUrl: 'app/body/Admin/Vehicle/Schedule/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;

    constructor(private service: ScheduleService, private router: Router, private route: ActivatedRoute) {

    }

    ngOnInit() {

    }
    onSubmit(formRef) {
        console.log(formRef);
        console.log(this.username);
        console.log(this.description);
        formRef.locale = "en-us";
        formRef.isDeleted = false;
        let formData: any = { startTimeUTC: '', endTimeUTC: '', recurranceCronExpression:'', defaultlocale:'', isDeleted: false};
        formData.startTimeUTC = formRef.startTimeUTC;
        formData.recurranceCronExpression = formRef.recurranceCronExpression;
        formData.endTimeUTC = formRef.endTimeUTC;
        formData.defaultlocale = "en-us";
        let added: any="true";
        console.log(formData);
        this.service.postAdd(formData).subscribe(res => {
            console.log('--------------res result------------', +res)

            // this.router.navigate(["/vehicle/projectStatus/", res]);
            if (res.isSuccess) {
                //this.router.navigate([], {q})
                this.router.navigate(["/admin/vehicle/schedule"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
