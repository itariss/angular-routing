import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth.service";

@Component({
	selector: "app-login",
	templateUrl: "./login.component.html",
	styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
	constructor(private auth: AuthService, private router: Router) {}

	login(): void {
		if (this.auth.login(this.email, this.senha)) {
			this.router.navigate(["pagina-protegida"]);
			console.log("sim");

			return;
		}

		alert("Login inválido");
		this.email = "";
		this.senha = "";
	}
	email: string = "";
	senha: string = "";

	ngOnInit(): void {}
}
