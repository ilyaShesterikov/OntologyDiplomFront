import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const USERNAME_KEY = 'AuthUsername';
const AUTHORITIES_KEY = 'AuthAuthorities';
const CLASSES = 'Classes';
const OPROPS = 'oprops';
const DPROPS = 'dprops';
const FILE = 'FILE';

@Injectable({
  providedIn: 'root'
})

export class TokenStorageService {
  private roles: Array<string> = [];
  constructor() { }

  signOut() {
    window.sessionStorage.clear();
  }

  public saveToken(token: string) {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  public getToken(): string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  public saveUsername(username: string) {
    window.sessionStorage.removeItem(USERNAME_KEY);
    window.sessionStorage.setItem(USERNAME_KEY, username);
  }

  public getUsername(): string {
    return sessionStorage.getItem(USERNAME_KEY);
  }

  public saveAuthorities(authorities: string[]) {
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY, JSON.stringify(authorities));
  }

  public getAuthorities(): string[] {
    this.roles = [];

    if (sessionStorage.getItem(TOKEN_KEY)) {
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority => {
        this.roles.push(authority.authority);
      });
    }

    return this.roles;
  }

  public saveClasses(value: string[]) {
    window.sessionStorage.removeItem(CLASSES);
    window.sessionStorage.setItem(CLASSES, JSON.stringify(value));
  }

  public getClasses(): string[] {
    return JSON.parse(sessionStorage.getItem(CLASSES));
  }

  public saveDProps(value: string[]) {
    window.sessionStorage.removeItem(DPROPS);
    window.sessionStorage.setItem(DPROPS, JSON.stringify(value));
  }

  public getDProps(): string[] {
    return JSON.parse(sessionStorage.getItem(DPROPS));
  }
  public saveOProps(value: string[]) {
    window.sessionStorage.removeItem(OPROPS);
    window.sessionStorage.setItem(OPROPS, JSON.stringify(value));
  }

  public getOProps(): string[] {
    return JSON.parse(sessionStorage.getItem(OPROPS));
  }

  public saveFile(value: string) {
    window.sessionStorage.removeItem(FILE);
    window.sessionStorage.setItem(FILE, value);
  }

  public getFile(): string {
    return sessionStorage.getItem(FILE);
  }
}
