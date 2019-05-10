import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { Field, Form } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import ImageUploader from '../image-uploader/image-uploader';

import * as validators from '../../../shared/tools/validators';

import './room-form.scss';

class RoomForm extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        hideForm: PropTypes.func.isRequired,
        addRoom: PropTypes.func.isRequired,
        className: PropTypes.string,
        roomTypes: PropTypes.arrayOf(
            PropTypes.shape({
                value: PropTypes.string.isRequired,
                label: PropTypes.string.isRequired,
            }),
        ).isRequired,
    };

    handleSubmit = (values) => {
        this.props.addRoom(values);
        this.props.hideForm();
    };

    render() {
        const {
            handleSubmit, pristine, submitting, hideForm, className,
        } = this.props;

        const formClasses = classNames('room-form', className);

        return (
            <Form className={formClasses} onSubmit={handleSubmit(this.handleSubmit)} noValidate>
                <label htmlFor="type">
                    {'Choose room type'}
                    <Field
                        className="room-form__field"
                        name="type"
                        component={DropDownSelect}
                        options={this.props.roomTypes}
                    />
                </label>
                <div className="room-form__multiple-field">
                    <label htmlFor="count">
                        {'Number of type'}
                        <Field
                            className="room-form__field room-form__field_left"
                            name="count"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isInt, validators.isAboveZero]}
                            type="number"
                            essence="Number"
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
                            type="number"
                            icon="icon-user"
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
                            type="number"
                            essence="Cost"
                            placeholder="0"
                        />
                    </label>
                </div>
                <div>
                    <Field
                        name="photos"
                        className="room-form__field"
                        validate={[validators.isRequired]}
                        component={ImageUploader}
                    />
                </div>
                <div className="room-form__buttons-container">
                    <Button
                        src="https://img.icons8.com/ios/26/007883/back-filled.png"
                        className="room-form__buttons-container-item"
                        type="button"
                        color="back"
                        handleClick={hideForm}
                    >
                        Go back
                    </Button>
                    <Button
                        className="room-form__buttons-container-item"
                        color="secondary"
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
