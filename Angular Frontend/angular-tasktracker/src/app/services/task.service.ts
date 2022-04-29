import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../Task';
import { Observable } from 'rxjs';

const HttpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  //url to our API endpoint of tasks for a get Request
  private apiUrl = 'http://localhost:8080/tasks'

  //we bring in HttpClient as a dependency to allow us to access the Http CRUD methods.
  constructor(private http: HttpClient) { }

  /* Whenever this method is called it will return the Task JSON Object array from our API endpoint (back end server)*/
  getTasks(): Observable<Task[]> {

    //this returns the JSON Object array by sending in the API endpoint url as a parameter.
    return this.http.get<Task[]>(this.apiUrl)
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this.apiUrl}/${task.id}`;
    return this.http.put<Task>(url, task, HttpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task, HttpOptions);
  }
}
