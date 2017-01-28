import { MilestoneCategoryService } from '../../../../shared/services/milestoneCategory.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent, Message, MessagesModule,MenuItem } from 'primeng/primeng';
import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component';
import { BreadCrumbsService } from '../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'milestoneCategory-grid',
    templateUrl: 'app/body/Admin/Vehicle/MilestoneCategory/milestoneCategory.component.html'
})
export class MilestoneCategoryComponent {
    //title = "MilestoneCategory Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};
    msgs: Message[] = [];
    added: any;
    
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem; 

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private service: MilestoneCategoryService, 
        private route: ActivatedRoute, 
        private router: Router, 
        private logger: LoggerService) {

    }   
    ngOnInit() {
    
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let milestoneCategoryBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'MilestoneCategoryHomePage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("milestoneCategoryBreadCrumb ---------", milestoneCategoryBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = milestoneCategoryBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
           
        });

        if (this.added == 1) {
            this.msgs = [];
            this.msgs.push({ severity: 'Success', summary: 'Added', detail: '' });
        }
       
        let resData:any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;
                console.log("Inside of Service Call in BodyComponent: ", resData);

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                //console.log("-------- Cols --------", this.cols);
                this.confInfo = res.Configuration;
                //console.log("------- Configuration --------", this.confInfo);
            });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);
        
    }
    navigateDetails(id:string){
        this.router.navigate(['admin/vehicle/milestoneCategory/details', id]);
    }
}