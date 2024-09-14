import { Component, Input } from '@angular/core';
import { ControlValueAccessor, FormsModule, NG_VALUE_ACCESSOR, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-text-area',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './text-area.component.html',
  styleUrl: './text-area.component.sass',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: TextAreaComponent,
      multi: true,
    },
  ]
})
export class TextAreaComponent implements ControlValueAccessor {

  @Input() valid: string = "true"
  @Input() title: string = ""

  input!: string
  onChange: any = () => { }
  onTouched: any = () => { }


  writeValue(input: string): void {
    this.input = input
  }
  registerOnChange(fn: any): void {
    this.onChange = fn
  }
  registerOnTouched(fn: any): void {
    this.onTouched = fn
  }

}
