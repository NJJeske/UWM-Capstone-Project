import React, { Component } from 'react';
import { Input, Form, FormGroup, Label, ListGroupItem, ListGroup, Button } from 'reactstrap';
import './styles.scss';
import axios from 'axios';
import { serverURL, headers } from '../../redux/config';
const userURI = `${serverURL}/user`;
const documentsURI = `${serverURL}/document`;

export class DocumentsForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            files: ['Resume.docx', 'CoverLetter.docx', 'Skills.docx'],
            error: '',
            msg: ''
        };
    }

    addFile(filename) {
        const newFiles = this.state.files;
        newFiles[filename] = filename;
        this.setState({ files: newFiles });
    }

    componentDidMount() {
        const config = { headers: { Authorization: headers().headers.Authorization } };
        axios.get(userURI, config).then(response => {
            this.setState({ userId: response.data.id });
            const getLink = documentsURI + '/' + response.data.id;
            axios.get(getLink, config).then(response => {
                // this.setState({ files: response.data });
                console.log(response.data);
            });
        });
    }

    handleUpload(e) {
        axios.post(documentsURI, {

        }).then();
        this.files.addItem(e);
    }

    handleDelete(e) {
        const deleteUrl = documentsURI + '/' + e.id;
        axios.delete(deleteUrl, null);
    }

    render() {
        const FileList = ({ items, onItemClick }) => (
            <ListGroup>
                {
                    items.map((item, i) => <ListGroupItem key={i} onClick={onItemClick}>{ item }<Button className='deleteButton' color='danger' onClick={this.handleDelete}>Delete</Button></ListGroupItem>)
                }
            </ListGroup>
        );

        return (
            <Form className='uploadForm'>
                <FormGroup className='uploadFormGroup'>
                    <Label className='uploadLabel' for='fileUploadButton'>Upload A Document</Label>
                    <Input className='documentUpload' type='file' name='fileUploadButton' id='exampleFile' />
                    <Button className='submitDownloadButton' onClick={this.handleUpload}>Submit Upload</Button>
                    <div className='documentList'>
                        <Label className='documentListLabel' for='documentList'>Your Documents</Label>
                        <FileList items={this.state.files}/>
                    </div>
                </FormGroup>
            </Form>
        );
    }
}

export default DocumentsForm;
