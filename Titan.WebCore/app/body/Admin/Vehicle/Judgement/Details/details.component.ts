﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { JudgementService } from '../../../../../shared/services/judgement.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'judgement-detail',
    templateUrl: 'app/body/Admin/Vehicle/Judgement/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Judgement";
    entityId: string = this.id;
    filepath: string = "Judgement";
    judgement = { name: '' };   
    formConfiguration: any;
    formObject: any;

    JudgementDetails: any = {
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

    public JudgementId: string;

    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;
    
    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: JudgementService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.JudgementId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let judgementDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'JudgementDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("judgementDetailsBreadCrumb ---------", judgementDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = judgementDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.JudgementId).subscribe(JudgementDetails => {
                this.JudgementDetails = JudgementDetails.result;
              
                console.log(this.JudgementDetails);
            });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.JudgementDetails).subscribe(JudgementDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}