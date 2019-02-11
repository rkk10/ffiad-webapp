import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PomoArilProcessRoutingModule } from './pomo-aril-process-routing.module';
import { PomoArilProcessComponent } from './pomo-aril-process/pomo-aril-process.component';

@NgModule({
  declarations: [PomoArilProcessComponent],
  imports: [
    CommonModule,
    PomoArilProcessRoutingModule
  ]
})
export class PomoArilProcessModule { }
