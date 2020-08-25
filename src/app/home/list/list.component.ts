import { Component, OnInit,ViewChild } from '@angular/core';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {Router} from "@angular/router";
import { BizService} from '../../service/biz.service'

export interface BizData {
   id: number;
   name: string;
   sector: string;
   siren: string;
   results: any;
}
const ELEMENT_DATA: BizData[] = [
  {id: 0, name: '', sector: '', siren: '',results:''},
];
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'sector', 'siren'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);
  @ViewChild(MatSort, {static: false}) sort: MatSort;
  @ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;
  constructor(private apiBiz: BizService, private route:Router) { }

  ngOnInit() {

    this.apiBiz.list().subscribe( res => {
      this.dataSource = new MatTableDataSource(res);
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
    })
  }

  filter(value){
    this.dataSource.filter = value.trim().toLocaleLowerCase();
  }
  onClickTable(data){
      console.log(data)
      this.route.navigateByUrl(`/detail/${data.id}`)
  }

}
