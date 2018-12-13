import React from 'react';
import { Row } from 'reactstrap';
import './styles.scss';

const views = {
    'certifications': ({
        name = '',
        authority = '',
        licenseNumber = '',
        website = '',
        acquireDate = '',
        expireDate = ''
    }) => (
        <div className='certificationsView'>
            <Row>{name}</Row>
            <Row>{authority}</Row>
            <Row>{licenseNumber}</Row>
            <Row>{website}</Row>
            <Row>{acquireDate}</Row>
            <Row>{expireDate}</Row>
        </div>
    ),
    'companies': ({
        name = '',
        phone = '',
        website = '',
        street1 = '',
        street2 = '',
        city = '',
        state = '',
        zip = ''
    }) => (
        <div className='companiesView'>
            <Row>{name}</Row>
            <Row>{phone}</Row>
            <Row>{website}</Row>
            <Row>{street1}</Row>
            <Row>{street2}</Row>
            <Row>{`${city} ${state} ${zip}`}</Row>
        </div>
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
        <div className='educationView'>
            <Row>{name}</Row>
            <Row>{degree}</Row>
            <Row>{fieldOfStudy}</Row>
            <Row>{startDate}</Row>
            <Row>{endDate}</Row>
            <Row>{street1}</Row>
            <Row>{street2}</Row>
            <Row>{`${city} ${state} ${zip}`}</Row>
        </div>
    ),
    'positions': ({
        companyId,
        title = '',
        startPay = '',
        endPay = '',
        payPeriod = '',
        startDate = '',
        endDate = ''
    }) => (
        <div className='positionsView'>
            <Row>{companyId}</Row>
            <Row>{title}</Row>
            <Row>{startPay}</Row>
            <Row>{endPay}</Row>
            <Row>{payPeriod}</Row>
            <Row>{startDate}</Row>
            <Row>{endDate}</Row>
        </div>
    ),
    'projects': ({
        title = '',
        description = '',
        positionId,
        educationId,
        startDate = '',
        endDate = '',
    }) => (
        <div className='projectsView'>
            <Row>{title}</Row>
            <Row>{description}</Row>
            <Row>{positionId}</Row>
            <Row>{educationId}</Row>
            <Row>{startDate}</Row>
            <Row>{endDate}</Row>
        </div>
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

export default Details;
