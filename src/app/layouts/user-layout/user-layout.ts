import { Component } from '@angular/core';
import { UserNav } from '../../components/user-nav/user-nav';
import { RouterOutlet } from '@angular/router';
import { UserFooter } from '../../components/user-footer/user-footer';

@Component({
  selector: 'app-user-layout',
  imports: [UserNav, RouterOutlet, UserFooter],
  templateUrl: './user-layout.html',
  styleUrl: './user-layout.scss',
})
export class UserLayout {}
