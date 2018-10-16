import React, { Component } from 'react';
import { connect } from 'react-redux';
import Project from '../../components/Project';
import { createProject } from '../../redux/actions/projectActions';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const { projects } = this.props;

        const projectsList = projects.map(project => {
            return <Project key={project.id} />;
        });

        return (
            <main>
                <h1>Projects are listed here</h1>
                <section>
                    {projectsList}
                </section>
            </main>
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
