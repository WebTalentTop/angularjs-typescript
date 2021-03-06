import { Component } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { SelectItem, ConfirmationService } from 'primeng/primeng';
import { ITitanCalibrationSelectItem } from '../../../shared/services/definitions/ITitanCalibrationSelectItem';
import { EquipmentService } from '../../../shared/services/Containers/EquipmentService/equipment.service';
import { TestFacilityService } from '../../../shared/services/Containers/TestFacilityService/testFacility.service';
import { DataTable, TabViewModule, LazyLoadEvent, ButtonModule, InputTextareaModule, InputTextModule, PanelModule, FileUploadModule, Message, GrowlModule, MenuItem } from 'primeng/primeng';
import { BreadCrumbsService } from '../../../shared/services/breadCrumbs/breadCrumbs.service';

declare var cron: any;
declare var useGentleSelect: any;
@Component({
    selector: 'details-equipment',
    styleUrls: ['app/body/Equipment/Details/image.component.css'], 
    templateUrl: 'app/body/Equipment/Details/details.component.html'
})
export class DetailsComponent {

    username: string;
    details: string;
    equipmentManufacturers: any;
    IsKeepOpen: boolean = false;
    selectedEquipmentManufacturerId: any;
    displayAssignManufacturerDialog: boolean = false;
    equipmentTypes: ITitanCalibrationSelectItem[];
    selectedCalibrationFrequency: any;
    selectedEquipmentTypeId: any = '';
    testFacilities: any;
    selectedTestFacilityId: any;
    formConfiguration: any;
    formObject: any;
    formEquipmentObject: any;
    equipmentLogComments: any;
    displayCommentDialog: boolean = false;
    selectedMaintenanceFrequency: any;
    id: string;
    image: any;
    equipmentId: any;
    entityType: string = "TestFacility";
    entityId: string = this.id;
    filepath: string = "TestFacility";
    manufacturerName: any = '';

    manufacturerPhone: any = '';
    selectedEquipmentObj: any = {
        id: '',
        name: '',
        frequency: ''
    }
    selectedEquipmentTypeName: any = '';
    manufacturerWebsite: any = '';
    manufacturerEmail: any = '';
    isMaintenaceFrequencySelected: boolean;
    isCronControlInitialized: boolean;
    manufacturerFax: any = '';
    manufacturerAddressLine1: any = '';
    manufacturerAddressLine2: any = '';
    manufacturerPostal: any = '';
    manufacturerState: any = '';
    manufacturerCity: any = '';
    IsNewManufacturer: boolean;
    comment: any;
    equipmentCodeName: any = 'CODE128';
    added: any;
    manufacturerId: any;
    model: any = {
        id: '',
        name: '',
        equipmentTypeId: '',
        calibrationFrequencyCronExpression: '',
        serialNumber: '',
        modelNumber: '',
        purchaseDate: '',
        warrantyExpiration: '',
        lastCalibrationDate: '',
        description: '',
        purchasePrice: '',
        testFacilityId: '',
        equipmentManufacturerId: '',
        manufacturerName: '',
        manufacturerPhone: '',
        manufacturerFax: '',
        manufacturerWebsite: '',
        manufacturerEmail: '',
        manufacturerAddress: {
            addressLine1: '',
            addressLine2: '',
            city: '',
            state: '',
            postalCode: ''

        }

    };
    msgs: Message[];
    uploadedFiles: any[] = [];
    breadcrumbs: MenuItem[];
    breadcrumbsHome: MenuItem;

    constructor(
        private breadCrumbsService: BreadCrumbsService,
        private route: ActivatedRoute,
        private testfacilityservice: TestFacilityService,
        private service: EquipmentService
    ) {
        this.route.queryParams.subscribe(params => {

            this.added = params['page'];
            let breadC = this.breadCrumbsService.getBreadCrumbs();
            let equipmentDetailsBreadCrumb = breadC.filter(filter =>
                filter.pageName === 'EquipmentDetailsPage')[0];

            this.breadcrumbs = [];
            this.breadcrumbs = equipmentDetailsBreadCrumb.items;

            this.breadcrumbsHome = { routerLink: ['/'] };
        });

        this.route.params.subscribe(params => this.id = params['id']);
        this.equipmentId = this.id;
        this.model.id = this.id;
    }

   handleChange(event)
   {

   }

