import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRHVuYSIsImlhdCI6MTUxNjIzOTAyMn0.H6j8Hf4fe-T0y6DG35QB9E-lS2AgFKv21dzmmtEjx58";

  constructor() { }

  estaAutenticado(): boolean {
    return !!sessionStorage.getItem("access-token");
  }

  login(email: string, senha: string): boolean {
    if (email === "admin@admin.com.br" && senha === "alugase") {
      sessionStorage.setItem("access-token", this.accessToken);
      return true;
    }
    return false;
  }

  logout() {
    sessionStorage.clear();
  }
}
