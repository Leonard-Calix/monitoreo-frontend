import { Component, OnInit } from '@angular/core';
import { successAlert } from 'app/helpers/sweetalert';
import { Community } from 'app/interfaces/Community.interface';
import { Department } from 'app/interfaces/Department.interface';
import { Municipality } from 'app/interfaces/Municipality.interface';
import { Question } from 'app/interfaces/Question.interface';
import { CommunitiesService } from 'app/services/communities.service';
import { DepartmentService } from 'app/services/department.service';
import { MunicipalitiesService } from 'app/services/municipalities.service';
import { QuestionService } from 'app/services/question.service';
declare var $: any;

@Component({
    selector: 'app-monitoring',
    templateUrl: './monitoring.component.html',
    styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

    departments: Department[] = [];
    municipalities: Municipality[] = [];
    communities: Community[] = [];
    question: Question[] = [];
    dateMonitory: string = new Date().toDateString();


    communityId: number = 0;
    municipalityId: number = 0;
    departmentId: number = 0;

    constructor(
        private readonly deparmentService: DepartmentService,
        private readonly municipalitiesService: MunicipalitiesService,
        private readonly communitiesService: CommunitiesService,
        private readonly questionsService: QuestionService,

    ) { }

    ngOnInit() {
        //this.inicialiceTable();

        this.getDeparments();

        this.getQuestions();

    }

    inicialiceTable() {
        //  Activate the tooltips
        $('[rel="tooltip"]').tooltip();

        //  Init Bootstrap Select Picker
        if ($(".selectpicker").length != 0) {
            $(".selectpicker").selectpicker({
                iconBase: "fa",
                tickIcon: "fa-check"
            });
        }

        $('.datetimepicker').datetimepicker({
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });

        $('.datepicker').datetimepicker({
            format: 'MM/DD/YYYY',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }
        });

        $('.timepicker').datetimepicker({
            //          format: 'H:mm',    // use this format if you want the 24hours timepicker
            format: 'h:mm A',    //use this format if you want the 12hours timpiecker with AM/PM toggle
            icons: {
                time: "fa fa-clock-o",
                date: "fa fa-calendar",
                up: "fa fa-chevron-up",
                down: "fa fa-chevron-down",
                previous: 'fa fa-chevron-left',
                next: 'fa fa-chevron-right',
                today: 'fa fa-screenshot',
                clear: 'fa fa-trash',
                close: 'fa fa-remove'
            }

        });
    }

    getDeparments() {
        this.deparmentService.getAll().subscribe(((res: any) => {
            console.log(res);
            this.departments = res.data;
        }));
    }

    getMunicipalitiesByDeparment(event: any) {
        let departmentId: number = event.target.value;
        this.communities = [];
        this.municipalities = [];

        this.departmentId = Number(departmentId);

        this.municipalitiesService.getByDepartmentId(departmentId).subscribe(((res: any) => {
            this.municipalities = res.data;
        }));
    }

    getMunicipalities(event: any) {
        let municipalityId: number = event.target.value;

        this.municipalityId = Number(municipalityId);

        this.communitiesService.getByCommunityByMunicipalityId(municipalityId).subscribe(((res: any) => {
            this.communities = res.data;
        }));
    }

    getQuestions(){
        this.questionsService.getAll().subscribe(((res: any) => {
            this.question = res.data;
        }));
    }

    save() {
        console.log({ municipalityId: this.municipalityId, departmentId: this.departmentId, communityId: Number(this.communityId) });

        successAlert('Exitoso','Registro guardado con exito')
    }
}
