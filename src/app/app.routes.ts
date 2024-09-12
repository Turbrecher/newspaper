import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: "",
        loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),

    },

    {
        path: "",
        loadChildren: () => import('./writers/writers.module').then(m => m.WritersModule)
    },

    {
        path: "",
        loadChildren: () => import('./shared/shared.module').then(m => m.SharedModule)
    },
];
