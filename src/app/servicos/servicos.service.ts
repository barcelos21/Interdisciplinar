import { Injectable } from '@angular/core'
import { Http } from '@angular/http'
import { Servico } from './servico/servico.model'
import { ALL_PLACES_API } from '../app.api'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()

export class ServicosService{

	constructor(private http:Http){};

	listarServicos(): Observable<Servico[]> {
		return this.http.get(`${ALL_PLACES_API}/servicos`).map(response => response.json());
	}

	servicoPorId(id:string): Observable<Servico> { 
		return this.http.get(`${ALL_PLACES_API}/servicos/${id}`) .map(response => response.json()); 
	}


}