import { TenantService } from '../../../../shared/services/tenant.service';
import { LoggerService } from '../../../../shared/services/logger/logger.service';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';
import {Router} from '@angular/router';
import { GridComponent } from '../../../../shared/UIComponents/GridComponent/grid.component'

@Component({
    selector: 'tenant-grid',
    templateUrl: 'app/body/Admin/Vehicle/Tenant/tenant.component.html'
})
export class TenantComponent {
    //title = "Tenant Grid view";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};

    constructor(private service: TenantService, private router: Router, private logger: LoggerService) {

    }

    ngOnInit() {
        let resData:any;
        this.service.postGridData()
            .subscribe(res => {
                resData = res;
                console.log("Inside of Service Call in BodyComponent: ", resData);

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                //console.log("-------- Cols --------", this.cols);
                this.confInfo = res.Configuration;
                //console.log("------- Configuration --------", this.confInfo);
            });
        console.log("The Whole MyValues After Service Call: ", this.gridData);
        console.log("The Whole configuration Info values: ", this.confInfo);
    }

    loadFreshDepartments(event: LazyLoadEvent) {
        setTimeout(() => {
            console.log("----------insede settimeout: ", event);
            this.getGridFilterValues(event);
            let js = JSON.stringify(this.gridFilter);

                console.log("----------- GridFilter ---------", this.gridFilter);
                console.log("-------- Grid Filter JS --------", JSON.parse(js));
                this.service.postGridDataFilter(JSON.parse(js))
                .subscribe(res => {
                    console.log("------ ResData in postCustomersFilterSummary -----", res);
                    let resData = res;
                    this.gridData = res.Data;
                    this.confInfo = res.Configuration;
                    this.cols = res.Configuration.Columns;
                });
        },
            250);
        console.log("---------- Event ---------",event);

    }
    private getGridFilterValues(event: LazyLoadEvent) {
        let sortColumn = (typeof event.sortField === 'undefined') ? [] : [{ columnId: event.sortField, sortOrder: event.sortOrder }];
        let pageNumber = event.first === 0 ? 1 : (event.first / 5) + 1;
        let filters = [];
        let eFilters = event.filters;
        if (eFilters) {
            for (var key in eFilters) {
                let fil = eFilters[key].value;
                let matchMode = eFilters[key].matchMode;
                if (fil) {
                    filters.push({
                        columnId: key,
                        operator: matchMode,
                        value: fil
                    });
                }
                console.log("------- filters ----------", filters);
            }
        }
        this.gridFilter = {
            isPaging: true,
            sortColumns: sortColumn,
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: 5
        };
    }
}