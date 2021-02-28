import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  
  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  closeModal() {
    this.appService.modal = false
  }

}
