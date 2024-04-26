import { Injectable } from '@angular/core';
import { Task } from '../Task';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  //private apiUrl = 'http://localhost:5000/tasks';
  private apiUrl = 'https://localhost:7114/api/Task';
  constructor(private httpClient: HttpClient) {}

  public getTasks(): Observable<Task[]> {
    return this.httpClient.get<Task[]>(this.apiUrl);
  }
  public deleteTask(task: Task): Observable<Task[]> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.delete<Task[]>(url);
  }
  public toggleReminder(task: Task): Observable<Task[]> {
    //const url = `${this.apiUrl}/${task.id}`;
    return this.httpClient.put<Task[]>(this.apiUrl, task);
  }
  public addTask(task: Task): Observable<Task[]> {
    return this.httpClient.post<Task[]>(this.apiUrl, task);
  }
  
}
