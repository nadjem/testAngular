import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class Result {
  constructor(
    public id: number,
    public ca: string,
    public margin: string,
    public ebitda: string,
    public year: string,
    public business: string,
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class ResultAdapter implements Adapter<Result> {
  adapt(item: any): Result {
    return new Result(item.id,item.ca,item.margin,item.ebitda,item.year,item.business);
  }
}
