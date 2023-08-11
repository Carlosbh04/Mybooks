import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { LoginStatusService } from './login-status.service.ts.service';
import { CookieService } from 'ngx-cookie-service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private readonly isLoggedInKey = 'isLoggedIn';
  private isLoggedInState = false;
  private currentEmail: string | null = null;
  private url: string;
  private loggedInStateChanged = new BehaviorSubject<boolean>(this.isLoggedInState);

  constructor(
    private http: HttpClient,
    private loginStatusService: LoginStatusService,
    private cookieService: CookieService,
  
  ) {
    this.isLoggedInState = this.cookieService.get(this.isLoggedInKey) === 'true';
    this.url = 'http://localhost:3000/user';
  }


  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(`${this.url}/login`, { email, password }).pipe(
      tap((response) => {
        localStorage.setItem('accessToken', response.token);
        this.cookieService.set('accessToken', response.token);  // Almacena el ID de usuario
        const loggedInUserName = response.user.name;
        const loggedInUserEmail = response.user.email;
        this.setLoggedInState(true, loggedInUserName, loggedInUserEmail, response.user.id); // Utiliza response.user.id
        this.loginStatusService.updateLoginStatus(true);
      }),
      catchError((error) => {
        this.setLoggedInState(false);
        return of(error);
      })
    );
  }

  logout() {
    this.setLoggedInState(false);
  }

  isLoggedIn(): boolean {
    return this.isLoggedInState;
  }

  setLoggedInState(isLoggedIn: boolean, userName?: string, userEmail?: string, loggedInUserId?: number): void {
    if (this.isLoggedInState !== isLoggedIn) {
      this.isLoggedInState = isLoggedIn;
      this.cookieService.set(this.isLoggedInKey, isLoggedIn.toString());
      if (userName) {
        localStorage.setItem('loggedInUserName', userName);
      }
      if (userEmail) {
        localStorage.setItem('loggedInUserEmail', userEmail);
        this.currentEmail = userEmail;
      }
      if (loggedInUserId !== undefined) {
        localStorage.setItem('loggedInUserId', loggedInUserId.toString());
      }
      this.loggedInStateChanged.next(isLoggedIn);
    }
  }

  getCurrentUserEmail(): string | null {
    return this.currentEmail;
  }

  saveLoginState(): void {
    localStorage.setItem(this.isLoggedInKey, this.isLoggedInState.toString());
  }

  restoreLoginState(): void {
    this.isLoggedInState = localStorage.getItem(this.isLoggedInKey) === 'true';
  }

  getLoggedInStateChanged(): Observable<boolean> {
    return this.loggedInStateChanged.asObservable();
  }

  getLoggedInUserName(): string | null {
    return localStorage.getItem('loggedInUserName');
  }

  getLoggedInUserId(): number | null {
    const userId = localStorage.getItem('loggedInUserId');
    return userId ? +userId : null;
  }
  
  getAccessToken(): string | null {
    return this.cookieService.get('accessToken'); // Obtiene el token de la cookie
  }

  getUserIdByUsername(username: string): Observable<number> {
    const url = `${this.url}/users/username/${username}`;
    return this.http.get<number>(url);
  }
}