    ngOnInit() {
        this.getEquipmentManufacturers();
        this.getEquipmentTypes();
        this.getTestFacilities();
        this.GetLogCommentsByEquipmentId();

        this.service.getById(this.id)
            .subscribe(res => {
                this.model = res.result;
                this.selectedEquipmentManufacturerId = res.result.equipmentManufacturerId;
                //   this.selectedEquipmentTypeName = "Analog";
                this.selectedTestFacilityId = res.result.testFacilityId;
                //    this.selectedEquipmentObj.id = res.result.equipmentTypeId;
                // this.selectedEquipmentObj.name = "Analog";

                //  this.selectedEquipmentObj.frequency = "generic"; //res.result.calibrationFrequencyCronExpression;

                this.model.equipmentTypeId = res.result.equipmentTypeId;
                if (res.result.purchaseDate == null)
                    this.model.purchaseDate = null;
                else
                    this.model.purchaseDate = new Date(res.result.purchaseDate);

                if (res.result.warrantyExpiration == null)
                    this.model.warrantyExpiration = null;
                else
                    this.model.warrantyExpiration = new Date(res.result.warrantyExpiration);

                if (res.result.lastCalibrationDate == null)
                    this.model.lastCalibrationDate = null;
                else
                    this.model.lastCalibrationDate = new Date(res.result.lastCalibrationDate);

                this.frequencyInit();
                this.model.calibrationFrequencyCronExpression = res.result.calibrationFrequencyCronExpression;
                //if (res.testFacility.nextMaintenanceDate != null) {
                //    this.hasNextMaintenanceDate = true;
                //}
                if (this.selectedEquipmentManufacturerId != "00000000-0000-0000-0000-000000000000") {
                    this.service.getManufaturerDetailsById(this.selectedEquipmentManufacturerId).subscribe(res => {
                        this.manufacturerPhone = res.result.phoneNumber;
                        this.manufacturerFax = res.result.faxNumber;
                        this.manufacturerWebsite = res.result.website;
                        this.manufacturerName = res.result.name;
                        this.manufacturerEmail = res.result.email;
                        this.manufacturerAddressLine1 = res.result.addressLine1;
                        this.manufacturerAddressLine2 = res.result.addressLine2;
                        this.manufacturerPostal = res.result.postal;
                        this.manufacturerCity = res.result.city;
                        this.manufacturerState = res.result.state;

                    });
                }
                else {
                    this.selectedEquipmentManufacturerId = null;
                }

                this.service.getEquipmentBarCodeImage(this.id, "").subscribe(res => {
                    if (res)
                    {
                        this.image = res;
                    }

                });

            });


        // this.dataService.getEquipmentsByIdusing(this.id)
        //  .subscribe(res =>
        //{
        //  this.TestFacilityEquipments = res;

        // });
    }
    frequencyInit() {
        if (this.model.calibrationFrequencyCronExpression != null) {
            this.selectedMaintenanceFrequency = this.model.calibrationFrequencyCronExpression;
//this.isMaintenaceFrequencySelected = true;
            $("#selector").cron({

                initial: this.selectedMaintenanceFrequency,
                onChange: function () {
                    this.selectedMaintenanceFrequency = $(this).cron("value");
                }, useGentleSelect: false
            });
            this.isCronControlInitialized = true;
        }
        else {
            this.selectedMaintenanceFrequency = "0 0 1 1 *";
            this.isMaintenaceFrequencySelected = false;
        }

    }
    printBarCode()
    {
      //  var barcode = window.open("http://localhost:9998/api/Equipment/GetEquipmentBarcodeTemplate/" + this.id, "_blank", "menubar=0,resizable=0,width=200,height=200");
        var barcode = window.open("", "", "width=200,height=200");

        barcode.document.write("<html><body><img src=data:image/jpeg;base64," + this.image + "></body></html>");
        barcode.document.close();
        barcode.focus();
        barcode.print();
        barcode.close();
    }
    showHideCronPicker() {
        console.log("--inside cronpicker show hide");
        if (this.isMaintenaceFrequencySelected) {
            if (!this.isCronControlInitialized) {
                $("#selector").cron({

                    initial: this.selectedMaintenanceFrequency,
                    onChange: function () {
                        this.selectedMaintenanceFrequency = $(this).cron("value");
                    }, useGentleSelect: false
                });
            }
        } else {
            // Hide the cron
        }
    }
    displayAssignManufacturerDialogBox() {
        this.displayAssignManufacturerDialog = true;
        this.selectedEquipmentManufacturerId = null;
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';
        this.manufacturerEmail = '';
        this.manufacturerAddressLine1 = '';
        this.manufacturerAddressLine2 = '';
        this.manufacturerCity = '';
        this.manufacturerPostal = '';
        this.manufacturerState = '';
        this.manufacturerCity = '';



    }
    GetLogCommentsByEquipmentId() {
        this.service.getLogComments(this.id)
            .subscribe(res => {
                this.equipmentLogComments = res;
                for (let elc of this.equipmentLogComments) {
                    elc.createdOn = moment(elc.createdOn).format("MM-DD-YYYY [at] HH:mm").toString()
                } 
            });

    }
    onMaintenanceFrequencyChange(event) {
        this.selectedMaintenanceFrequency = (event.value);

    }
    AddLogComment() {
        if (this.comment == null || this.comment == '') {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please write any comment', detail: '' });
            return null;
        }

        this.service.PostLogComments(this.id, JSON.stringify(this.comment)).subscribe(filteredList => {
            this.service.getLogComments(this.id)
                .subscribe(res => {
                    this.equipmentLogComments = res;
                });

        });
        this.displayCommentDialog = false;
        this.msgs = [];
        this.msgs.push({ severity: 'info', summary: 'Comment saved', detail: '' });

    }
    displayClear() {
        this.displayAssignManufacturerDialog = true;
        this.selectedEquipmentManufacturerId = null;
        this.IsNewManufacturer = true;
        this.manufacturerName = '';
        this.manufacturerPhone = '';
        this.manufacturerFax = '';
        this.manufacturerWebsite = '';
        this.manufacturerEmail = '';
        this.manufacturerAddressLine1 = '';
        this.manufacturerAddressLine2 = '';
        this.manufacturerCity = '';
        this.manufacturerPostal = '';
        this.manufacturerState = '';
        this.manufacturerCity = '';
    }
    onAddManufacturer() {


        if (this.manufacturerName == null || this.manufacturerName == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Please enter Manufacturer Name', detail: '' });
            return null;
        }


        let equipmentmanufacturermodel = {
            EquipmentId: this.id,
            EquipmentManufacturerDetails: {
                Name: this.manufacturerName,
                PhoneNumber: this.manufacturerPhone,
                FaxNumber: this.manufacturerFax,
                Website: this.manufacturerWebsite,
                Email: this.manufacturerEmail
            },
            ManufacturerAddress: {
                addressLine1: this.manufacturerAddressLine1,
                addressLine2: this.manufacturerAddressLine2,
                city: this.manufacturerCity,
                state: this.manufacturerState,
                postalCode: this.manufacturerPostal,
            }

        };

        this.service.postManufacturerAdd(equipmentmanufacturermodel).subscribe(res => {
            if (res.isSuccess) {
                this.getEquipmentManufacturers();
                this.selectedEquipmentManufacturerId = res.result.equipmentManufacturerDetails.id;
                this.displayAssignManufacturerDialog = false;
                 this.msgs = [];
            this.msgs.push({ severity: 'success', summary: 'Created ', detail: '' });
            }
            else
                {  this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Manufacturer Name Exists ', detail: '' });}
           

        });


    }
    onEquipmentManufacturerChange(event) {
        this.selectedEquipmentManufacturerId = (event.value);
        this.service.getManufaturerDetailsById(this.selectedEquipmentManufacturerId).subscribe(res => {
            this.manufacturerPhone = res.result.phoneNumber;
            this.manufacturerFax = res.result.faxNumber;
            this.manufacturerWebsite = res.result.website;
            this.manufacturerName = res.result.name;
            this.manufacturerEmail = res.result.email;
            this.manufacturerAddressLine1 = res.result.addressLine1;
            this.manufacturerAddressLine2 = res.result.addressLine2;
            this.manufacturerPostal = res.result.postal;
            this.manufacturerCity = res.result.city;
            this.manufacturerState = res.result.state;

        });
        //   this.EquipmentSubType.calibrationform = (event);

    }
    getEquipmentManufacturers() {
        //    userRoles
        this.service.getEquipmentManufacturers().subscribe(response => {
            debugger;
            this.equipmentManufacturers = new Array();
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
                this.equipmentManufacturers = resultMap;
            }
        });
    }

