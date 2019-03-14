import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import * as validators from '../../../shared/tools/validators';
import './service-form.scss';

class ServiceForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="service-form" onSubmit={handleSubmit} noValidate>
                <div className="service-form__header">Facilities and Services</div>
                <div className="service-form__section">Internet</div>

                <label htmlFor="hotelName">
                    {'Will your guests have access to the Internet?'}
                    <Field
                        className="hotel-form__field"
                        name="country"
                        component={DropDownSelect}
                        options={['Yes, for free', 'Yes, for money', 'No']}
                    />
                </label>

                <Button className="hotel-form__submit" disabled={pristine || submitting}>
                    {'Add hotel'}
                </Button>
            </form>
        );
    }
}

export default ServiceForm;
