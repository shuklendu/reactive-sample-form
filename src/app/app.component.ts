import { Component, OnInit, VERSION } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormArray,
} from '@angular/forms';

function emailMatcher(c: AbstractControl): { [key: string]: boolean } | null {
  const emailControl = c.get('email');
  const confirmControl = c.get('confirmEmail');

  if (emailControl.pristine || confirmControl.pristine) {
    return null;
  }

  if (emailControl.value === confirmControl.value) {
    return null;
  }
  return { match: true };
}

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  name = 'Angular ' + VERSION.major;
  customerForm: FormGroup;
  emailMessage: string;
  switch_expression = 'success';
  date = '2021-09-03T14:21:27.403+00:00';
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.customerForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.maxLength(50)]],
      emailGroup: this.fb.group(
        {
          email: ['', [Validators.required, Validators.email]],
          confirmEmail: ['', Validators.required],
        },
        { validator: emailMatcher }
      ),
    });
  }
  save(): void {
    console.log(this.customerForm);
    console.log('Saved: ' + JSON.stringify(this.customerForm.value));
  }
  populateTestData(): void {
    this.customerForm.patchValue({
      firstName: 'jack',
      lastName: 'Harness',
      emailGroup: {
        email: 'abc@xyz.com',
        confirmEmail: 'abc@xyz.com',
      },
    });
  }
}
