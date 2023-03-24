import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {HttpService} from "../../services/http.service";
import {Icecream} from "../../model/icecream.model";

@Component({
  selector: 'app-add-icecream',
  templateUrl: './add-icecream.component.html',
  styleUrls: ['./add-icecream.component.css']
})
export class AddIcecreamComponent implements OnInit {

  constructor(private httpService: HttpService) {
  }

  name?:string
  description?:string
  price?:number
  imageURL?:string

  ngOnInit() {
  }

  async onSubmit(form: NgForm) {
    const newIcecream: Icecream = {
      "name": form.value.name,
      "description": form.value.description,
      "price": form.value.price,
      "imageURL": form.value.imageURL
    }

    this.httpService.sendData<Icecream>("/icecream", newIcecream).subscribe();
    form.resetForm();
  }
}
