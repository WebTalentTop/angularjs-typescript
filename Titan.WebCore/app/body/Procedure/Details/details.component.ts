﻿import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProcedureService } from '../../../shared/services/procedure.service'
import { TestTypeService } from '../../../shared/services/testtype.service'
import { TestModeService } from '../../../shared/services/testmode.service'
import { TestRequirementService } from '../../../shared/services/testrequirement.service'
import { StepService } from '../../../shared/services/step.service'
import { AddComponent } from './../../Step/Add/add.component';
import { Validators } from '@angular/forms';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, 
    FileUploadModule, Message, GrowlModule } from 'primeng/primeng';
import { Router } from '@angular/router'
import { SelectItem, ConfirmationService } from 'primeng/primeng';

enum procedureDependentItemType {
    TestRequirement = 1,
    Step = 2
}

@Component({
    selector: 'details-procedure',
    templateUrl: 'app/body/Procedure/Details/details.component.html'
})
export class DetailsComponent {
    public procedure: any;
    public testTypes: any;
    public testModes: Array<any> = new Array();
    public selectedTestRequirements: Array<any> = new Array();
    public filteredTestRequirements: Array<any> = new Array();
    public filteredSelectedTestRequirements: Array<any> = new Array();
    public filteredSelectedSteps: Array<any> = new Array();
    public selectedSteps: Array<any> = new Array();
    public filteredSteps: Array<any> = new Array();
    public displayAddStep:boolean;
    public displayEditStep: boolean;
    public id: string;
    public editStepId: string;
    constructor(
        private procedureService: ProcedureService,
        private testtypeService: TestTypeService,
        private testmodeService: TestModeService,
        private router: Router,
        private route: ActivatedRoute,
        private testrequirementService: TestRequirementService,
        private stepService: StepService,
        private confirmationService: ConfirmationService
    ) {

    }
    onAddNewStep(){
        this.displayAddStep = true;
    }

    ngOnInit() {
        this.getTestType();
        var testMode = {
            label: "Select Test Type to Populate",
            value: null
        };
        this.testModes.push(testMode);
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.procedureService.getById(params['id']).subscribe(res => {
                this.procedure = res.result;
                if (this.procedure.testTypeId != null) {
                    this.onTestTypeChange();
                }
            });
            this.procedureService.getProcedureRequirements(params['id']).subscribe(res => {
                this.selectedTestRequirements = res.$values;
            });
            this.procedureService.getProcedureSteps(params['id']).subscribe(res => {
                this.selectedSteps = res.$values;
            });

        });
    }

    onAddStepComplete(newStepId) {
        console.log(newStepId);
        var selectedStepIds = new Array();
        selectedStepIds.push(newStepId);
        var inputDto = {
            stepList: selectedStepIds
        }
        this.procedureService.postAddSteps(selectedStepIds, this.procedure.id).subscribe(filteredList => {
            this.selectedSteps = filteredList.$values;
            this.displayAddStep = false;
            this.filteredSelectedSteps = null;
        });
    }

    onCancelStepComplete(event) {
        this.displayAddStep = false;
    }

    onEditStepComplete(event) {
        this.procedureService.getProcedureSteps(this.id).subscribe(res => {
            this.selectedSteps = res.$values;
            this.displayEditStep = false;
        });
    }

    onEditCancelStepComplete(event) {
        this.displayEditStep = false;
    }

    onEditStep(step) {
        this.editStepId = step.id;
        this.displayEditStep = true;
    }

    onDelete(obj, type) {
        this.confirmationService.confirm({
            message: 'Do you want to delete this record?',
            header: 'Delete Confirmation',
            icon: 'fa fa-trash',
            accept: () => {
                if (type == procedureDependentItemType.TestRequirement) {
                    this.procedureService.postDeleteProcedureRequirement(
                        this.procedure.id,
                        obj.id
                    ).subscribe(res => {
                        this.selectedTestRequirements = res.$values;
                    });
                } else if (type == procedureDependentItemType.Step) {
                    this.procedureService.postDeleteProcedureStep(
                        this.procedure.id,
                        obj.id
                    ).subscribe(res => {
                        this.selectedSteps = res.$values;
                    });
                }
            }
        });
    }

     onAddTestRequirement() {
       var selectedTestRequirementIds = new Array();
        for (var sel of this.filteredSelectedTestRequirements) {
            selectedTestRequirementIds.push(sel.id);
        }
        var inputDto = {
            testRequirementList: selectedTestRequirementIds
        }
        this.procedureService.postAddTestRequirements(selectedTestRequirementIds, this.procedure.id).subscribe(filteredList => {
            this.selectedTestRequirements = filteredList.$values;
            this.filteredSelectedTestRequirements = null;

        });
    }

     onAddStep() {
         var selectedStepIds = new Array();
         for (var sel of this.filteredSelectedSteps) {
             selectedStepIds.push(sel.id);
         }
         var inputDto = {
             stepList: selectedStepIds
         }
         this.procedureService.postAddSteps(selectedStepIds, this.procedure.id).subscribe(filteredList => {
             this.selectedSteps = filteredList.$values;
             this.filteredSelectedSteps = null;
         });
     }

    filterTestRequirements(event) {
        console.log(this.procedure);
        this.testrequirementService.filterByProcedureId(this.procedure.id, event.query).subscribe(filteredList => {
            this.filteredTestRequirements = filteredList.$values;
        });
    }

    filterSteps(event) {
        this.stepService.filterByProcedureId(this.procedure.id, event.query).subscribe(response => {
        console.log(response);
            if (response.isSuccess)
                this.filteredSteps = response.result;
        });
    }

    getTestType() {
        //    testTypes
        this.testtypeService.getAll().subscribe(response => {
            this.testTypes = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Type",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testTypes = resultMap;
            }
            console.log(response);
        });
    }

    onTestTypeChange() {
        this.testModes = new Array();
        //this.testModes
        this.testmodeService.getAllByTestTypeId(this.procedure.testTypeId).subscribe(response => {
            if (response != null && response.$values.length > 0) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Mode",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testModes = resultMap;
            }
            else {
                var testMode = [{
                    label: "No Modes available",
                    value: null
                }];
                this.testModes = testMode;
            }
            console.log(response);
        });
    }

    onSubmit() {

        this.procedureService.postUpdate(this.procedure).subscribe(res => {
            console.log(res)
            //this.router.navigate(['procedure/details', res.$values.id]);
        });
    }
}