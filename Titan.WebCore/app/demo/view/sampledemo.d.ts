import { OnInit } from '@angular/core';
import { CarService } from '../service/carservice';
import { CountryService } from '../service/countryservice';
import { NodeService } from '../service/nodeservice';
import { Car } from '../domain/car';
import { SelectItem, MenuItem, TreeNode } from 'primeng/primeng';
export declare class SampleDemo implements OnInit {
    private carService;
    private countryService;
    private nodeService;
    country: any;
    filteredCountries: any[];
    cities: SelectItem[];
    selectedCity1: any;
    selectedCity2: any;
    radioValue: string;
    checkboxValues: string[];
    splitButtonItems: MenuItem[];
    carOptions: SelectItem[];
    selectedMultiSelectCars: string[];
    types: SelectItem[];
    dialogVisible: boolean;
    cars: Car[];
    carsLarge: Car[];
    selectedCar3: Car;
    filesTree: TreeNode[];
    menuItems: MenuItem[];
    panelMenuItems: MenuItem[];
    sourceCars: Car[];
    targetCars: Car[];
    orderListCars: Car[];
    carouselCars: Car[];
    maskValue: string;
    constructor(carService: CarService, countryService: CountryService, nodeService: NodeService);
    ngOnInit(): void;
    filterCountry(event: any): void;
    searchCountry(query: any, countries: any[]): any[];
}
