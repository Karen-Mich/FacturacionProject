import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-label',
  imports: [CommonModule],
  templateUrl: './label.html',
  styleUrl: './label.css'
})
export class LabelComponent {
  @Input() text: string = '';
  @Input() required: boolean = false;
}