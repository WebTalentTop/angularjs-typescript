﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BuildLevelService } from '../../../../../shared/services/Containers/BuildLevelService/buildLevel.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule,  InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'buildLevel-detail',
    templateUrl: 'app/body/Admin/Vehicle/BuildLevels/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "BuildLevel";
    entityId: string = this.id;
    filepath: string = "BuildLevel";
    buildLevel = { name: '' };   
    formConfiguration: any;
    formObject: any;

    BuildLevelDetails: any = {
        id: '',
        isDeleted: false,
        name: '',
        description: '',
        userCreatedById: '',
        userModifiedById: '',
        createdOn: '',
        modifiedOn: ''
    };
     
    msgs: Message[];
    uploadedFiles: any[] = [];

    public BuildLevelId: string;
        breadcrumbs: MenuItem[];
        breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: BuildLevelService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.BuildLevelId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let buildLevelsDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'BuildLevelsDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("buildLevelsDetailsBreadCrumb ---------", buildLevelsDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = buildLevelsDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.BuildLevelId).subscribe(BuildLevelDetails => {
                this.BuildLevelDetails = BuildLevelDetails.result;
                this.BuildLevelDetails.id = this.BuildLevelId;
                console.log(this.BuildLevelDetails);
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.BuildLevelDetails).subscribe(BuildLevelDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}