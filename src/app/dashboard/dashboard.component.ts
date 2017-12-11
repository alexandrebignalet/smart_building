import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-dashboard-component',
    templateUrl: './dashboard.component.html',
})
export class DashboardComponent  {

    @Input() roomName;

    constructor() {
        console.log('Dashboard component const');
        this.initValues();
    }

    consommation: any;
    prevision: any;

    initValues() {
        const facteurPrevision = 4;
        this.lineChartData = [];
        this.prevision = {
            data: [],
            label: 'Prevision (kWh)'
        };
        this.consommation = {
            data: [],
            label: 'Consommation (kWh)'
        };

        for (let i = 0 ; i < 7 ; i++) {
            this.prevision.data.push(facteurPrevision - 2);
            this.consommation.data.push(Math.round(facteurPrevision * (Math.random() * (2 - 1) + 0 ) * 100) / 100 );
        }
        this.lineChartData.push(this.prevision);
        this.lineChartData.push(this.consommation);
    }


    // lineChart
    // lineChart
    public lineChartData:Array<any> = [

    ];
    public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
    public lineChartOptions:any = {
        responsive: true
    };

    public lineChartLegend:boolean = true;
    public lineChartType:string = 'line';


    public lineChartColors:Array<any> = [
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        },
        { // dark grey
            backgroundColor: 'rgba(77,83,96,0.2)',
            borderColor: 'rgba(77,83,96,1)',
            pointBackgroundColor: 'rgba(77,83,96,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(77,83,96,1)'
        },
        { // grey
            backgroundColor: 'rgba(148,159,177,0.2)',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];


    public randomize():void {
        this.initValues();
    }

    // events
    public chartClicked(e:any):void {
        console.log(e);
    }

    public chartHovered(e:any):void {
        console.log(e);
    }

}
