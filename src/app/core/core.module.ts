import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthGuard } from './guards/auth.guard';
import { ApiGatewayService } from './services/api-gateway.service';
import { AuthService } from './services/auth.service';
import { UploadFileService } from './services/upload-file.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [ApiGatewayService, AuthService, UploadFileService]
})
export class CoreModule { }
