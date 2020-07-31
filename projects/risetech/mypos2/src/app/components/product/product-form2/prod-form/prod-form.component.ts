import { Component, OnInit } from '@angular/core';
import { ProdFormService } from 'src/app/services/prod-form-service/prod-form.service';
// import { ProdService } from '../../../../services/prod.service';
@Component({
  selector: 'app-prod-form',
  templateUrl: './prod-form.component.html',
  styleUrls: ['./prod-form.component.css']
})
export class ProdFormComponent implements OnInit {

  constructor(private prodService: ProdFormService) { }

  ngOnInit() {
    // this.prodService.getAllCategories().subscribe(result => { console.log("get all categories: ", result) })
  }

}
