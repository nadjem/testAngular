import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {BizService} from "../service/biz.service";

export interface BizData {
  id: number;
  name: string;
  sector: string;
  siren: string;
  results: any;
}
export interface ResData {
  id: number;
  ca: string;
  margin: string;
  ebitda: string;
  year: string;
  business: string;
}
@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss']
})
export class DetailViewComponent implements OnInit {

  constructor(private route: ActivatedRoute,private apiBiz: BizService, private ref:ChangeDetectorRef) { }
  results=[];
  detail :BizData;
   compare(a, b) {
    const yearA = a.year.toUpperCase();
    const yearB = b.year.toUpperCase();

    let comparison = 0;
    if (yearA > yearB) {
      comparison = -1;
    } else if (yearA < yearB) {
      comparison = 1;
    }
    return comparison;
  }
  ngOnInit() {
    this.route.params.subscribe( params => {
      this.apiBiz.bizDetail(params.id).subscribe(res=>{
      this.detail = res;
        res.results.map(r => {
          this.apiBiz.detail(r).subscribe((res:ResData)=>{
              this.results.push(res);

          })
          this.results = this.results.sort(this.compare)
          this.ref.detectChanges()
        })
      })
      /*this.apiBiz.detail(params.result_1).subscribe(res=>{
        this.result_1 = res;
      })
      this.apiBiz.detail(params.result_2).subscribe(res=>{
        this.result_2 = res;
      })*/

    });
  }

}
