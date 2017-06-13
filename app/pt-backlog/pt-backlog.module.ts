import { NgModule } from '@angular/core';

import { NativeScriptModule } from "nativescript-angular/nativescript.module";

import { PtBacklogComponent } from './pt-backlog.component';
import { PipesModule } from './pipes/pipes.module';
import { PtItemListComponent } from './pt-item-list/pt-item-list.component';

@NgModule({
    imports: [
        NativeScriptModule,
        PipesModule
    ],
    exports: [PtBacklogComponent],
    declarations: [
        PtBacklogComponent,
        PtItemListComponent,
    ],
    providers: [],
})
export class PtBacklogModule { }
