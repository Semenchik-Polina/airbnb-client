import React, { PureComponent } from 'React';
import PropTypes from 'prop-types';

import { Field, Form } from 'redux-form';

import CounterInput from '../../../shared/components/counter-input/counter-input';
import Button from '../../../shared/components/button/button';
import TimePickerInput from '../time-picker-input/time-picker-input';

import './details-tab.scss';

class DetailsTab extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
    };

    handleSubmit = () => {};

    render() {
        const { handleSubmit } = this.props;

        return (
            <div className="details-tab">
                <div>Who’s coming?</div>
                <Form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field component={CounterInput} name="guests" />
                    <span>Arrive at</span>
                    <Field component={TimePickerInput} name="arriveTime" />
                    <div className="photo-form__buttons-container">
                        <Button className="photo-form__buttons-container-item" color="secondary">
                            Calculate
                        </Button>
                    </div>
                </Form>
            </div>
        );
    }
}

export default DetailsTab;
