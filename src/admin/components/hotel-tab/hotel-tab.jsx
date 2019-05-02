import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';

import * as validators from '../../../shared/tools/validators';
import { COUNTRIES } from '../../constants/index';

import './hotel-tab.scss';

class HotelTab extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        addHotelInfo: PropTypes.func.isRequired,
    };

    onSubmit = (values) => {
        this.props.addHotelInfo(values);
    };

    render() {
        const { pristine, submitting, handleSubmit } = this.props;

        return (
            <div className="hotel-tab">
                <Form className="hotel-tab__form" onSubmit={handleSubmit(this.onSubmit)} noValidate>
                    <label className="hotel-tab__form-label" htmlFor="name">
                        {'What is your hotel name?'}
                        <Field
                            validate={[validators.isRequired]}
                            className="hotel-tab__form-field"
                            name="name"
                            component={TextInput}
                            type="text"
                            essence="Hotel name"
                            placeholder="Hotel name"
                        />
                    </label>
                    <span className="hotel-tab__form-section">Where is your hotel placed?</span>
                    <label htmlFor="hotelName">
                        {'Street and house number'}
                        <Field
                            validate={[validators.isRequired]}
                            className="hotel-tab__form-field"
                            name="address"
                            component={TextInput}
                            type="text"
                            essence="Street and house number"
                            placeholder="For example, Red Square, house 1"
                        />
                    </label>
                    <label htmlFor="hotelName">
                        {'Country/territory'}
                        <Field
                            className="hotel-tab__form-field"
                            name="country"
                            component={DropDownSelect}
                            options={COUNTRIES}
                        />
                    </label>
                    <label htmlFor="hotelName">
                        {'City'}
                        <Field
                            validate={[validators.isRequired]}
                            className="hotel-tab__form-field"
                            name="city"
                            component={TextInput}
                            type="text"
                            essence="City"
                            placeholder="City"
                        />
                    </label>
                    <Button className="hotel-tab__form-submit" color="secondary" disabled={pristine || submitting}>
                        Continue
                    </Button>
                </Form>
            </div>
        );
    }
}

export default HotelTab;
