import { NgModule } from '@angular/core';
import { PtItemComponent } from './pt-item.component';
import { NativeScriptModule } from "nativescript-angular/nativescript.module";

@NgModule({
    imports: [NativeScriptModule],
    exports: [PtItemComponent],
    declarations: [PtItemComponent],
    providers: [],
})
export class PTItemModule { }
