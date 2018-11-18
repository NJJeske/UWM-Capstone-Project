import React from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Button } from 'reactstrap';
import { fetchEntities, createLocalEntity } from '../../redux/actions/entityActions';
import { Header, Education, Sidebar, Footer } from '../../components';

const EducationPage = props => {
    const { education, fetchEntities, createLocalEntity } = props;
    const alreadyCreating = education.list.some(education => education._local);

    const mainBody = education.error ? (
        <Container className='card entity education'>
            <h3>Error fetching data</h3>
            <Button onClick={fetchEntities('education')}>Retry</Button>
        </Container>
    ) : (
        education.list.map(education => <Education key={education.id} {...education} />)
    );

    const createButton = alreadyCreating ? null : (
        <Container className='entity'>
            <Row>
                <Col
                    xs={{ size: 8, offset: 2 }}
                    sm={{ size: 6, offset: 3 }}
                >
                    <Button className='education createButton' onClick={createLocalEntity.bind(null, 'education')}>Create</Button>
                </Col>
            </Row>
        </Container>
    );

    return (
        <div>
            <Sidebar />
            <Container fluid={true} id="EDUCATION_PAGE">
                <Header title='Education' />
                <main>
                    {mainBody}
                    {createButton}
                </main>
            </Container>
            <Footer />
        </div >
    );
};

const mapStateToProps = state => ({
    user: state.user,
    education: state.data.education,
});

const mapDispatchToProps = {
    fetchEntities,
    createLocalEntity,
};

export default connect(mapStateToProps, mapDispatchToProps)(EducationPage);
