import { Component, inject, OnInit } from '@angular/core';
import { AvatarModule } from 'primeng/avatar';
import { BadgeModule } from 'primeng/badge';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { RippleModule } from 'primeng/ripple';
import { MenuItem } from 'primeng/api';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-nav',
  imports: [
    AvatarModule,
    BadgeModule,
    MenubarModule,
    InputTextModule,
    RippleModule,
    CommonModule,
    RouterLink,
  ],
  templateUrl: './user-nav.html',
  styleUrl: './user-nav.scss',
})
export class UserNav implements OnInit {
  private router = inject(Router);

  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        path: 'home',
      },
      {
        label: 'Movies',
        path: 'movies',
      },
      {
        label: 'TV Shows',
        path: 'tv-shows',
      },
      {
        label: 'Favorites',
        path: 'favorites',
      },
    ];
  }
  isUserMenuOpen = false;

  toggleUserMenu() {
    this.isUserMenuOpen = !this.isUserMenuOpen;
  }

  closeUserMenu() {
    this.isUserMenuOpen = false;
  }
  logout() {
    // منطق تسجيل الخروج
  }

  goToSearch() {
    if (this.router.url.startsWith('/home')) {
      const el = document.getElementById('hero-search');
      el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
      el?.focus();
    } else {
      this.router.navigate(['/home'], { fragment: 'hero-search' });
    }
  }
}
