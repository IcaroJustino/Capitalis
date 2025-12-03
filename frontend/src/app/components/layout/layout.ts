import { Component } from '@angular/core';
import { ɵEmptyOutletComponent } from '@angular/router';
import { Header } from '../header/header';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ɵEmptyOutletComponent, Header, Footer],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class Layout {}
