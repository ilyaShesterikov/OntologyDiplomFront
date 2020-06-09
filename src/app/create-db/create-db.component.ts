import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../service/upload-file.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {TokenStorageService} from '../service/token-storage.service';
import {CreateDBService} from '../service/createDB.service';
import {Response} from '../service/response';

@Component({
  selector: 'app-create-db-component',
  templateUrl: './create-db.component.html'
})

export class CreateDBComponentComponent implements OnInit {
  downloadAnswer: Response;
  classes: string[];
  dprops: string[];
  oprops: string[];
  errorMessage = '';
  creationSuccess: boolean;
  insertSuccess: boolean;

  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService, private token: TokenStorageService, private createDBService:CreateDBService) { }

  ngOnInit() {
    if (
      this.token.getClasses().length > 0) {
      this.classes = this.token.getClasses();
      this.dprops = this.token.getDProps();
      this.oprops = this.token.getOProps();

    }
  }

  create() {
    this.createDBService.createDB(this.token.getFile()).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
        } else if (event instanceof HttpResponse) {
          console.log('---');
          this.creationSuccess = true;
        }
      },
      err => {
        this.creationSuccess = false;
        this.downloadAnswer = err.body;

        this.errorMessage = this.downloadAnswer.error;
      });
  }

  insert() {
    this.createDBService.insertIndividuals(this.token.getFile()).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
        } else if (event instanceof HttpResponse) {
          this.insertSuccess = true;
        }
      },
      err => {
        this.insertSuccess = false;
        this.downloadAnswer = err.body;
        this.errorMessage = this.downloadAnswer.error;
      });
  }
}
