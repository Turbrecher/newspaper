import { Component, forwardRef, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule, FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule],
  templateUrl: './input.component.html',
  styleUrl: './input.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: InputComponent,
      multi: true,
    },
  ]
})
export class InputComponent implements ControlValueAccessor {

  @Input() title: string = ""
  @Input() type: string = "text"
  @Input() valid: string = "true"


  //CONTROL VALUE ACCESSORS ATTRIBUTES.
  input!: string
  onChange: any = () => { }
  onTouched: any = () => { }
  isDisabled!: boolean

  //CONTROL VALUE ACCESSORS METHODS.
  writeValue(input: string): void {
    this.input = input
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }



  constructor() {
  }


}
