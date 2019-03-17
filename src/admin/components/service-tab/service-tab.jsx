import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ServiceForm from '../../containers/service-form-container';
import './service-tab.scss';

class ServiceTab extends PureComponent {
    static propTypes = {
        addServices: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        this.props.addServices(values);
    };

    render() {
        return (
            <div className="service-tab">
                <ServiceForm onSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default ServiceTab;
