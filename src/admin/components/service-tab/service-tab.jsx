import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import ServiceForm from '../../containers/service-form-container';

// import './service-form.scss';

class ServiceTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        console.log(values);
        this.props.createHotel(values);
    };

    render() {
        return <ServiceForm onSubmit={this.handleSubmit} />;
    }
}

export default ServiceTab;
