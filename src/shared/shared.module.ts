import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { ExponentialStrengthPipe } from './pipes/exponential-strength.pipe';



@NgModule({
  declarations: [HighlightDirective, ExponentialStrengthPipe],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
