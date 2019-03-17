import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import CheckboxGroup from '../../../shared/components/checkbox-group/checkbox-group';
import './service-form.scss';

class ServiceForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        const optionsList = [
            { id: 1, name: 'Restaurant' },
            { id: 2, name: 'Spa and Wellness Center' },
            { id: 3, name: 'Swimming pool' },
            { id: 4, name: 'Air conditioning' },
            { id: 5, name: 'Massage' },
        ];
        const options = [
            { value: 'Yes, for free', label: 'Yes, for free' },
            { value: 'Yes, for money', label: 'Yes, for money' },
            { value: 'No', label: 'No' },
        ];

        return (
            <form className="service-form" onSubmit={handleSubmit} noValidate>
                <div className="service-form__header">Facilities and Services</div>
                <div className="service-form__section">Internet</div>
                <label htmlFor="internet">
                    {'Will your guests have access to the Internet?'}
                    <Field
                        className="service-form__field"
                        name="internet"
                        component={DropDownSelect}
                        options={options}
                    />
                </label>
                <div className="service-form__section">Parking</div>
                <label htmlFor="parking">
                    {'Is parking available?'}
                    <Field
                        className="service-form__field"
                        name="parking"
                        component={DropDownSelect}
                        options={options}
                    />
                </label>
                <div className="service-form__section">Breakfast</div>
                <label htmlFor="breakfast">
                    {'Is breakfast served for guests?'}
                    <Field
                        className="service-form__field"
                        name="breakfast"
                        component={DropDownSelect}
                        options={options}
                    />
                </label>
                <div className="service-form__section">Another popular facilities</div>
                <Field name="facilities" component={CheckboxGroup} options={optionsList} />
                <Button className="service-form__submit" disabled={pristine || submitting}>
                    {'Continue'}
                </Button>
            </form>
        );
    }
}

export default ServiceForm;
