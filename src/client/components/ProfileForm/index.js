import React, { Component } from 'react';
import { FormGroup, Col, Label, Input, Button } from 'reactstrap';
import axios from 'axios';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import '../../sass/_profileform.scss';

export class ProfileForm extends Component {
    constructor(props) {
        super(props);
        this.email = props.email;
        this.handleFirstNameChange = this.handleFirstNameChange.bind(this);
        this.handleLastNameChange = this.handleLastNameChange.bind(this);
        this.handleMiddleNameChange = this.handleMiddleNameChange.bind(this);
        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleHomePhoneChange = this.handleHomePhoneChange.bind(this);
        this.handleMobilePhoneChange = this.handleMobilePhoneChange.bind(this);
        this.handleWebsiteChange = this.handleWebsiteChange.bind(this);
        this.updateProfile = this.updateProfile.bind(this);
        this.getProfile = this.getProfile.bind(this);
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
        this.getProfile();
    }

    getProfile() {
        var self = this;
        var link = 'http://localhost:4000/api/user/' + this.email;
        axios.get(link, {
        }).then(function (response) {
            if (response) {
                self.setState({ firstName: response.data.firstName });
                self.setState({ middleName: response.data.middleName });
                self.setState({ lastName: response.data.lastName });
                self.setState({ title: response.data.title });
                self.setState({ email: response.data.email });
                self.setState({ homePhone: response.data.homePhone });
                self.setState({ homePhone: response.data.mobilePhone });
                self.setState({ website: response.data.website });
                self.setState({ id: response.data.id });
            }
        }).catch(function (error) {
            console.log('error is ', error);
        });
    }

    updateProfile() {
        axios.put('http://localhost:4000/api/user/', {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            middleName: this.state.middleName,
            title: this.state.title,
            email: this.state.email,
            homePhone: this.state.homePhone,
            mobilePhone: this.state.mobilePhone,
            website: this.state.website,
            id: this.state.id
        }).then(function (response) {
            NotificationManager.success('Profile Successfully Updated');
            console.log(response);
        }).catch(function (error) {
            NotificationManager.error('Profile Failed to Update');
            console.log('error is ', error);
        });
    }

    handleFirstNameChange(e) {
        this.setState({ firstName: e.target.value });
    }

    handleLastNameChange(e) {
        this.setState({ lastName: e.target.value });
    }

    handleMiddleNameChange(e) {
        this.setState({ middleName: e.target.value });
    }

    handleTitleChange(e) {
        this.setState({ title: e.target.value });
    }

    handleHomePhoneChange(e) {
        this.setState({ homePhone: e.target.value });
    }

    handleMobilePhoneChange(e) {
        this.setState({ mobilePhone: e.target.value });
    }

    handleWebsiteChange(e) {
        this.setState({ website: e.target.value });
    }

    render() {
        return (
            <div className='formBody'>
                <form className='col-md-8' role='form'>
                    <FormGroup row>
                        <Label>First Name</Label>
                        <Col>
                            <Input value={this.state.firstName} type='text' onChange={this.handleFirstNameChange} className="form-control" placeholder="First Name" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Middle Name</Label>
                        <Col>
                            <Input value={this.state.middleName} type="text" onChange={this.handleMiddleNameChange} className="form-control" placeholder="Middle Name" required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Last Name</Label>
                        <Col>
                            <Input value={this.state.lastName} type='text' onChange={this.handleLastNameChange} className='form-control' placeholder='Last Name' required />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Title</Label>
                        <Col>
                            <Input value={this.state.title} type='text' onChange={this.handleTitleChange} className='form-control' placeholder='Title' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Email Address</Label>
                        <Col>
                            <Input value={this.state.email} type='text' className='form-control' disabled />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Home Phone Number</Label>
                        <Col>
                            <Input value={this.state.homePhone} type='text' onChange={this.handleHomePhoneChange} className='form-control' placeholder='Home Phone Number' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Mobile Phone Number</Label>
                        <Col>
                            <Input value={this.state.mobilePhone} type='text' onChange={this.handleMobilePhoneChange} className='form-control' placeholder='Mobile Phone Number' />
                        </Col>
                    </FormGroup>
                    <FormGroup row>
                        <Label>Website</Label>
                        <Col>
                            <Input value={this.state.website} type='text' onChange={this.handleWebsiteChange} className='form-control' placeholder='Website' />
                        </Col>
                    </FormGroup>
                    <Button className='updateButton' color='secondary' onClick={this.updateProfile} >Update</Button>
                </form>
                <NotificationContainer />
            </div>
        );
    }
}

export default ProfileForm;
