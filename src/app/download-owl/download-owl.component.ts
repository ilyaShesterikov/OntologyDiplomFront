import {Component, OnInit} from '@angular/core';
import {UploadFileService} from '../service/upload-file.service';
import {Observable} from 'rxjs';
import {HttpEventType, HttpResponse} from '@angular/common/http';
import {Response} from '../service/response';
import {TokenStorageService} from '../service/token-storage.service';

@Component({
  selector: 'app-download-owl-component',
  templateUrl: './download-owl-component.component.html',
  styleUrls: ['./download-owl.css']
})

export class DownloadOwlComponentComponent implements OnInit {
  selectedFiles: FileList;
  currentFile: File;
  progress = 0;
  downloadAnswer: Response;
  errorMessage = '';
  success = false;
  count = true;
  fileInfos: Observable<any>;

  constructor(private uploadService: UploadFileService, private token: TokenStorageService) { }

  ngOnInit() {
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  upload() {
    this.progress = 0;

    this.currentFile = this.selectedFiles.item(0);
    this.uploadService.upload(this.currentFile).subscribe(
      event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        } else if (event instanceof HttpResponse) {
          this.success = true;
          this.downloadAnswer = event.body;
          console.log(this.success);
          console.log(event.body);
          console.log(this.downloadAnswer);
          console.log(this.downloadAnswer.classes);
          this.token.saveFile(this.currentFile.name);
          this.token.saveClasses(this.downloadAnswer.classes);
          this.token.saveDProps(this.downloadAnswer.dprops);
          this.token.saveOProps(this.downloadAnswer.oprops);

          this.fileInfos = this.uploadService.getFiles();
        }
      },
      err => {
        this.progress = 0;
        this.success = false;
        this.downloadAnswer = err.body;

        this.errorMessage = this.downloadAnswer.error;
        this.currentFile = undefined;
      });

    this.selectedFiles = undefined;
  }
}
