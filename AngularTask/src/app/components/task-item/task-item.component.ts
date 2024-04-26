import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from '../../Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CommonModule } from '@angular/common';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-item',
  standalone: true,
  imports: [FontAwesomeModule, CommonModule],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() onDeleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();
  // @Output() TasksUpdates: EventEmitter<Task[]> = new EventEmitter();
  // @Output() onEditTasks: EventEmitter<Task> = new EventEmitter();
  faTimes = faTimes;

  constructor(private taskService: TaskService) {}

  onDelete(task: Task) {
    // this.taskService
    //   .deleteTask(task)
    //   .subscribe((tasks: Task[]) => this.TasksUpdates.emit(tasks));
    this.onDeleteTask.emit(task);
  }
  onToggle(task: Task) {
    // this.taskService
    //   .toggleReminder(task)
    //   .subscribe((tasks: Task[]) => this.TasksUpdates.emit(tasks));
    this.onToggleReminder.emit(task);
  }
}
