import { Injectable } from '@angular/core';
import { environment } from '../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CommentaryModel } from '../models/commentary.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CommentsService {
  private readonly API_URL = `${environment.apiUrl || 'http://localhost:3000'}/comments`;

  constructor(private httpClient: HttpClient) {}

  getAll = (): Observable<CommentaryModel[]> =>
    this.httpClient.get<CommentaryModel[]>(`${this.API_URL}`);

  getByProductId = (productId: string): Observable<CommentaryModel[]> =>
    this.httpClient.get<CommentaryModel[]>(
      `${this.API_URL}?productId=${productId}`,
    );
}
