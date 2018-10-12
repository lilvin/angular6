import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent} from './pages/dashboard/dashboard.component';


const routes: Routes = [
    { path: '',  redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: 'dashboard', component: DashboardComponent },
];


export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);