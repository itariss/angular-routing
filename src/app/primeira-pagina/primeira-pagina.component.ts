import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
	selector: "app-primeira-pagina",
	templateUrl: "./primeira-pagina.component.html",
	styleUrls: ["./primeira-pagina.component.css"]
})
export class PrimeiraPaginaComponent implements OnInit {
	constructor(private router: Router) {}

	irParaSegundaPagina() {
		this.router.navigate(["segunda-pagina"]);
	}

	ngOnInit(): void {}
}
