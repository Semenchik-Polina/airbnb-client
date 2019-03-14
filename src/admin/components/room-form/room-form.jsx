import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field } from 'redux-form';
import TextInput from '../../../shared/components/text-input/text-input';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import * as validators from '../../../shared/tools/validators';
import './room-form.scss';

class RoomForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
    };

    render() {
        const { handleSubmit, pristine, submitting } = this.props;
        return (
            <form className="room-form" onSubmit={handleSubmit} noValidate>
                <label htmlFor="type">
                    {'Choose room type'}
                    <Field
                        className="room-form__field"
                        name="type"
                        component={DropDownSelect}
                        options={['Single', 'Double', 'Twin', 'Apartment']}
                    />
                </label>
                <div className="room-form__multiple-field">
                    <label htmlFor="amount">
                        {'Number of type'}
                        <Field
                            className="room-form__field"
                            name="amount"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isInt]}
                            type="text"
                            essence="Number of type"
                            placeholder="0"
                        />
                    </label>
                    <label htmlFor="capacity">
                        {'Сapacity'}
                        <Field
                            className="room-form__field"
                            name="capacity"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isInt]}
                            type="text"
                            essence="Capacity"
                            placeholder="0"
                        />
                    </label>
                    <label htmlFor="cost">
                        {'Basic cost per night'}
                        <Field
                            className="room-form__field"
                            name="cost"
                            component={TextInput}
                            validate={[validators.isRequired, validators.isFloat]}
                            type="text"
                            essence="Cost"
                            placeholder="0"
                        />
                    </label>
                </div>
                <Button className="hotel-form__submit" disabled={pristine || submitting}>
                    {'Continue'}
                </Button>
            </form>
        );
    }
}

export default RoomForm;
