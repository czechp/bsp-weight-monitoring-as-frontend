import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {IconItem} from "../type/icon-item.type";
import {BACKEND_URL} from "../configuration/URL";

@Injectable({
  providedIn: 'root'
})
export class IconItemService {

  constructor(private httpClient: HttpClient) { }

  getIcons() {
    return this.httpClient.get<IconItem[]>(`${BACKEND_URL}/icons`);
  }
}
