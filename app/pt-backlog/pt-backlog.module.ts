import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PtBacklogComponent } from './pt-backlog.component';
import { PipesModule } from './pipes/pipes.module';
import { PtItemListComponent } from './pt-item-list/pt-item-list.component';
import { PTItemModule } from './pt-item/pt-item.module';
import { BacklogService } from '../services/backlog.service';

@NgModule({
    imports: [
        NativeScriptModule,
        PTItemModule,
        PipesModule
    ],
    exports: [PtBacklogComponent],
    declarations: [
        PtBacklogComponent,
        PtItemListComponent,
    ],
    providers: [
        BacklogService
    ],
})
export class PtBacklogModule { }