    onEquipmentTypeChange(event) {
        this.selectedEquipmentTypeId = (event.value);

        let frequencyvar: any = this.equipmentTypes.filter(eType => eType.value === event.value)[0].frequency;
        if (frequencyvar != null && frequencyvar != "") {
            this.model.calibrationFrequencyCronExpression = frequencyvar;//event.frequency;
            this.isMaintenaceFrequencySelected = true;
            this.frequencyInit();
        }

        // this.selectedCalibrationFrequency = event.
        //   this.EquipmentSubType.calibrationform = (event);

    }
    onTestFacilityChange(event) {
        this.selectedTestFacilityId = (event.value);
        //   this.EquipmentSubType.calibrationform = (event);

    }
    getTestFacilities() {
        //    userRoles
        this.testfacilityservice.getTestFacilities().subscribe(response => {
            debugger;
            this.testFacilities = new Array();
            if (response != null) {
                var resultMap = new Array();
                resultMap.push({
                    label: "Select Test Facility",
                    value: null
                });
                for (let template of response) {
                    var temp = {
                        label: template.name,
                        value: template.id
                    }
                    resultMap.push(temp);
                }
                this.testFacilities = resultMap;
            }
        });
    }
    getEquipmentTypes() {
        //    userRoles
        this.service.getEquipmentTypes().subscribe(response => {

            this.equipmentTypes = [];
            if (response != null) {
                var list = new Array();
                this.equipmentTypes.push({
                    label: "--Select--",
                    value: null,
                    frequency: null
                });
                for (let template of response.$values) {
                    var temp = {
                        label: template.name + "(" + template.frequencyDescription + ")",
                        value: template.id,
                        frequency: template.frequency
                    }
                    this.equipmentTypes.push(temp);
                }
                this.equipmentTypes = this.equipmentTypes;
            }
        });
    }
    onEquipmentSave(formRef) {
        if (formRef.name == null || formRef.name == "") {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please enter Name', detail: '' });
            return null;
        }
        if (this.selectedEquipmentTypeId == null || this.selectedEquipmentTypeId == undefined) {
            this.msgs = [];
            this.msgs.push({ severity: 'error', summary: 'Please select Equipment Type', detail: '' });
            return null;
        }
        //  formRef.isDeleted = false;
        let cronexp: any;
        if (this.isMaintenaceFrequencySelected) {
            cronexp = $('#selector').cron("value");
        }
        else {
            cronexp = '';
        }
        let modeldata = {
            Id: this.id,
            Name: formRef.name,
            ModelNumber: formRef.modelNumber,
            CalibrationFrequencyCronExpression: cronexp,
            LastCalibrationDate: formRef.lastCalibrationDate,
            EquipmentTypeId: this.selectedEquipmentTypeId,
            SerialNumber: formRef.serialNumber,
            PurchaseDate: formRef.purchaseDate,
            WarrantyExpiration: formRef.warrantyExpiration,
            Description: formRef.description,
            PurchasePrice: formRef.purchasePrice,
            TestFacilityId: this.selectedTestFacilityId,
            EquipmentManufacturerId: this.selectedEquipmentManufacturerId


        };

        //formData.id = this.id;
        //formData.name = formRef.name;
        //formData.address.id = this.addressid;
        //formData.address.addressLine1 = formRef.addressLine1;
        //formData.address.addressLine2 = formRef.addressLine2;
        //formData.address.city = formRef.city;
        //formData.address.state = formRef.state;
        //formData.address.postalCode = formRef.postalCode;
        //formData.locale = "en-us";
        this.service.postUpdate(modeldata).subscribe(res => {

            if (res.isSuccess) {
                this.msgs = [];
                this.msgs.push({ severity: 'info', summary: 'saved', detail: '' });

                // this.router.navigate(["/testfacilities/details/", res.result.id]);
            }
            else
                {  this.msgs = [];
            this.msgs.push({ severity: 'warn', summary: 'Equipment Name exists. ', detail: '' });}

        });
        this.msgs = [];
        this.msgs.push({ severity: 'success', summary: 'saved', detail: '' });

    }

    addCommentButton(event) {
        this.comment = '';
        this.displayCommentDialog = true;
    }

}