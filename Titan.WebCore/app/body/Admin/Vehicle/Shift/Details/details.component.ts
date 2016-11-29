﻿import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ShiftService } from '../../../../../shared/services/shift.service'
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, MessagesModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { Validators } from '@angular/forms';

@Component({
    selector: 'shift-detail',
    templateUrl: 'app/body/Admin/Vehicle/Shift/Details/details.component.html'
})
export class DetailsComponent {
    username: string;
    details: string;

    id: string;
    entityType: string = "Shift";
    entityId: string = this.id;
    filepath: string = "Shift";
    shift = { name: '' };
    selectedUserNames: Array<any> = new Array();
    filteredUserNames: Array<any> = new Array();
    filteredSelectedUserNames: Array<any> = new Array();
    formConfiguration: any;
    formObject: any;

    model: any = {
        id: '',
        isDeleted: false,
        name: '',
        StartTime:'',
        EndTime:'',
        createdOn: '',
        modifiedOn: '',
        locale: '',
        userCreatedById: '',
        userModifiedById: '',
    };


    msgs: Message[];
    uploadedFiles: any[] = [];


    public ShiftDetails: any;
    public ShiftId: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ShiftService,
    )
    { }


    ngOnInit() {
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.ShiftId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getById(this.ShiftId).subscribe(ShiftDetails => {
                this.ShiftDetails = ShiftDetails;
                this.ShiftDetails.id = this.ShiftId;
                console.log(this.ShiftDetails);
            });
        });
    }


    onSubmit(formRef) {
        console.log("inside");
        console.log(this.shift.name);
        formRef.isDeleted = false;
        let formData: any = {
            id: this.id,
            name: '',
        };
        
        formData.id = this.id;
        formData.name = formRef.name;
        
        this.service.postUpdate(this.ShiftDetails).subscribe(ShiftDetails => {
            console.log(ShiftDetails);
        });
    }
}