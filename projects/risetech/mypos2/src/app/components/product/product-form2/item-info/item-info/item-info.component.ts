import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdFormService } from 'src/app/services/prod-form-service/prod-form.service';
@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  detailsForm: FormGroup;
  categories;
  constructor(private fb: FormBuilder, private prodFromService: ProdFormService) {
    this.detailsForm = fb.group({
      barcodeNo: [""],
      productId: [""],
      name: [""],
      categoryId: [""],
      type: [""],
      isbn: [""],
      tags: [""],
      manufacturer: [""],
      description: [""],
      weight: [""],
      measurement: [""],
    })
  }

  ngOnInit() {
    this.prodFromService.getAllCategories().subscribe(res => {
      console.log("all categories res :", res);
      this.categories = res.data
    })
  }
  submitDetails() {
    console.log("mValue", this.detailsForm.value);
    let payload = this.detailsForm.value;
    this.prodFromService.postProduct(payload).subscribe(res => {
      console.log("res sumbit details :", res)
    })
  }

}
