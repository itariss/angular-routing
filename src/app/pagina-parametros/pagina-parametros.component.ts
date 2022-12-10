import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
	selector: "app-pagina-parametros",
	templateUrl: "./pagina-parametros.component.html",
	styleUrls: ["./pagina-parametros.component.css"]
})
export class PaginaParametrosComponent implements OnInit {
	id: number | null = null;
	idade: number | null = null;
	nome: string | null = "";
	constructor(private route: ActivatedRoute) {}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
			this.id = Number(params.get("id"));
		});

		this.route.queryParamMap.subscribe(params => {
			this.nome = String(params.get("nome"));
			this.idade = Number(params.get("idade"));
		});
	}
}
