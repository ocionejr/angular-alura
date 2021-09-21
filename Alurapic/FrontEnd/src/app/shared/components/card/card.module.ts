import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CardComponent } from './cad.component';

@NgModule({
  declarations: [CardComponent],
  exports: [CardComponent],
  imports: [CommonModule],
})
export class CardModule {}
