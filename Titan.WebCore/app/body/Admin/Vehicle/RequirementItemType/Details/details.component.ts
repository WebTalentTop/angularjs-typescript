﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RequirementItemTypeService } from '../../../../../shared/services/requirementItemType.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';
@Component({
    selector: 'requirementItemType-detail',
    templateUrl: 'app/body/Admin/Vehicle/RequirementItemType/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "RequirementItemType";
    entityId: string = this.id;
    filepath: string = "RequirementItemType";
    requirementItemType = { name: '' };   
    formConfiguration: any;
    formObject: any;

    RequirementItemTypeDetails: any = {
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

    public RequirementItemTypeId: string;
    
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: RequirementItemTypeService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.RequirementItemTypeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let requirementItemTypeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'RequirementItemTypeDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("requirementItemTypeDetailsBreadCrumb ---------", requirementItemTypeDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = requirementItemTypeDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
            });

            this.service.getById(this.RequirementItemTypeId).subscribe(RequirementItemTypeDetails => {
                this.RequirementItemTypeDetails = RequirementItemTypeDetails.result;
              
                console.log(this.RequirementItemTypeDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.RequirementItemTypeDetails).subscribe(RequirementItemTypeDetails => {
           // console.log(ProjectStatusDetails);
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}