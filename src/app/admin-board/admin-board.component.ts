import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators,FormsModule, } from '@angular/forms';  
import {CommonService} from '../common.service';  


@Component({
  selector: 'app-admin-board',
  templateUrl: './admin-board.component.html',
  styleUrls: ['./admin-board.component.css']
})
export class AdminBoardComponent implements OnInit {
  // type AdminType = ;
  public Repdata: Array<{id: String, password: String}>=[];  
  // public Repdata:any;
  constructor(private newService: CommonService) { }
  
  valbutton ="Save";  
  ngOnInit() {    
    this.newService.GetUser().subscribe(data =>  this.assignToLocal(data));
    // console.log(this.newService.GetUser());
    // this.Repdata = [{id:"abcd",password:"bcdef"}];
    console.log(this.Repdata);  

  }

  assignToLocal(data){
      this.Repdata = data;
  }

}
