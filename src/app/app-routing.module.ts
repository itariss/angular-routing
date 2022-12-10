import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PrimeiraPaginaComponent } from "./primeira-pagina/primeira-pagina.component";
import { SegundaPaginaComponent } from "./segunda-pagina/segunda-pagina.component";

const routes: Routes = [
	{ path: "primeira-pagina", component: PrimeiraPaginaComponent },
	{ path: "segunda-pagina", component: SegundaPaginaComponent },
	{ path: "", redirectTo: "primeira-pagina", pathMatch: "full" },
	{ path: "**", component: NotFoundComponent }
];

@NgModule({
	declarations: [],
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
