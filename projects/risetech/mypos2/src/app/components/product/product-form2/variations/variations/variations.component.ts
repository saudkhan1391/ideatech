import { Component, OnInit } from '@angular/core';
import { ProdFormService } from 'src/app/services/prod-form-service/prod-form.service';
import { FormBuilder, FormGroup } from '@angular/forms'
import { MessageService } from 'primeng/api';
@Component({
  selector: 'app-variations',
  templateUrl: './variations.component.html',
  styleUrls: ['./variations.component.css']
})
export class VariationsComponent implements OnInit {
  variationsForm: FormGroup;
  constructor(private prodFormService: ProdFormService, private fb: FormBuilder, private messageService: MessageService) {
    this.variationsForm = fb.group({
      // productId: "5f229cf25e52fc432c7ff700",
      productId: [""],
      details: [""],
      color: [""],
      size: [""]
    })
  }

  ngOnInit() {
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
  submitVaritaions() {
    let payload = this.variationsForm.value;
    console.log(" Payload submit variations :", payload);
    this.prodFormService.postProductVariations(payload).subscribe(res => {
      if (res.status == 200 && res.data) {
        console.log("response submit variations :", res)
        this.notifySuccess("Success", "Variatons added Successfully")
      } else {
        this.notifyError("Error", "Something went wrong")
      }
    })
  }

}
