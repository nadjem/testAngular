import { Injectable } from "@angular/core";
import { Adapter } from "./adapter";

export class Biz {
  constructor(
    public id: number,
    public name: string,
    public sector: string,
    public siren: string,
    public results: any
  ) {}
}

@Injectable({
  providedIn: "root",
})
export class BizAdapter implements Adapter<Biz> {
  adapt(item: any): Biz {
    return new Biz(item.id,item.name,item.sector,item.siren,item.results);
  }
}
