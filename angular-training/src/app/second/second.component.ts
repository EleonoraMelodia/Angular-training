import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrl: './second.component.css'
})
export class SecondComponent {
  @ViewChild('inputName') inputName! : ElementRef<HTMLInputElement>
  
  
  onClick() {
    console.log(this.inputName.nativeElement.value);
    
  }


}
