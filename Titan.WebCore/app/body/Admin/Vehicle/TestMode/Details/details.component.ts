﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { TestModeService } from '../../../../../shared/services/testMode.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService, MenuItem } from 'primeng/primeng';
import { Validators } from '@angular/forms';
import { BreadCrumbsService } from '../../../../../shared/services/breadCrumbs/breadCrumbs.service';

@Component({
    selector: 'testMode-detail',
    templateUrl: 'app/body/Admin/Vehicle/TestMode/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;
    testTypeDetails: any = {
    id: '',
    isDeleted: false,
    name: '',
    description: '',
    userCreatedById: '',
    userModifiedById: '',
    createdOn: '',
    modifiedOn: '',
    //selectedTestTypeIdList:
    // allTestTypeIdList:
    TestTypeIdList: ''

};
    id: string;
    entityType: string = "TestMode";
    entityId: string = this.id;
    filepath: string = "TestMode";
    testMode = { name: '' };   
    formConfiguration: any;
    formObject: any;
    //testTypeDetails: any;
    selectedTestTypeIdList: any[] = [];
    selectedTestTypes: any[];
    allTestTypes: any[];
    

    msgs: Message[];
    uploadedFiles: any[] = [];

    public TestModeId: string;
 
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private router: Router,
        private service: TestModeService
    )
    { }

    ngOnInit() {
        this.selectedTestTypes = [];
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.TestModeId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            //this.service.getAllTestTypes().subscribe(TestTypesList => {
            //    this.testTypeDetails = TestTypesList.result;
            //    this.allTestTypes = this.testTypeDetails.allTestTypeIdList.$values;
            //    this.selectedTestTypes = this.testTypeDetails.selectedTestTypeIdList.$values;
            //});
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let testModeDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'TestModeDetailsPage'
            )[0];

            console.log("BreadC -----", breadC);
            console.log("testModeDetailsBreadCrumb ---------", testModeDetailsBreadCrumb);
            this.breadcrumbs = [];
            this.breadcrumbs = testModeDetailsBreadCrumb.items;

            console.log("breadcurmbs ------", this.breadcrumbs);

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

            this.service.getById(this.TestModeId).subscribe(TestModeDetails => {
                this.testTypeDetails = TestModeDetails.result;
                this.allTestTypes = this.testTypeDetails.allTestTypesList.$values;
                this.selectedTestTypes = this.testTypeDetails.selectedTestTypesList;

            });
    }


    onSubmit(formRef) {

        this.selectedTestTypeIdList = [];
        if (this.selectedTestTypes.length == 0) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'select atleast one TestType', detail: '' });
            return null;

        }
        this.selectedTestTypes.forEach((testtype, index) => {
           
            this.selectedTestTypeIdList.push(testtype.value);

        });

        this.testTypeDetails.testTypeIdList = this.selectedTestTypeIdList;
        this.service.postUpdate(this.testTypeDetails).subscribe(TestModeDetails => {
           

        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'Saved', detail: '' });
    }
}