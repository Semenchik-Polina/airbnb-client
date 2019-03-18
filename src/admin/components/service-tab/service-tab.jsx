import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ServiceForm from '../../containers/service-form-container';

class ServiceTab extends PureComponent {
    static propTypes = {
        addServices: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        this.props.addServices(values);
    };

    render() {
        return <ServiceForm onSubmit={this.handleSubmit} />;
    }
}

export default ServiceTab;
