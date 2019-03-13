import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
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
                <label htmlFor="hotelName">
                    {'What is your hotel name?'}
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
                <div>Where is your hotel placed?</div>
                <label htmlFor="hotelName">
                    {'Street and house number'}
                    <Field
                        validate={[validators.isRequired]}
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
                    <Field name="country" component="select">
                        <option value="Belarus">Belarus</option>
                        <option value="Russia">Russia</option>
                        <option value="Ukraine">Ukraine</option>
                    </Field>
                </label>
                <Field
                    validate={[validators.isRequired]}
                    name="sity"
                    icon="icon-envelop"
                    component={TextInput}
                    type="text"
                    essence="Sity"
                    placeholder="Sity"
                />

                {/* <Field
                    validate={[validators.isRequired]}
                    name="numberOfRooms"
                    icon="icon-envelop"
                    component={TextInput}
                    type="number"
                    essence="Number of rooms"
                    placeholder="Number of rooms"
                />
                <Field
                    validate={[validators.isRequired]}
                    name="roomType"
                    component={TextInput}
                    type="text"
                    essence="Room type"
                    placeholder="Room type"
                />
                <Field
                    validate={[validators.isRequired]}
                    name="comfortLevel"
                    component={TextInput}
                    type="text"
                    essence="Comfort level"
                    placeholder="Comfort level"
                />
                <Field
                    validate={[validators.isRequired]}
                    name="roomCost"
                    component={TextInput}
                    type="number"
                    essence="Cost of the room"
                    placeholder="Cost of the room"
                /> */}
                <Button className="hotel-form__submit" disabled={pristine || submitting}>
                    {'Add hotel'}
                </Button>
            </form>
        );
    }
}

export default HotelForm;
