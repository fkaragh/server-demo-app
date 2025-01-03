import { AfterViewInit, Component, ElementRef, EventEmitter, OnInit, output, Output, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from "../../../shared/control/control.component";
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements OnInit, AfterViewInit {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  // @Output() add = new EventEmitter<{title: string, text: string}>();
  add = output<{title: string, text: string}>();

  enteredTitle = '';
  enteredText = '';

  ngAfterViewInit() {
    console.log('AFTER view init');
    console.log(this.form?.nativeElement);
  }

  ngOnInit() {
    console.log('OnInit');
    console.log(this.form?.nativeElement);
  }

  onSubmit(title:string, ticketText: string){
    this.add.emit({title: title, text:ticketText });
    this.enteredTitle = '';
    this.enteredText = '';  
  }
}
