import * as React from 'react';
import { Task } from '../core/task';
import { Add } from './add';
import { ToDoItem } from './item';
import { Row, Col } from 'react-bootstrap';

type ToDoListProps = {
  tasks: Task[],
  addTask: (task: Task) => void,
  deleteTask: (index: number) => void;
  updateTask: (index: number) => void;
}

export const ToDoList = (props: ToDoListProps) => {
  return (
    <div>
      <Add addTask={props.addTask} />
      <Row>
        {props.tasks.map((task: Task, index: number) => (
          <Col key={index} xs={4}>
            <ToDoItem 
              index={index} task={task}
              deleteTask={props.deleteTask}
              updateTask={props.updateTask} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
