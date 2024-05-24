import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, of, tap } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountriesService {

  private API_URL: string = 'https://restcountries.com/v3.1';


  constructor(private http: HttpClient) { }


  searchCountryByAlphaCode( code: string ): Observable<Country[]> {
    const url = `${ this.API_URL }/alpha/${ code }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( () => of([]) )
      );
  }


  searchCapital( term: string ): Observable<Country[]> {
    const url = `${ this.API_URL }/capital/${ term

     }`;

    return this.http.get<Country[]>( url )
      .pipe(
        // tap( countries => console.log('Paso por el tap', countries) ),
        // map( countries => [] ),
        // tap( countries => console.log('Paso despues map', countries))
        catchError( error => {
          console.log(error);

          return of([])
        })
      );
  }


  searchRegion( region: string ): Observable<Country[]> {
    const url = `${this.API_URL}/region/${ region }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => {
          console.log( error );

          return of( [] );
        })
      )
  }


  searchCountry( country: string ): Observable<Country[]> {
    const url = `${this.API_URL}/name/${ country }`;

    return this.http.get<Country[]>( url )
      .pipe(
        catchError( error => {
          console.log( error );

          return of( [] );
        })
      )
  }

}
