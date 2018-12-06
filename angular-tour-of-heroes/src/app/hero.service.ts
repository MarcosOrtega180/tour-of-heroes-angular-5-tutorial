import {Injectable} from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {of} from 'rxjs/observable/of';
import {Observable} from 'rxjs/Observable';
import {MessageService} from './message.service';
import {HttpClient} from "@angular/common/http";
import {catchError, map, tap} from "rxjs/operators";

@Injectable()
export class HeroService {
//  get hero by id. will 404 if id not found

    private heroesUrl = 'api/heroes'; //URL TO WEB API
    //get all heroes, this is the real query
    getHeroes(): Observable<Hero[]> { //getHeroes es una clase que instancia a la clase Hero[]
        return this.http.get<Hero[]>(this.heroesUrl)
            .pipe(
                tap(heroes => this.log(`fetched heroes`)),
                catchError(this.handleError('getHeroes', []))
            );
    }

    //get a hero by its id
    getHero(id: number): Observable<Hero> {
        const url = `${this.heroesUrl}/${id}`;
        return this.http.get<Hero>(url).pipe(
            tap(_ => this.log(`fetched hero id=${id}`)),
            catchError(this.handleError<Hero>(`getHero id=${id}`))
        );
    }

    //PUT: update the hero on the service
    // updateHero(hero: Hero):Observable<any>{
    //   return this.http.put(this.heroesUrl, hero, httpOptions).pipe(
    //     tap(_=>this.log(`update hero id=${hero.id}`)),
    //     catchError(this.handleError<any>('updateHero'))
    //   )
    // }

    /**
     * Handle Http operation that failed.
     * Let the app continue.
     * @param operation - name of the operation that failed
     * @param result - optional value to return as the observable result
     */
    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            this.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }

    constructor(
        private http: HttpClient,
        private messageService: MessageService
    ) {
    }

    private log(message: string) {
        this.messageService.add("Heroservice: " + message);
    }
}
