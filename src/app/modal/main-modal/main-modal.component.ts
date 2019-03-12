import { Component, OnInit, Input, Output, EventEmitter, TemplateRef, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService, ModalDirective, ModalOptions } from 'ngx-bootstrap';

@Component({
  selector: 'app-main-modal',
  templateUrl: './main-modal.component.html',
  styleUrls: ['./main-modal.component.scss']
})
export class MainModalComponent implements OnInit {
  @Input() title = 'Atenção';
  @Input() mainClickMethod: any;
  @Input() open: any;
  @Input() openEvent: EventEmitter<string>;
  @Output() mainClicked: EventEmitter<{ state: any }> = new EventEmitter();
  @ViewChild(ModalDirective) modal: ModalDirective;

  public modalRef: BsModalRef;

  config: ModalOptions = {
    backdrop: 'static',
    show: false,
    keyboard: false,
  };

  constructor(private modalService: BsModalService) { }

  ngOnInit() {
    this.openEvent.subscribe((command: string) => {
      if (command === 'open') {
        this.modal.show();
      }
    });
  }

  mainClick() {
    this.mainClicked.emit();
    return this.mainClickMethod();
  }

  openModal(template: ElementRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  hideChildModal() {
    this.modal.hide();
  }
}
