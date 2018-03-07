import { Component ,OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import {ContentPageService} from './content-page.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-body',
  templateUrl: './content-page.component.html',
  styleUrls: ['./content-page.component.css'],
  providers:[ContentPageService]
  //template: `<h1>Hello {{name}}</h1>`,
})
export class ContentPageComponent implements OnInit { 
  //name = 'Angular'; 
  myBlueForm: FormGroup;
  isHome:boolean=false;
  data:any;
   constructor(private _fb: FormBuilder,private contentService:ContentPageService){}
   ngOnInit() {
       this.buildMyblueFormModel();

       setTimeout(()=>{    //<<<---    using ()=> syntax
        this.myInputFunction();
        },5000);
       //this.myInputFunction();
  
   }
   buildMyblueFormModel(){
    this.myBlueForm = this._fb.group({
        phoneNumber: ['123-123-1234', [<any>Validators.required]],
        password:['Password123@',[<any>Validators.required]]
    })
   }

myInputFunction(){
var myInput = (<HTMLInputElement>document.getElementById("psw"));
var letter = (<HTMLInputElement>document.getElementById("letter"));
var capital = (<HTMLInputElement>document.getElementById("capital"));
var number = (<HTMLInputElement>document.getElementById("number"));
var length = (<HTMLInputElement>document.getElementById("length"));
var specialChar = (<HTMLInputElement>document.getElementById("specialChar"));
 // When the user clicks on the password field, show the message box
myInput.onfocus = function() {
    document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
    document.getElementById("message").style.display = "none";
}


// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }

  var specialCharcters=/[!@#$%^&*]/g;
  if(myInput.value.match(specialCharcters)) {  
    specialChar.classList.remove("invalid");
    specialChar.classList.add("valid");
  } else {
    specialChar.classList.remove("valid");
    specialChar.classList.add("invalid");
  }

}

   }



 myFunction() {
    var x = (<HTMLInputElement>document.getElementById("psw"));
    if (x.type === "text") {
        x.type = "password";
    } else {
        x.type = "text";
    }
}

showHomePage(myBlueForm:any){
  console.log("Data",this.myBlueForm.value);
  let requestBody = {
     "phoneNumber":this.myBlueForm.value.phoneNumber,
     "password":this.myBlueForm.value.password
  }

  this.contentService.getData(requestBody).subscribe(response => {
    this.data=response;
    if(this.data.status == 0){
      this.isHome = true;
    }
  })
  
    
}
}
