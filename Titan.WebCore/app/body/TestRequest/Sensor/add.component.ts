import { TestRequestSensorService } from '../../../shared/services/testrequestsensor.service';
import { titanApiUrl } from '../../../shared/services/apiurlconst/titanapiurl';
import { EquipmentTypeService } from '../../../shared/services/Containers/EquipmentTypeService/equipmentType.service';

import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, CalendarModule, InputTextModule, PanelModule, FileUploadModule, Message } from 'primeng/primeng';
import { Component,AfterViewInit, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
//import { UUID } from 'angular2-uuid'
import { Router } from '@angular/router';
declare var $: JQueryStatic;

@Component({
    selector: 'sensor-add',
    templateUrl: 'app/body/TestRequest/Sensor/add.component.html'
})
export class AddComponent {
   // ngAfterViewInit() {
   //   //  var editor = new Quill('#editor');
   //     var quill = new Quill('#editor-container', {
   //         modules: {
   //             toolbar: [
   //                 [{ header: [1, 2, true] }],
   //                 ['bold', 'italic', 'underline'],
   //                 ['image', 'code-block']
   //             ]
   //         },
   //         placeholder: 'Compose an epic...',
   //         theme: 'snow'  // or 'bubble'
   //     });
   //    // quill.g
   // }
   //// qui
   // username: string;
   // details:string;
    Sensors: any;
    fileData: any[] = [];

    uploadedFiles: any[] = [];
   // TestFacilityAttachments: ITestFacilityAttachment[];
       // hourEntries: any;
   // downTimeReasons: any;
   // estimateDuration: any;
   // formConfiguration:any;
   // formObject:any;
   // formEquipmentObject: any;
   // TimeEntryTypeId: any;
    selectedSensorTypeId: any;
    comment: any;
    sensorRequests: any;
    categories: any;
    materials: any;
    selectedCategoryId: any;
    selectedMaterialId: any;
    partName: any;
    partNumber: any;
    steadyRequirement: any;
    periodicRequirement: any;
   // selectedTimeEntryTypeId: any;
   // selectedDownTimeReasonId: any;
   // projectId: any;
   // selectedHourEntry: any ;
   id: any;
   entityType: any = "9F8D13F5-F0E8-452E-8D81-631FCD7A1C9A";
   entityId: any;
   formData: any;
   taskId: any;
   departmentId: any;
   // filepath: string = "TestFacility";
   // TrackingList: any;
   // startTime: any;
    // endTime: Date;
    fileInfo: any = {
   //             id:'',
        //             isDeleted:false,
         name: ''
   //             createdOn:'',
   //             modifiedOn:'',
   //             userCreatedById:'',
   //             userInChargedId:'',
   //             userModifiedById:''
    };

   // msgs:Message[];
   // uploadedFiles: any[] = [];

    constructor(
        private route:ActivatedRoute,
        private dataService: TestRequestSensorService,
        private equipmenttypeservice: EquipmentTypeService,
    
        private router: Router

    ){
        this.route.params.subscribe(params => {
            this.id = params['id'];
            this.taskId = params['taskId'];
        });
          this.entityId = this.id;
          console.log("---- TF Details ID Param -----", this.id);
         // this.fileData= this.fileInfo[];
    }
   handleChange(event)
   {

       console.log('tes---',event);
       console.log('-------targetid-------',event.originalEvent.target.innerText);
   }
   ngOnInit() {

        this.categories = [];
            this.categories.push({ label: 'All categories', value: null });
            this.categories.push({ label: 'Wheel Alignment', value: '5A3AFB53-A3D2-4BDF-8909-E60ED577F84D' });
            this.categories.push({ label: 'Torque for Parts', value: '817164F9-01D8-470D-BD58-618F4BF135F2' });
            this.categories.push({ label: 'Certificates', value: 'Certificates' });
            this.categories.push({ label: 'Standard Documents', value: 'Standard Documents' });
            this.categories.push({ label: 'Manual', value: 'Manual' });
            this.categories.push({ label: 'Results', value: 'Results' });

        this.materials = [];
            this.materials.push({ label: 'All materials', value: null });
            this.materials.push({ label: 'Wheel Alignment', value: '5A3AFB53-A3D2-4BDF-8909-E60ED577F84D' });
            this.materials.push({ label: 'Torque for Parts', value: '817164F9-01D8-470D-BD58-618F4BF135F2' });
            this.materials.push({ label: 'Certificates', value: 'Certificates' });
            this.materials.push({ label: 'Standard Documents', value: 'Standard Documents' });
            this.materials.push({ label: 'Manual', value: 'Manual' });
            this.materials.push({ label: 'Results', value: 'Results' });
       this.getSensorList();

       //get the departmentId through taskId
       //get sensors by department and entityId
       this.dataService.getTaskDetailsById(this.taskId)
           .subscribe(taskres => {
               this.departmentId = taskres.result.departmentId
               console.log('------------task department ------------', taskres.result.departmentId);
               this.dataService.GetAllTestRequestSensors(this.entityId, taskres.result.departmentId)
                   .subscribe(res => {
                       this.sensorRequests = res.result;
                   });
           });
      
   //    this.getHourEntryByEntityIdentifierId();
   //    this.getDownTimeReasons();
   //    //this.dataService.GetProjectId(this.id)
   //    //    .subscribe(res => {
   //    //        this.projectId = res.$values;

   //    //        //this.formConfiguration = res.formConfiguration;
   //    //        //this.formObject = res.formObject;
   //    //        //this.model = res.formObject;
   //    //        //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
   //    //        //console.log("----- Result of formObject -----", this.model);
   //    //    });
   //     this.dataService.GetTrackingListByEntityId(this.id)
   //         .subscribe(res =>
   //         {
   //             this.TrackingList = res.$values;

   //             //this.formConfiguration = res.formConfiguration;
   //             //this.formObject = res.formObject;
   //             //this.model = res.formObject;
   //             //console.log("----- Result of formConfiguration -----", this.formConfiguration.fields.$values);
   //             //console.log("----- Result of formObject -----", this.model);
   //         });

   }
  
   onChange(event) {
       var files = event.files;
       //let fileList: FileList = event.target.files;
       //if (fileList.length > 0) {
       //    let file: File = fileList[0];

       //    let formData: FormData = new FormData();
       //    formData.append('degree_attachment', file, file.name);
       //this.dataService.postCommentAdd(formData).subscribe(res => {
       //    console.log("-------- Test Sensor Adding new result ----- ", res);
       //    if (res.IsSuccess) {
       //        this.router.navigate(["/testrequest/details/", this.id]);
       //    }
       //});
       for (let file of event.files) {
           // this.fileInfo.name = file.name;

           //this.fileData.push(this.fileInfo);
           this.uploadedFiles.push(file);
           // this.fileInfo.name = '';
       }
       //this.dataService.makeFileRequest('http://localhost:9998/api/testRequestSensor/post/uploadfile', [], files).subscribe(() => {
       //    console.log('sent');
       //});

       //  let headers = new Headers();
       //  headers.append('Accept', 'application/json');
       //  let options = new RequestOptions({ headers: headers });
       //this.http.post('http://url', formData, options)
       //    .map(res => res.json())
       //    .catch(error => Observable.throw(error))
       //    .subscribe(
       //    data => console.log('success'),
       //    error => console.log(error)
       //    )

   }
   onCompleteTask()
   {
       let completetaskbody =
           {
               id: this.taskId
               //entityId: this.id,
               //entityIdentifier: '756BCBA4-6FA5-4BB6-88D9-C1773471C7A0',               
               //departmentId: '8BF81DFE-FF64-2AFD-5C55-2D2D290C4490'

           }
       this.dataService.postTasksComplete(this.taskId).subscribe(res => {



       });

   }
   onBeforeUpload(event) {
       for (let file of event.files) {
           // this.fileInfo.name = file.name;

           //this.fileData.push(this.fileInfo);
           this.uploadedFiles.push(file);
          // this.fileInfo.name = '';
       }

       //this.testfacilityattachmentservice.getByIdusing(this.id)
       //    .subscribe(TestFacilityAttachments => {
       //        console.log('-----------  TestFacilitiesroles------------------', TestFacilityAttachments);
       //        this.TestFacilityAttachments = TestFacilityAttachments;
       //    });

       //this.msgs = [];
       //this.msgs.push({ severity: 'info', summary: 'File Uploaded', detail: '' });
   }
   onSensorChange(event) {
       console.log('------event------------', event)
       this.selectedSensorTypeId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }
   onCategoryChange(event) {
       console.log('------event------------', event)
       this.selectedCategoryId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }
   onMaterialChange(event) {
       console.log('------event------------', event)
       this.selectedMaterialId = (event.value);
       //   this.EquipmentSubType.calibrationform = (event);

   }

   //onDownTimeReasonChange(event) {
   //    console.log('------event------------', event)
   //    this.selectedDownTimeReasonId = (event.value);
   //    //   this.EquipmentSubType.calibrationform = (event);

   //}

   //onHourEntryChange(event) {
   //    console.log('------event------------', event)
   //    this.selectedTimeEntryTypeId = (event.value);
   //    //   this.EquipmentSubType.calibrationform = (event);

   //}
   getSensorList() {
        //    userRoles
       this.equipmenttypeservice.getSensorList().subscribe(response => {
           this.Sensors = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "--Select--",
                    value: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.Sensors = resultMap;
            }
            console.log(response);
        });
   }

   //getDownTimeReasons() {
   //    //    userRoles
   //    this.dataService.GetAllDownTimeReasons().subscribe(response => {
   //        this.downTimeReasons = new Array();
   //        if (response != null) {
   //            var resultMap = new Array();
   //            resultMap.push({
   //                label: "--Select--",
   //                value: null
   //            });
   //            for (let template of response.$values) {
   //                var temp = {
   //                    label: template.name,
   //                    value: template.id
   //                }
   //                resultMap.push(temp);
   //            }
   //            this.downTimeReasons = resultMap;
   //        }
   //        console.log(response);
   //    });
   //}
   //getHourEntryByEntityIdentifierId() {
   //    //    userRoles
   //    this.dataService.getHourEntryByEntityIdentifierId(this.id).subscribe(response => {
   //        this.hourEntries = new Array();
   //        if (response != null) {
   //            var resultMap = new Array();
   //            resultMap.push({
   //                label: "--Select--",
   //                value: null
   //            });
   //            for (let template of response) {
   //                var temp = {
   //                    label: template.name,
   //                    value: template.id
   //                }
   //                resultMap.push(temp);
   //            }
   //            this.hourEntries = resultMap;
   //        }

   //        console.log(response);
   //    });
   //}
   //selectFile($event): void {
   //    var inputValue = $event.target;
   //    this.file = inputValue.files[0];
   //    console.debug("Input File name: " + this.file.name + " type:" + this.file.size + " size:" + this.file.size);
   //}
   uploadFile(event)
   {
       for (let file of event.files) {

           this.formData = new FormData();
           this.formData.append('file', file);
       }

       //this.dataService.postCommentAdd(null).subscribe(res => {
       //    console.log("-------- Test Sensor Adding new result ----- ", res);
       //    if (res.IsSuccess) {
       //        this.router.navigate(["/testrequest/details/", this.id]);
       //    }
       //});

   }
   onTestRequestSubmit(formRef) {
       //formRef.isDeleted = false;
       let formData: any = {
           //newly added columns

           PartName:this.partName,
           PartNumber: this.partNumber,
           SteadyRequirement: this.steadyRequirement,
           PeriodicRequirement: this.periodicRequirement,
           CategoryId: this.selectedCategoryId,
           MaterialId: this.selectedMaterialId,

           // doesnt need
         


           SensorTypeId: this.selectedSensorTypeId,

          TestRequestId : this.id,
          DepartmentId: this.departmentId,

         IsCompleted :'false',
         IsDeleted: 'false'


       };
       //let formCommentData: any = {

       //    Comment: this.comment,

       //    TestRequestId: this.id,



       //    IsDeleted: 'false'

       //};
       //for (let i of this.fileData)
       //{

       //}
       //formData.name = formRef.name;
       //formData.address.addressLine1 = formRef.addressLine1;
       //formData.address.addressLine2 = formRef.addressLine2;
       //formData.address.city = formRef.city;
       //formData.address.state = formRef.state;
       //formData.address.postalCode = formRef.postalCode;
       //formData.locale = "en-us";
    //   console.log(formData);
       //let xhr = new XMLHttpRequest();
       //let path = titanApiUrl + 'testrequestsensor/post/uploadfile';
       //xhr.onreadystatechange = function state_change() {
       //    if (xhr.readyState == 4) {// 4 = "loaded"
       //        if (xhr.status == 200) {// 200 = OK
       //            // ...our code here...
       //            alert('ok');
       //        }
       //        else {
       //            alert("Problem retrieving XML data");
       //        }
       //    }
       //};
       //xhr.open('POST', path, false);
       //xhr.setRequestHeader("Content-Type", "multipart/form-data");
       //xhr.setRequestHeader("TenantId", "FDC1A91F-75F4-4B2F-BA8A-9C2D731EBE4D");


       //  xhr.withCredentials = true;
     //  xhr.send(null);
       this.dataService.postAdd(formData).subscribe(res => {
           console.log("-------- Test Sensor Adding new result ----- ", res);
           if (res.isSuccess) {
               var testRequestSensorId = res.result.id;
               let formCommentData: any = {

           Comment: this.comment,

           TestRequestSensorId: testRequestSensorId,



           IsDeleted: 'false'

               };
               this.dataService.postCommentAdd(formCommentData).subscribe(commentresult => {
                   if (commentresult.isSuccess)
                   {
                       this.dataService.makeFileRequest('http://localhost:9998/api/testRequestSensor/post/uploadfile', [], this.uploadedFiles, testRequestSensorId).subscribe(result => {
                           console.log('sent');
                           //  this.router.navigate(["/testrequest/details/", this.id]);
                           // make a call with id and update the datatable
                           this.dataService.GetAllTestRequestSensors(this.entityId, this.departmentId)
                               .subscribe(res => {
                                   this.sensorRequests = res.result;
                               });
                       });          
                   }
                   
               });
           //    console.log("", res.object.id); 
               
           }
       });
       //var fd = new FormData();
       //fd.append('files', this.uploadedFiles[0]);
       //this.dataService.postCommentAdd(fd).subscribe(res => {
       //    console.log("-------- Test Sensor Adding new result ----- ", res);
       //    if (res.IsSuccess) {
       //        this.router.navigate(["/testrequest/details/", this.id]);
       //    }
       //});

       //this.dataService.postAdd(formData).subscribe(res => {
       //    console.log("-------- Test Sensor Adding new result ----- ", res);
       //    if (res.IsSuccess) {
       //        this.router.navigate(["/testrequest/details/", this.id]);
       //    }
       //});
   }

   // onSubmit(formRef) {
   //     console.log(formRef);
   //  //   console.log(this.testFacility.name);
   //     formRef.isDeleted = false;
   //     //let formData: any = {
   //     //    id: this.id,
   //     //    name: '',
   //     //    address: {

   //     //        id: '',
   //     //        addressLine1: '',
   //     //        addressLine2: '',
   //     //        city: '',
   //     //        state: '',
   //     //        postalCode: '',
   //     //    }
   //     //};
   //     var quill = new Quill('#editor-container');
   //  //   var delta = quill.getContents();
   //     var text = quill.getText();
   //    // var test = quill.setText(text);
   //     var format = quill.getFormat(0);
   //     var quilltext = quill.formatText(0, 0, format);



   //     let formData: any = {
   //        timeEntryTypeId: this.selectedTimeEntryTypeId,
   //       entityTypeId : '',
   //       entityId: this.id,
   //       startTime : this.startTime,
   //       endTime : this.endTime,
   //       userId: '',
   //       projectId: '53FE9592-1A9B-07D0-85D7-006A30BCD348',
   //       testStageId: this.selectedTestStageId,
   //       isDownTime: false,
   //       estimateDuration: this.estimateDuration,
   //       downTimeReasonId: this.selectedDownTimeReasonId,
   //       description: quill.getText(),
   //       tenantId: '',
   //       userCreatedById: '' ,
   //       id : ' '

   //     };

   //   //  formData.id = this.id;
   //   //  formData.name = formRef.name;
   //     //formData.address.id = this.addressid;
   //     //formData.address.addressLine1 = formRef.addressLine1;
   //     //formData.address.addressLine2 = formRef.addressLine2;
   //     //formData.address.city = formRef.city;
   //     //formData.address.state = formRef.state;
   //     //formData.address.postalCode = formRef.postalCode;
   //     formData.locale = "en-us";
   //     console.log(formData);
    
   //     this.dataService.postAdd(formData).subscribe(res => {

   //        // console.log(res);
   //         this.TrackingList = res.$values;

   //         //if (!res.errorMessage) {
   //         //    //this.router.navigate(["/testfacilities/details/", res.result.id]);
   //         //}

   //     });
   //     this.msgs = [];
   //     this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

   // }
   // navigateDetails(id: string) {
   //     this.router.navigate(['testrequest/sensor/details', id]);
   // }



}