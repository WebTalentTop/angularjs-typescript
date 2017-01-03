import { DepartmentService } from './../../shared/services/department.service';
import { DataTable, LazyLoadEvent } from 'primeng/primeng';
import { Component } from '@angular/core';

@Component({
    selector: 'department',
    templateUrl: 'app/body/gridview.component.html'
})
export class DepartmentComponent {
    title = "Department Grid";
    gridData = [];
    confInfo:any = {};
    cols = [];
    gridFilter = {};

    constructor(private dataService: DepartmentService) {

    }

    ngOnInit() {
        let resData:any;
        this.dataService.postGridData()
            .subscribe(res => {
                resData = res;

                this.gridData = res.Data;
                this.cols = res.Configuration.Columns;
                this.confInfo = res.Configuration;
            });
    }

    loadFreshDepartments(event: LazyLoadEvent) {
        setTimeout(() => {
            this.getGridFilterValues(event);
            let js = JSON.stringify(this.gridFilter);

            this.dataService.postGridDataFilter(JSON.parse(js))
                .subscribe(res => {
                    let resData = res;
                    this.gridData = res.Data;
                    this.confInfo = res.Configuration;
                    this.cols = res.Configuration.Columns;
                });
        },
            250);
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
            }
        }
        this.gridFilter = {
            locale: "en-us",
            defaultLocale: "en-us", pageNumber: pageNumber, pageSize: 5
        };
    }
}