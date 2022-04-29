import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UiService {

  private showAddTask: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  toggleAddTask(): void {
    this.showAddTask = !this.showAddTask;
    //A subject sends an obersvable to multiple observers. Meaning that the components that are observing this
    //method will be able to detect the changes whenever the method is called with the subject.next method.
    //Meaning whenever we toggle between true or false, the add-task component will toggle the display of task form.
    this.subject.next(this.showAddTask)
  }

  //whenever the toggleAddTask() method is called we subscribe to this method in order for the changes to be displayed.
  onToggle(): Observable<any> {
    return this.subject.asObservable();
  }
}
