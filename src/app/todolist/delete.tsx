import * as React from 'react';
import { Modal, Button } from 'react-bootstrap';

type DeleteProps = {
    index: number
    deleteTask: any
}


export class Delete extends React.Component<DeleteProps, any> {

    state = {
        show: false
    };   

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleDelete() {
        this.props.deleteTask(this.props.index);
        this.setState({ show: false });
    }  

    render() {
        return (
            <span>
                <button type="button" className="close" onClick={this.handleShow.bind(this)} aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>

                <Modal show={this.state.show} onHide={this.handleClose.bind(this)} animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Confirm</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        Are you sure you want to delete this item?
                </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose.bind(this)}>Cancel</Button>
                        <Button bsStyle="primary" onClick={this.handleDelete.bind(this)}>OK</Button>
                    </Modal.Footer>
                </Modal>
            </span>
        );
    }
}

