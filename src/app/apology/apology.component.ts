// apology.component.ts
import { Component } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { ApologyDialogComponent } from '../apology-dialog/apology-dialog.component';

@Component({
  selector: 'app-apology',
  standalone: true,
  imports: [CommonModule, MatDialogModule, HttpClientModule],
  template: `
    <div class="container">
      <button mat-raised-button color="accent" (click)="openApologyDialog()">
        💌 Tap to See 😞😥
      </button>
      <div class="hearts-container">
        <span *ngFor="let heart of hearts" class="animated-heart" [style.left.%]="heart.left" [style.animationDuration.s]="heart.duration">
          {{ heart.symbol }}
        </span>
      </div>
    </div>
  `,
  styles: [`
    .container {
      height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      background: linear-gradient(120deg, #ffe4ec, #fce1f2, #ffe4ec);
      background-size: 600% 600%;
      animation: gradientShift 10s ease infinite;
      position: relative;
      overflow: hidden;
    }

    button {
      background-color: #ffc1e3;
      color: #880e4f;
      font-size: 1.6rem;
      padding: 16px 34px;
      border: 2px solid #f8bbd0;
      border-radius: 40px;
      box-shadow: 0 10px 20px rgba(255, 182, 193, 0.3);
      font-family: 'Comic Sans MS', cursive, sans-serif;
      cursor: pointer;
      transition: transform 0.25s, box-shadow 0.25s;
    }

    button:hover {
      transform: scale(1.05);
      box-shadow: 0 14px 28px rgba(255, 182, 193, 0.4);
    }

    .hearts-container {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      overflow: hidden;
    }

    .animated-heart {
      position: absolute;
      top: -30px;
      font-size: 1.5rem;
      animation-name: fall;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
    }

    @keyframes fall {
      0% {
        transform: translateY(-30px) scale(1);
        opacity: 1;
      }
      100% {
        transform: translateY(110vh) scale(1.2);
        opacity: 0;
      }
    }

    @keyframes gradientShift {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
  `]
})
export class ApologyComponent {
  hearts = Array.from({ length: 20 }, (_, i) => ({
    left: Math.random() * 100,
    duration: (Math.random() * 10 + 5).toFixed(2),
    symbol: this.randomSymbol()
  }));

  constructor(private dialog: MatDialog, private http: HttpClient) {}

  openApologyDialog() {
    this.http.get<{ message: string }>('http://apologycode.onrender.com/api/sorry').subscribe(res => {
      const dialogRef = this.dialog.open(ApologyDialogComponent, {
        data: { message: res.message },
        width: '600px',
        panelClass: 'light-pink-dialog'
      });
  
      dialogRef.afterClosed().subscribe(response => {
        if (response === 'yes' || response === 'no') {
          // this.http.post('http://localhost:8080/api/apology-response', { response })
          //   .subscribe(() => console.log('Response email sent.'));
            this.http.post('apologycode.onrender.com/api/apology-response', { response })
            .subscribe(() => console.log('Response email sent.'));
        }
      });
    });
  }

  randomSymbol(): string {
    const symbols = ['💖', '💗', '💞', '✨', '💘', '💕', '🌸'];
    return symbols[Math.floor(Math.random() * symbols.length)];
  }
}
