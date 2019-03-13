import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
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
                <label htmlFor="hotelName">
                    {'Room type?'}
                    <Field
                        validate={[validators.isRequired]}
                        name="hotelName"
                        icon="icon-envelop"
                        component={TextInput}
                        type="text"
                        essence="Hotel name"
                        placeholder="Hotel name"
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
