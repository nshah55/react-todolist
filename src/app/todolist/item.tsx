import * as React from 'react';
import { Task } from '../core/task';
import { Panel, Button } from 'react-bootstrap';
import { Delete } from './delete';

type ToDoItemProps = {
  task: Task;
  deleteTask: any;
  updateTask: any;
  index: number
}

export class ToDoItem extends React.Component<ToDoItemProps, any> {

  handleMarkCompleted() {
    var update = this.props.task.makeCopy();
    update.completed = true;
    this.props.updateTask(this.props.index, update);
  }

  handleClearCompleted() {
    var update = this.props.task.makeCopy();
    update.completed = false;
    this.props.updateTask(this.props.index, update);
  }  

  render() {  
    const { task, deleteTask, index } = this.props;
    const component = (      
      <Panel bsStyle={task.completed ? "success" : task.overdue ? "danger" : task.imminent ? "warning" : "info"}>
        <Panel.Heading>
          <Panel.Title componentClass="h3">
            {task.title}
            <Delete index={index} deleteTask={deleteTask} />
          </Panel.Title>
        </Panel.Heading>
        <Panel.Body>
          <p>{task.description}</p>
          <p>Due Date: {task.dueDate.toLocaleDateString()}</p>
        </Panel.Body>
        <Panel.Footer className="text-right">
          {task.completed ?
            <Button bsSize="small" onClick={this.handleClearCompleted.bind(this)}>Clear Completed</Button> :
            <Button bsSize="small" onClick={this.handleMarkCompleted.bind(this)}>Mark Completed</Button>}
        </Panel.Footer>
      </Panel>);
    return task.completed ? (<s>{component}</s>) : component;
  }

}