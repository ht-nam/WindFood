import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { materialComponent } from 'src/utils/helpers/installation';
import { DashboardsComponent } from './dashboards.component';
// import { ChartModule } from 'angular-highcharts';

const routes: Routes = [
    {
        path: '',
        children: [
            { path: '', component: DashboardsComponent }
        ]
    },
];

@NgModule({
    declarations: [DashboardsComponent],
    imports: [RouterModule.forChild(routes), materialComponent],
    exports: [RouterModule]
})
export class DashboardsRoutingModule { }
