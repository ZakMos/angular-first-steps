import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss']
})
export class ArticleComponent implements OnInit {

  myForm=new FormGroup({
    name:new FormControl(''),
    age:new FormControl(''),
    address:new FormControl(''),
    job:new FormControl('')
  });

  constructor(private service:MyserviceService) { }

  ngOnInit() {
    this.service.sayHello("Article");
  }
  onSubmit(){
    console.log(this.myForm.value);
  }
}
