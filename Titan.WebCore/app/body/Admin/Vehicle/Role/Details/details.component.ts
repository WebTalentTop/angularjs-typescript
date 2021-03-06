﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { RoleService } from '../../../../../shared/services/role.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'role-detail',
    templateUrl: 'app/body/Admin/Vehicle/Role/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Role";
    entityId: string = this.id;
    filepath: string = "Role";
    role = { name: '' };   
    formConfiguration: any;
    formObject: any;

    RoleDetails: any = {
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

    public RoleId: string;
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: RoleService
    )
    { }

    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.RoleId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

              let breadC = this.breadCrumbsService.getBreadCrumbs();
            let roleDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'RoleDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("roleDetailsBreadCrumb ---------", roleDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = roleDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.RoleId).subscribe(RoleDetails => {
                this.RoleDetails = RoleDetails.result;
              
                console.log(this.RoleDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.RoleDetails).subscribe(RoleDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}