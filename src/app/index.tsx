import * as React from 'react';
import { Task } from './core/task';
import { ToDoList } from './todolist';
import Header from './header';
import { Grid } from 'react-bootstrap';
import './app.css';
import * as moment from 'moment'

type AppState = {
  tasks: Task[];
}

class App extends React.Component<any, AppState> {

  state = {
    tasks: [new Task('over due task', 'couldnt get to it!', moment().subtract(1, 'days').toDate()),
    new Task('completed task', 'got it done!', moment().add(1, 'days').toDate(), true),
    new Task('imminent task', 'must be completed in the next 1-2 days', moment().add(1, 'days').toDate()),
    new Task('future task1', 'can be done later', moment().add(5, 'days').toDate()),
    new Task('future task2', 'can be done later', moment().add(5, 'days').toDate()),
    new Task('future task3', 'can be done later', moment().add(5, 'days').toDate()),
    new Task('future task4', 'can be done later', moment().add(5, 'days').toDate()),
    new Task('future task5', 'can be done later', moment().add(5, 'days').toDate())]
  }

  addTask(newTask: Task) {
    this.setState((prevState: AppState) => {
      return { tasks: [...prevState.tasks, newTask] };
    });
  }

  deleteTask(index: number) {
    var result = [...this.state.tasks];
    result.splice(index, 1);
    this.setState({ tasks: result });
  }

  updateTask(index: number, update: Task) {
    var result = [...this.state.tasks];
    result[index] = update;;
    this.setState({ tasks: result });
  }

  render() {
    return (
      <div>
        <Header />
        <Grid>
          <ToDoList tasks={this.state.tasks}
            addTask={this.addTask.bind(this)}
            deleteTask={this.deleteTask.bind(this)}
            updateTask={this.updateTask.bind(this)}/>
        </Grid>
      </div>
    );
  }
}

export default App;
