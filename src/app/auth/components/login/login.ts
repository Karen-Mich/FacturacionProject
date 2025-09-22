import { Component } from '@angular/core';
import { MatIconModule } from "@angular/material/icon";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatInputModule } from "@angular/material/input";
import { MatButtonModule } from '@angular/material/button';
import { Button } from '../../../components/button/button';
import { LabelComponent } from '../../../components/label/label';
import { InputComponent } from '../../../components/input/input';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    Button,
    LabelComponent,
    InputComponent
  ],
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {}
