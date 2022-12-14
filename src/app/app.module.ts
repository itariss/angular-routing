import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { PrimeiraPaginaComponent } from "./primeira-pagina/primeira-pagina.component";
import { SegundaPaginaComponent } from "./segunda-pagina/segunda-pagina.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { PaginaParametrosComponent } from "./pagina-parametros/pagina-parametros.component";
import { PaginaProtegidaComponent } from "./pagina-protegida/pagina-protegida.component";
import { LoginComponent } from "./login/login.component";
import { FormsModule } from "@angular/forms";

@NgModule({
	declarations: [
		AppComponent,
		PrimeiraPaginaComponent,
		SegundaPaginaComponent,
		NotFoundComponent,
		PaginaParametrosComponent,
		PaginaProtegidaComponent,
		LoginComponent
	],
	imports: [BrowserModule, AppRoutingModule, FormsModule],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {}
