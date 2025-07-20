// apology-dialog.component.ts
import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@Component({
  selector: 'app-apology-dialog',
  standalone: true,
  imports: [CommonModule, MatButtonModule, MatDialogModule],
  template: `
    <div class="dialog-container">
      <button class="close-button" (click)="dialogRef.close()">&times;</button>
      <h2 class="title">I’m really sorry 😔</h2>
      <p class="message">{{ data.message }}</p>
      <div class="action-buttons">
        <!-- <button mat-button color="primary" (click)="dialogRef.close('yes')">Yes 💗</button>
        <button mat-button color="warn" (click)="dialogRef.close('no')">No 😢</button> -->
        <button class="yes-btn" (click)="dialogRef.close('yes')">Yes 💗</button>
        <button class="no-btn" (click)="dialogRef.close('no')">No 😢</button>

      </div>
    </div>
  `,
  styles: [`
    .dialog-container {
      position: relative;
      background: linear-gradient(to bottom, #ffe4ec, #fce1f2);
      padding: 30px;
      border-radius: 20px;
      font-family: 'Comic Sans MS', cursive, sans-serif;
      color: #880e4f;
      max-width: 600px;
      text-align: center;
      box-shadow: 0 10px 30px rgba(255, 105, 180, 0.2);
    }
    .yes-btn, .no-btn {
      padding: 10px 20px;
      font-size: 16px;
      border: none;
      border-radius: 30px;
      cursor: pointer;
      transition: background-color 0.3s ease;
    }

    .yes-btn {
      background-color: #f48fb1;
      color: white;
    }

    .yes-btn:hover {
      background-color: #ec407a;
    }

    .no-btn {
      background-color: #ce93d8;
      color: white;
    }

    .no-btn:hover {
      background-color: #ab47bc;
    }
    .title {
      font-size: 24px;
      margin-bottom: 15px;
    }
    .message {
      font-size: 18px;
      margin-bottom: 25px;
      line-height: 1.5;
    }
    .action-buttons button {
      margin: 0 12px;
      font-size: 16px;
      border-radius: 30px;
      padding: 10px 24px;
    }
    .close-button {
      position: absolute;
      top: 10px;
      right: 10px;
      background: transparent;
      border: none;
      font-size: 28px;
      color: #880e4f;
      cursor: pointer;
    }
  `]
})
export class ApologyDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: { message: string },
    public dialogRef: MatDialogRef<ApologyDialogComponent>
  ) {}
}
