import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createProject } from '../../redux/actions/projectActions';

class ProjectsPage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const projectsList = (this.props.projects || []).map(project => {
            const projectProperties = Object.entries(project).map(([key, val]) => <tr key={key}><td>{key}</td><td>{`${val}` || ''}</td></tr>);
            return (
                <table key={project.id}>
                    <tbody>
                        {projectProperties}
                    </tbody>
                </table>
            );
        });

        return (
            <div>
                <main>
                    <h1>Projects</h1>
                    <section>
                        {projectsList}
                    </section>
                </main>
            </div>
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
