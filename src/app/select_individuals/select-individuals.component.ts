import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../service/upload-file.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TokenStorageService} from '../service/token-storage.service';
import {ExecuteQueryService} from '../service/executeQuery.service';
import {Response} from '../service/response';

@Component({
  selector: 'app-select-individuals-component',
  templateUrl: './select-individuals.component.html',
  styleUrls: ['./select-individuals.css']

})

export class SelectIndividualsComponentComponent implements OnInit {
  sparqlQuery: string;
  progress = 0;
  classes: string[];
  dprops: string[];
  oprops: string[];
  downloadAnswer: Response;
  message = '';
  list: any;
  listMap: any;
  ind: any;

  success = false;

  constructor(private executeQueryService: ExecuteQueryService, private token: TokenStorageService) { }

  ngOnInit() {
    if (
      this.token.getClasses().length > 0) {
      this.classes = this.token.getClasses();
      this.dprops = this.token.getDProps();
      this.oprops = this.token.getOProps();

    }
  }

  execute(sparqlQuery: string) {
    console.log(sparqlQuery);
    this.executeQueryService.executeQuery(this.token.getFile(), sparqlQuery).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.success = true;
          this.downloadAnswer = event.body;
          this.list = this.downloadAnswer.fields;
          // console.log(this.list[0].getKey);
          // this.list.map(v => new Map(Object.entries(v)));
          // this.list.reduce(function(map, obj){
          //   map[obj.key] = obj.val;
          //   return map;
          // }, {});
          const listM = [];
          this.list.forEach(function(value) {
            listM.push(new Map(Object.entries(value)));
          });
          this.listMap = listM;
          // ind = Array(this.listMap.length).fill().map((x,i)=>i);
          console.log(listM);
          console.log(this.listMap.length);
        }
      },
      err => {
        this.success = false;
        this.message = 'Could not upload the file!';
      });
  }
}
