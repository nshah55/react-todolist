import * as moment from 'moment'

export class Task {

  constructor(title: string = '', description: string = '', dueDate: Date = moment().endOf('day').toDate(), completed: boolean = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.completed = completed;
  }

  title: string;
  description: string;
  dueDate: Date;
  completed: boolean;

  get overdue(): boolean {
    return moment(this.dueDate).diff(moment(), 'days') < 0;
  }

  get imminent(): boolean {
    return moment(this.dueDate).diff(moment(), 'days') < 2;
  }

  makeCopy(): Task{
    return new Task(this.title, this.description, this.dueDate, this.completed);
  }
}