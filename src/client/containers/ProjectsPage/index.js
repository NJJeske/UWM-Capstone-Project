import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Card, Button } from 'reactstrap';
import { Project } from '../../components';

class ProjectsPage extends Component {
    render() {
        const { projects, error } = this.props;
        const mainBody = error
            ? <Card>Error fetching data</Card>
            : (projects || []).map(project => <Project key={project.id} {...project} />);

        return (
            <Container fluid={true} id="PROJECTS_PAGE">
                <main>
                    {mainBody}
                    <Card className='project'>
                        <Button>New</Button>
                    </Card>
                </main>
            </Container>
        );
    }
}

const mapStateToProps = state => ({
    user: state.user,
    projects: state.data.projects.list,
});

export default connect(mapStateToProps)(ProjectsPage);
