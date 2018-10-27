import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';
// import { Header, Sidebar, Project } from '../../components';
import { Container, Card, Button } from 'reactstrap';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { projects } = this.props;

        const projectsList = projects.map(project => (
            // <Project {...project} />
            <div key={project._id}>
                Placeholder for project {project._id}.
            </div>
        ));

        return (
            <Container id="PROJECTS_PAGE">
                {/* <Header />
                <Sidebar /> */}
                <main>
                    {projectsList}
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
    projects: state.projects,
});

const mapDispatchToProps = {
    createProject
};

export default connect(mapStateToProps, mapDispatchToProps)(ProjectsPage);
