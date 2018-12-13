import React from 'react';
import { connect } from 'react-redux';
import { find } from 'lodash';
import moment from 'moment';
import { Row } from 'reactstrap';
import './styles.scss';

const dateStyle = date => moment(date, 'YYYY-MM-DD').format('MM/DD/YYYY');

const views = {
    'certifications': ({
        name = '',
        authority = '',
        licenseNumber = '',
        website = '',
        acquireDate = '',
        expireDate = ''
    }) => (
        <React.Fragment>
            <Row className='detailsHeader'>{name}</Row>
            <Row>{authority}</Row>
            <Row>{licenseNumber}</Row>
            <Row>{website}</Row>
            <Row>{acquireDate}</Row>
            <Row>{expireDate}</Row>
        </React.Fragment>
    ),
    'education': ({
        name = '',
        degree = '',
        fieldOfStudy = '',
        startDate = '',
        endDate = '',
        street1 = '',
        street2 = '',
        city = '',
        state = '',
        zip = ''
    }) => (
        <React.Fragment>
            <Row className='detailsHeader'>{name}</Row>
            <Row>{degree}</Row>
            <Row>{fieldOfStudy}</Row>
            <Row>{startDate}</Row>
            <Row>{endDate}</Row>
            <Row>{street1}</Row>
            <Row>{street2}</Row>
            <Row>{`${city} ${state} ${zip}`}</Row>
        </React.Fragment>
    ),
    'positions': ({
        companyName,
        title = '',
        startPay = '',
        endPay = '',
        payPeriod = '',
        startDate = '',
        endDate = ''
    }) => (
        <React.Fragment>
            <Row className='detailsHeader'>
                <span>{`${title} at ${companyName}`}</span>
                <span>{`${dateStyle(startDate)} through ${dateStyle(endDate)}`}</span>
            </Row>
            <Row>
                <span>{`${startPay}-${endPay} ${payPeriod}`}</span>
            </Row>
        </React.Fragment>
    ),
    'projects': ({
        title = '',
        description = '',
        positionTitle,
        companyName,
        educationName,
        startDate = '',
        endDate = '',
    }) => (
        <React.Fragment>
            <Row className='detailsHeader'>{title}</Row>
            <Row>{description}</Row>
            <Row>{positionTitle}</Row>
            <Row>{companyName}</Row>
            <Row>{educationName}</Row>
            <Row>{startDate}</Row>
            <Row>{endDate}</Row>
        </React.Fragment>
    ),
};

const Details = ({ entityType, entityData }) => {
    const View = views[entityType];
    return (
        <div id='TIMELINE_DETAILS'>
            <View {...entityData} />
        </div>
    );
};

const mapStateToProps = (state, ownProps) => {
    const { entityType, entityData } = ownProps;
    switch (entityType) {
        case 'positions': {
            // For positions grab the company name and forward in entityData
            const { companies } = state.data;
            const { companyId } = entityData;
            const { name: companyName } = companyId ? find(companies.list, { id: parseInt(companyId) }) || {} : {};
            return { entityType, entityData: { ...entityData, companyName } };
        }
        case 'projects': {
            // For projects grab the position name, company name, and education name and forward in entityData
            const { positions, companies, education } = state.data;
            const { positionId, educationId } = entityData;
            const position = positionId ? find(positions.list, { id: parseInt(positionId) }) || {} : {};
            const { title: positionTitle, companyId } = position;
            const { name: companyName } = companyId ? find(companies.list, { id: parseInt(companyId) }) || {} : {};
            const { name: educationName } = educationId ? find(education.list, { id: parseInt(educationId) }) || {} : {};
            return { entityType, entityData: { ...entityData, positionTitle, companyName, educationName } };
        }
        default: return ownProps;
    }
};

export default connect(mapStateToProps)(Details);
