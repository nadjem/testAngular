import { Injectable} from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Biz, BizAdapter } from '../model/biz.model';
import { Result, ResultAdapter } from '../model/result.model';
import { Observable, of} from "rxjs";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root",
})
export class BizService {
  constructor(private http: HttpClient, private adapterBiz:BizAdapter, private adapterResult:ResultAdapter) {}

  private baseUrl = "https://test.wertkt.com/api"
  list(): Observable<Biz[]> {
    // TODO Call api
   /* return  of([])*/
    const url = `${this.baseUrl}/biz/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any[]) => data.map((item) => this.adapterBiz.adapt(item)))
    );
  }
  detail(id): Observable<Result>{
    const url = `${this.baseUrl}/result/${id}/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any)  => this.adapterResult.adapt(data)));
  }
  bizDetail(id): Observable<Biz>{
    const url = `${this.baseUrl}/biz/${id}/`;
    return this.http.get(url).pipe(
      // Adapt each item in the raw data array
      map((data: any)  => this.adapterBiz.adapt(data)));
  }
}
