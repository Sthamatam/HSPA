import { Injectable } from '@angular/core';
import * as alertyfy from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertyfyService {

constructor() { }
  success(messasge : string){
    alertyfy.success(messasge);
  }

  warning(messasge: string){
    alertyfy.warning(messasge);
  }
  error(message: string)
  {
    alertyfy.error(message);
  }
}
