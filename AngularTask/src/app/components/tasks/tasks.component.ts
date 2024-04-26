import { Component } from '@angular/core';
import { Task } from '../../Task';
import { CommonModule } from '@angular/common';
import { TaskItemComponent } from '../task-item/task-item.component';
import { TaskService } from '../../services/task.service';
import { AddTaskComponent } from '../add-task/add-task.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [CommonModule, TaskItemComponent, AddTaskComponent, FooterComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
    });
  }

  // updateTasksList(task: Task[]) {
  //   this.tasks = task;
  // }
  deleteTask(task: Task) {
    this.taskService
      .deleteTask(task)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }

  toggleReminder(task: Task) {
    this.taskService
      .toggleReminder(task)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }
  addTask(task: Task) {
    this.taskService
      .addTask(task)
      .subscribe((tasks: Task[]) => (this.tasks = tasks));
  }
}
