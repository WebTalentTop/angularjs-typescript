﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestRequirementService } from '../../../../../shared/services/testRequirement.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'testRequirement-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestRequirement/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "TestRequirement";
    entityId: string = this.id;
    filepath: string = "TestRequirement";
    testRequirement = { name: '' };   
    formConfiguration: any;
    formObject: any;

    TestRequirementDetails: any = {
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


    public TestRequirementId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: TestRequirementService
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestRequirementId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.TestRequirementId).subscribe(TestRequirementDetails => {
                this.TestRequirementDetails = TestRequirementDetails.result;
              
                console.log(this.TestRequirementDetails);
            });
        });
    }


    onSubmit(formRef) {

        this.service.postUpdate(this.TestRequirementDetails).subscribe(TestRequirementDetails => {
        });
         this.msgs = [];
         this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}