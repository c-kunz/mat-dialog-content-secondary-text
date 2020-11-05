import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  @ViewChild('dialogTemplate', { static: true })
  private dialogTemplate: TemplateRef<any>;

  actions = [ 'Cancel', 'Accept' ];

  constructor(private matDialog: MatDialog) {}

  ngOnInit(): void {
    this.matDialog.open(this.dialogTemplate);
  }

}
