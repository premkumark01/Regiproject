import { Component, OnInit } from '@angular/core';
import { NgForm,FormGroup,FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
    
  
  user=new FormGroup({
    mname:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(20),Validators.pattern("[a-zA-Z ]*")]),
    username:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("[a-zA-Z ]*")]),
    email:new FormControl('',[Validators.required,Validators.email]),
    street:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("[a-zA-Z ]*")]),
    suite:new FormControl('',Validators.required),
    city:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10),Validators.pattern("[a-zA-Z ]*")]),
    zipcode:new FormControl('',Validators.required),
    lat:new FormControl('',Validators.required),
    lng:new FormControl('',Validators.required),
    phone:new FormControl('',Validators.required),
    website:new FormControl('',Validators.required),
    cname:new FormControl('',Validators.required),
    catchphrase:new FormControl('',Validators.required),
    bs:new FormControl('',Validators.required)
}
)


  ngOnInit()
{

}

  onSubmit()
  {
    alert(JSON.stringify(this.user.value))
  }
}
