import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProdFormService } from 'src/app/services/prod-form-service/prod-form.service';
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-item-info',
  templateUrl: './item-info.component.html',
  styleUrls: ['./item-info.component.css']
})
export class ItemInfoComponent implements OnInit {

  detailsForm: FormGroup;
  categories;
  constructor(private fb: FormBuilder, private prodFromService: ProdFormService, private messageService: MessageService) {
    this.detailsForm = fb.group({
      barcodeNo: [""],
      productId: ["", [Validators.required]],
      name: ["", [Validators.required]],
      categoryId: ["", [Validators.required]],
      type: ["", [Validators.required]],
      isbn: ["", [Validators.required]],
      tags: ["", [Validators.required]],
      manufacturer: ["", [Validators.required]],
      description: ["", [Validators.required]],
      weight: ["", [Validators.required]],
      measurement: ["", [Validators.required]],
    })
  }

  ngOnInit() {
    this.prodFromService.getAllCategories().subscribe(res => {
      console.log("all categories res :", res);
      this.categories = res.data
    })
  }
  notifySuccess(summary: string, detail: string = "") {
    this.messageService.add({
      severity: "success",
      summary: summary,
      detail: detail
    });
  }
  notifyError(summary: string, detail: string = "") {
    this.messageService.add({
      severity: "error",
      summary: summary,
      detail: detail
    });
  }
  submitDetails() {
    console.log("mValue", this.detailsForm.value);
    if (this.detailsForm.invalid) {
      this.notifyError("Error", "All Fields must be validated")
    }
    let payload = this.detailsForm.value;
    this.prodFromService.postProduct(payload).subscribe(res => {
      console.log("res sumbit details :", res);
      this.notifySuccess("Succeess", "Product Details added")
    })
  }

}
