import { Component, OnInit } from '@angular/core';
import { SearchModalComponent } from '../search-modal/search-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-channels',
  templateUrl: './channels.component.html',
  styleUrls: ['./channels.component.scss']
})
export class ChannelsComponent implements OnInit {

constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

 openFormModal() {
  const modalRef = this.modalService.open(SearchModalComponent);
  
  modalRef.result.then((result) => {
    console.log(result);
  }).catch((error) => {
    console.log(error);
  });
}

}
