import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import CheckboxGroup from '../../../shared/components/checkbox-group/checkbox-group';

import { POPULAR_FACILITIES, SERVICE_ANSWERS } from '../../constants/index';

import './service-tab.scss';

class ServiceTab extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        addServices: PropTypes.func.isRequired,
    };

    onSubmit = (values) => {
        this.props.addServices(values);
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;

        return (
            <div className="service-tab">
                <Form className="service-tab__form" onSubmit={handleSubmit(this.onSubmit)} noValidate>
                    <div className="service-tab__form-header">Facilities and Services</div>
                    <div className="service-tab__form-section">Internet</div>
                    <label htmlFor="internet">
                        {'Will your guests have access to the Internet?'}
                        <Field
                            className="service-tab__form-field"
                            name="internet"
                            component={DropDownSelect}
                            options={SERVICE_ANSWERS}
                        />
                    </label>
                    <div className="service-tab__form-section">Parking</div>
                    <label htmlFor="parking">
                        {'Is parking available?'}
                        <Field
                            className="service-tab__form-field"
                            name="parking"
                            component={DropDownSelect}
                            options={SERVICE_ANSWERS}
                        />
                    </label>
                    <div className="service-tab__form-section">Breakfast</div>
                    <label htmlFor="breakfast">
                        {'Is breakfast served for guests?'}
                        <Field
                            className="service-tab__form-field"
                            name="breakfast"
                            component={DropDownSelect}
                            options={SERVICE_ANSWERS}
                        />
                    </label>
                    <div className="service-tab__form-section">Another popular facilities</div>
                    <Field name="facilities" component={CheckboxGroup} options={POPULAR_FACILITIES} />
                    <Button className="service-tab__form-submit" color="secondary" disabled={pristine || submitting}>
                        {'Continue'}
                    </Button>
                </Form>
            </div>
        );
    }
}

export default ServiceTab;
