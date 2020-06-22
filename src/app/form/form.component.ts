import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, ValidatorFn, Validators} from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public addressFormGroup: FormGroup;
  public emailFormControl: FormControl;
  public customerFormGroup: FormGroup;

  constructor() {
    this.addressFormGroup = new FormGroup({
      street: new FormControl("", [Validators.required]),
      city: new FormControl("", [Validators.required]),
      zipCode: new FormControl(),
      country: new FormControl()
    });

    this.emailFormControl = new FormControl("",
      [
        Validators.required,
        Validators.email,
      ]
    );

    this.customerFormGroup = new FormGroup({
      firstName: new FormControl("", [Validators.required, this.forbiddenNameValidator(/calu/i)]),
      lastName: new FormControl("", [Validators.required]),
      email: this.emailFormControl,
      phone: new FormControl(""),
      address: new FormControl()
    });
  }

  ngOnInit(): void {
  }

  onSubmit() {
    console.log({
      ...this.customerFormGroup.value
    })
  }

  forbiddenNameValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} | null => {
      const forbidden = nameRe.test(control.value);
      return forbidden ? {'forbiddenName': {value: control.value}} : null;
    };
  }

}
