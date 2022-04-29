import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  //brings in tasks from the Task interface and places them into an Array so that we can loop through it in the HTML
  tasks: Task[] = [];

  //inject the service as a dependency
  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    //on initialization place the tasks recieved from the service method into our local task array.
    //the subscribe will check whenever there is a change to the tasks being recieved as the service has
    //subscribed to the TASK interface where the tasks are placed
    this.taskService.getTasks().subscribe((tasks) => this.tasks = tasks);
  }
  deleteTask(task: Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }
  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskService.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
