import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home-page.component.html',
  //styleUrls: ['./home-page.component.css']
  //template: `<h1>Hello {{name}}</h1>`,
})
export class HomePageComponent { 

 name="Home";
}