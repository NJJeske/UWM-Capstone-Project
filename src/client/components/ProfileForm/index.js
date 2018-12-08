import React, { Component } from 'react';
import { FormGroup, Col, Label, Input, Button } from 'reactstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import store from '../../redux/store';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import { fetchUser, updateUser } from '../../redux/actions/userActions';
import '../../sass/_profileform.scss';

export class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.email = props.email;
        this.handleChange = this.handleChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.state = {
            values: {
                firstName: '',
                lastName: '',
                middleName: '',
                title: '',
                email: '',
                homePhone: '',
                mobilePhone: '',
                website: '',
                id: ''
            }
        };
    }

    componentDidMount() {
        try {
            const data = fetchUser();
            console.log(data);
            this.setState({ firstName: data.firstName });
            this.setState({ middleName: data.middleName });
            this.setState({ lastName: data.lastName });
            this.setState({ title: data.title });
            this.setState({ email: data.email });
            this.setState({ homePhone: data.homePhone });
            this.setState({ homePhone: data.mobilePhone });
            this.setState({ website: data.website });
            this.setState({ id: data.id });
        } catch (error) {
            console.log(error);
            NotificationManager.error('Failed to Fetch Profile Data');
        }
    }

    updateProfile() {
        try {
            updateUser(this.state);
            NotificationManager.success('Profile Successfully Updated');
        } catch (error) {
            NotificationManager.error('Profile Failed to Update');
        }
    }

    handleChange(event) {
        const { target: { name, value } } = event;
        this.setState({ [name]: value });
    }

    render() {
        return (
            <div className='formBody'>
                <form className='col-md-8' role='form'>
                    <FormGroup row>
                        <Label>First Name</Label>
                        <Col>
                            <Input value={this.state.firstName} name='firstName' type='text' onChange={this.handleChange} className="form-control" placeholder="First Name" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Middle Name</Label>
                        <Col>
                            <Input value={this.state.middleName} name='middleName' type="text" onChange={this.handleChange} className="form-control" placeholder="Middle Name" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Last Name</Label>
                        <Col>
                            <Input value={this.state.lastName} name='lastName' type='text' onChange={this.handleChange} className='form-control' placeholder='Last Name' required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Title</Label>
                        <Col>
                            <Input value={this.state.title} name='title' type='text' onChange={this.handleChange} className='form-control' placeholder='Title' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Email Address</Label>
                        <Col>
                            <Input value={this.state.email} name='email' type='text' className='form-control' disabled />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Home Phone Number</Label>
                        <Col>
                            <Input value={this.state.homePhone} name='homePhone' type='text' onChange={this.handleChange} className='form-control' placeholder='Home Phone Number' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Mobile Phone Number</Label>
                        <Col>
                            <Input value={this.state.mobilePhone} name='mobilePhone' type='text' onChange={this.handleChange} className='form-control' placeholder='Mobile Phone Number' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Website</Label>
                        <Col>
                            <Input value={this.state.website} name='website' type='text' onChange={this.handleChange} className='form-control' placeholder='Website' />
                        </Col>
                    </FormGroup>
                    <Button className='updateButton' color='secondary' onClick={this.updateProfile} >Update</Button>
                </form>
                <NotificationContainer />
            </div>
        );
    }
}

ProfileForm.propTypes = {
    fetchUser: PropTypes.func.isRequired,
    updateUser: PropTypes.func.isRequired
};

const mapDispatchToProps = {
    fetchUser,
    updateUser
};

export default connect(null, mapDispatchToProps)(ProfileForm);
