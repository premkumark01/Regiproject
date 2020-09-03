import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  user = {
    id:0,
    name:'',
    username:'',
    email:'',
    address:{
      street:'',
      suite:'',
      city:'',
      zipcode:'',
      geo:{
        lat:'',
        lng:''
      }
    },
    phone:'',
    website:'',
    company:{
      name:'',
      catchPhrase:'',
      bs:''
    }
  }

  onSubmit(theForm: NgForm)
  {
    this.user.id=this.user.id+1;
    this.user.name=theForm.value.mname;
    this.user.username=theForm.value.username;
    this.user.email=theForm.value.email;
    this.user.address.street=theForm.value.street;
    this.user.address.suite=theForm.value.suite;
    this.user.address.city=theForm.value.city;
    this.user.address.zipcode=theForm.value.zipcode;
    this.user.address.geo.lat=theForm.value.lat;
    this.user.address.geo.lng=theForm.value.lng;
    this.user.phone=theForm.value.phone;
    this.user.website=theForm.value.website;
    this.user.company.name=theForm.value.cname;
    this.user.company.catchPhrase=theForm.value.catchphrase;
    this.user.company.bs=theForm.value.bs;

    console.log(this.user);
  }
}
