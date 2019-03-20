import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';

import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';

import * as validators from '../../../shared/tools/validators';
import { ROOM_TYPES } from '../../constants/index';

import './room-form.scss';

class RoomForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        hideForm: PropTypes.func.isRequired,
        addRoomType: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        this.props.addRoomType(values);
        this.props.hideForm();
    };

    render() {
        const {
            handleSubmit, pristine, submitting, hideForm,
        } = this.props;

        return (
            <Form className="room-form" onSubmit={handleSubmit(this.handleSubmit)} noValidate>
                <label htmlFor="type">
                    {'Choose room type'}
                    <Field className="room-form__field" name="zone" component={DropDownSelect} options={ROOM_TYPES} />
                </label>
                <div className="room-form__multiple-field">
                    <label htmlFor="amount">
                        {'Number of type'}
                        <Field
                            className="room-form__field room-form__field_left"
                            name="amount"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isInt, validators.isAboveZero]}
                            type="text"
                            essence="Number of type"
                            placeholder="0"
                        />
                    </label>
                    <label htmlFor="capacity">
                        {'Сapacity'}
                        <Field
                            className="room-form__field room-form__field_center"
                            name="capacity"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isInt, validators.isAboveZero]}
                            type="text"
                            essence="Capacity"
                            placeholder="0"
                        />
                    </label>
                    <label htmlFor="cost">
                        {'Сost per night'}
                        <Field
                            className="room-form__field room-form__field_right"
                            name="cost"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isFloat, validators.isAboveZero]}
                            type="text"
                            essence="Cost"
                            placeholder="0"
                        />
                    </label>
                </div>
                <div className="room-form__buttons-container">
                    <Button
                        className="room-form__buttons-container-item"
                        type="button"
                        color="secondary"
                        handleClick={hideForm}
                    >
                        Bo back
                    </Button>
                    <Button
                        className="room-form__buttons-container-item"
                        color="primary"
                        disabled={pristine || submitting}
                    >
                        Continue
                    </Button>
                </div>
            </Form>
        );
    }
}

export default RoomForm;
