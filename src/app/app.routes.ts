import { Routes } from '@angular/router';
import { AuthGuardService } from './shared/auth-guard.service';

export const routes: Routes = [
    {
        path:'*',
        pathMatch:"full",
        redirectTo:"login"
    },
      // Lazy loading (loadChildren)
    {
        path:'login',
        loadChildren: () =>
            import('./login/login.module').then((m)=> m.LoginModule)
    },
    {
        path:'chat',
        loadChildren: () =>
            import('./chat/chat.module').then((m)=> m.ChatModule),
        canActivate: [AuthGuardService]
    }
];
