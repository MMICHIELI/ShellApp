/**
 * Created by mmichieli on 04/02/2018.
 */
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FileUploader } from 'ng2-file-upload/ng2-file-upload';
import { isNullOrUndefined } from 'util';
import { HTTPHeaderModel } from '../../../models/components/http-header.model';
import { FileItem } from 'ng2-file-upload';
import { PopinService } from '../popin/popin.service';

@Component({
  selector: 'mmi-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['file-upload.component.css']
})
export class FileUploadComponent implements OnInit {

  @Input() public url: string;
  @Input() public theme: string;
  public uploader: FileUploader = null;
  public hasBaseDropZoneOver: boolean = false;
  public hasAnotherDropZoneOver: boolean = false;
  public showLoader: boolean = true;

  // output called when clicking uplaod terminated
  @Output('endUploadEmitter') public endUploadEmitter = new EventEmitter();

  constructor(private popinService: PopinService) {
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  public closePopin(): void {
    this.popinService.closeBottomPopin();
  }

  public ngOnInit() {
    if (!isNullOrUndefined(this.url)) {
      this.uploader = new FileUploader({url: this.url, disableMultipart: false});
    } else {
      return;
    }
  }

  public getToolTipLabel(): string {
    return 'Label from upload';
  }

  public uploadItem(item: FileItem): void {
    item.upload();
    this.endUploadEmitter.emit(this.uploader.queue);
  }

  public uploadAllItems(): void {
    this.uploader.uploadAll();
    this.endUploadEmitter.emit(this.uploader.queue);
  }

  public fullyLoaded() {
    this.showLoader = false;
  }

}
