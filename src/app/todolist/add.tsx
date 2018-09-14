import * as React from 'react';
import { Task } from '../core/task';
import "./add.css"
import { FormGroup, ControlLabel, FormControl, Button, Well, Modal } from 'react-bootstrap';
import * as ReactDOM from 'react-dom';
import DatePicker from 'react-datepicker';
import * as moment from 'moment'
import { Moment } from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

type AddProps = {
  addTask: (task: Task) => void;
}

class AddState {

  constructor() {
    this.title = '';
    this.description = '';
    this.show = false;
    this.dueDate = moment().endOf("day");

  }
  title: string;
  description: string;
  show: boolean;
  dueDate: Moment;
}

export class Add extends React.Component<AddProps, AddState>{
  titleInput: any;


  constructor(props: AddProps, context: any) {
    super(props, context);

    this.state = this.initialState();

  }
  initialState() {
    return new AddState();
  }

  handleSubmit(e: React.FormEvent<HTMLButtonElement>) {
    e.preventDefault();
    
    var newTask = new Task();
    newTask.title = this.state.title;
    newTask.description = this.state.description;
    newTask.dueDate = this.state.dueDate.toDate();
    this.props.addTask(newTask);

    this.setState(this.initialState());
  }

  handleTitleChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ title: e.currentTarget.value });
  }

  handleDescriptionChange(e: React.FormEvent<HTMLInputElement>) {
    this.setState({ description: e.currentTarget.value });
  }

  handleDueDateChange(date: any) {
    this.setState({ dueDate: date });
  }

  focusTitleInput() {
    let node = ReactDOM.findDOMNode(this.titleInput) as HTMLElement;
    node!.focus();
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  render() {
    const disableSubmit = !this.state.title || !this.state.description || !this.state.dueDate || !this.state.dueDate.isValid();
    return (
      <span>
        <Well bsSize="lg">
          <Button bsSize="lg" onClick={this.handleShow.bind(this)} bsStyle="success">Add New Task</Button>
        </Well>
        <Modal show={this.state.show} onHide={this.handleClose.bind(this)} animation={false} onShow={this.focusTitleInput.bind(this)}>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <Modal.Header closeButton>
              <Modal.Title>Add Task</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <FormGroup>
                <ControlLabel>Title:</ControlLabel>
                <FormControl type="text"
                  placeholder="Enter text"
                  value={this.state.title}
                  ref={(c) => this.titleInput = c}
                  onChange={this.handleTitleChange.bind(this)}></FormControl>
              </FormGroup>
              <FormGroup>
                <ControlLabel>Description:</ControlLabel>
                <FormControl type="text"
                  placeholder="Enter text"
                  value={this.state.description}
                  onChange={this.handleDescriptionChange.bind(this)}></FormControl>
              </FormGroup>
              <FormGroup playsInline={true}>
                <ControlLabel>Due Date:</ControlLabel>
                <DatePicker className="form-control" selected={this.state.dueDate}
                  onChange={this.handleDueDateChange.bind(this)} />
              </FormGroup>
            </Modal.Body>
            <Modal.Footer>
              <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
              <Button type="submit" bsStyle="primary" disabled={disableSubmit}>Submit</Button>
            </Modal.Footer>
          </form>
        </Modal>
      </span>
    );
  }

}