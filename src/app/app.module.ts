import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ClienteInserirComponent } from './clientes/cliente-inserir/cliente-inserir.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule} from '@angular/common/http';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ClienteListaComponent } from './clientes/cliente-lista/cliente-lista.component';
import { MatExpansionModule } from '@angular/material/expansion';
import { ClienteService } from './clientes/cliente.service';
import { AppRoutingModule } from './app-routing.module';
import { Cadastro } from './cadastro/cliente.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { AgendaComponent } from './agenda/agenda.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MenuComponent } from './menu/menu.component';


@NgModule({
  declarations: [
    AppComponent, ClienteInserirComponent, CabecalhoComponent, ClienteListaComponent,Cadastro,MenuComponent, AgendaComponent
  ],
  imports: [
    BrowserModule, FormsModule, BrowserAnimationsModule,
    MatInputModule, MatCardModule, MatButtonModule, MatToolbarModule,MatNativeDateModule,MatDividerModule,
    MatExpansionModule,HttpClientModule,MatDatepickerModule,AppRoutingModule, LayoutModule, MatSidenavModule, MatIconModule, MatListModule,
  ],
  providers: [ClienteService, MatDatepickerModule],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
