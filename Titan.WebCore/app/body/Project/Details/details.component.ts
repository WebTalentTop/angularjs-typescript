import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProjectService } from './../../../shared/services/project.services'

@Component({    
    selector: 'project-detail',
    templateUrl: 'app/body/Project/Details/details.component.html'
})
export class DetailsComponent {

    public ProjectDetails:any;
    public projectId:string; 
    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private service: ProjectService) {}


    ngOnInit() { 
        this.route.params.forEach((params: Params) => {
            this.route.params.subscribe(params => console.log(params['id']));

            this.projectId = params['id']; // (+) converts string 'id' to a number
            //let locale = params['locale'];

            this.service.getProjectDetails(this.projectId).subscribe(ProjectDetails => {
                this.ProjectDetails = ProjectDetails;
                this.ProjectDetails.id = this.projectId;
                console.log(this.ProjectDetails);    
            });
        });
    }

    
    onSubmit(){
        console.log("inside");

        this.service.putProjectDetails(this.ProjectDetails).subscribe(ProjectDetails => {console.log(ProjectDetails);  
            });
    }
}