import { Component} from '@angular/core';
import { JudgementService } from '../../../../../shared/services/judgement.service';
import { Validators } from '@angular/forms';
import { SelectItem, MenuItem } from 'primeng/primeng';
import { Router, Params, ActivatedRoute } from '@angular/router';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
//import { DataTable,PanelMenuModule, PanelModule ,InputTextModule,InputTextareaModule, ButtonModule } from 'primeng/primeng';

@Component({
    selector: 'add-judgement',
    templateUrl: 'app/body/Admin/Vehicle/Judgement/Add/add.component.html'
})

export class AddComponent {
    username: string;
    description:string;
    added: any;
    
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: JudgementService, 
        private router: Router, 
        private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let judgementAddBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'JudgementAddPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("judgementAddBreadCrumb ---------", judgementAddBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = judgementAddBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });
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
                this.router.navigate(["/admin/vehicle/judgement"], { queryParams: { page: 1 } });
               
            }
           
        }
            );
     
                  // );
       
    }
}
