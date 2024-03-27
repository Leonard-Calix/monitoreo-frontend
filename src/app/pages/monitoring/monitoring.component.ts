import { Component,OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-monitoring',
  templateUrl: './monitoring.component.html',
  styleUrls: ['./monitoring.component.css']
})
export class MonitoringComponent implements OnInit {

  
  ngOnInit() {
      //  Activate the tooltips
      $('[rel="tooltip"]').tooltip();

      //  Init Bootstrap Select Picker
      if($(".selectpicker").length != 0){
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

}
