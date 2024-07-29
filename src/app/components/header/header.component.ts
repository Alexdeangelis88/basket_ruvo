import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { LogInComponent } from './log-in/log-in.component';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  display = "none";
  constructor( private dialog: MatDialog) { } 

  ngOnInit(): void {
  }

  login(){
    let tag = document.getElementById("navbar-principale");
    tag?.classList.remove("position-custom");

    const dialogRef = this.dialog.open(LogInComponent, {
      maxHeight: 600,
      maxWidth: 600
    });

    dialogRef.afterClosed().subscribe(r => {
      tag?.classList.add("position-custom");

    });
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }

}
