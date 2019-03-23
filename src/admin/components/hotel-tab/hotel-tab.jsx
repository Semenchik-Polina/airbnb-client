import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Field, Form } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';

import * as validators from '../../../shared/tools/validators';
import { COUNTRIES } from '../../constants/index';

import './hotel-tab.scss';

class HotelTab extends PureComponent {
    static propTypes = {
        initialValues: PropTypes.shape().isRequired,
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        addHotelInfo: PropTypes.func.isRequired,
        initialize: PropTypes.func.isRequired,
    };

    componentDidMount = () => {
        if (_.isEmpty(this.props.initialValues)) {
            this.props.initialize({ country: 'Russia' });
        }
    };

    onSubmit = (values) => {
        this.props.addHotelInfo(values);
    };

    render() {
        const { pristine, submitting, handleSubmit } = this.props;

        return (
            <Form className="hotel-form" onSubmit={handleSubmit(this.onSubmit)} noValidate>
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
                        options={COUNTRIES}
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
                <Button className="hotel-form__submit" color="secondary" disabled={pristine || submitting}>
                    Continue
                </Button>
            </Form>
        );
    }
}

export default HotelTab;
