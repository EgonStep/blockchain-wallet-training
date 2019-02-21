import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModalTitleService {
  modalTitle: string;

  setTitle(title: string) {
    this.modalTitle = title;
  }
}
