import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import * as validators from '../../../shared/tools/validators';
import './hotel-form.scss';

class HotelForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="hotel-form" onSubmit={handleSubmit} noValidate>
                <label className="hotel-form__label" htmlFor="hotelName">
                    {'What is your hotel name?'}
                    <Field
                        validate={[validators.isRequired]}
                        className="hotel-form__field"
                        name="hotelName"
                        icon="icon-envelop"
                        component={TextInput}
                        type="text"
                        essence="Hotel name"
                        placeholder="Hotel name"
                    />
                </label>
                <div className="hotel-form__section">Where is your hotel placed?</div>
                <label htmlFor="hotelName">
                    {'Street and house number'}
                    <Field
                        validate={[validators.isRequired]}
                        className="hotel-form__field"
                        name="streetHouse"
                        icon="icon-envelop"
                        component={TextInput}
                        type="text"
                        essence="Street and house number"
                        placeholder="For example, Red Square, house 1"
                    />
                </label>
                <label htmlFor="hotelName">
                    {'Country/territory'}
                    <Field
                        className="hotel-form__field"
                        name="country"
                        component={DropDownSelect}
                        options={['Belarus', 'Russia']}
                    />
                </label>
                <label htmlFor="hotelName">
                    {'Sity'}
                    <Field
                        validate={[validators.isRequired]}
                        className="hotel-form__field"
                        name="sity"
                        icon="icon-envelop"
                        component={TextInput}
                        type="text"
                        essence="Sity"
                        placeholder="Sity"
                    />
                </label>
                <Button className="hotel-form__submit" disabled={pristine || submitting}>
                    {'Add hotel'}
                </Button>
            </form>
        );
    }
}

export default HotelForm;
