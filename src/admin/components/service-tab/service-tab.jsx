import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

import { Field, Form, FieldArray } from 'redux-form';
import BeatLoader from 'react-spinners/BeatLoader';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import CheckboxGroup from '../../../shared/components/checkbox-group/checkbox-group';
import TextInput from '../../../shared/components/text-input/text-input';

import * as validators from '../../../shared/tools/validators';
import { SERVICE_ANSWERS } from '../../constants/index';

import './service-tab.scss';

class ServiceTab extends PureComponent {
    static defaultProps = {
        supposedFacilities: null,
        formValues: null,
    };

    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        pristine: PropTypes.bool.isRequired,
        submitting: PropTypes.bool.isRequired,
        addServices: PropTypes.func.isRequired,
        fetchSupposedFacilities: PropTypes.func.isRequired,
        supposedFacilities: PropTypes.shape({
            freeFacilities: PropTypes.arrayOf(
                PropTypes.shape({
                    name: PropTypes.string.isRequired,
                    value: PropTypes.string.isRequired,
                }),
            ),
            possiblyPaidFacilities: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    hint: PropTypes.string.isRequired,
                    canBePaid: PropTypes.bool.isRequired,
                }),
            ),
            rawFacilities: PropTypes.arrayOf(
                PropTypes.shape({
                    id: PropTypes.string.isRequired,
                    name: PropTypes.string.isRequired,
                    hint: PropTypes.string,
                    imageUrl: PropTypes.string,
                    canBePaid: PropTypes.bool.isRequired,
                }),
            ),
        }),
        formValues: PropTypes.shape({}),
    };

    componentDidMount = () => {
        if (!this.props.supposedFacilities) {
            this.props.fetchSupposedFacilities();
        }
    };

    onSubmit = (values) => {
        this.props.addServices(values, this.props.supposedFacilities.rawFacilities);
    };

    renderPaidFacilities = ({ fields }) => {
        const { formValues } = this.props;

        return fields.map((member, index) => {
            const { possiblyPaidFacilities } = this.props.supposedFacilities;

            return (
                <Fragment key={index}>
                    <div className="service-tab__form-section">{_.upperFirst(possiblyPaidFacilities[index].name)}</div>
                    <label htmlFor="internet">
                        {possiblyPaidFacilities[index].hint}
                        <Field
                            className="service-tab__form-field"
                            name={`${member}.selectedOption`}
                            component={DropDownSelect}
                            options={SERVICE_ANSWERS}
                            format={value => (value === '' ? null : value)}
                        />
                        {formValues.paidFacilities[index].selectedOption
                            && formValues.paidFacilities[index].selectedOption.isPaid && (
                            <Field
                                className="room-form__field room-form__field_left"
                                name={`${member}.price`}
                                component={TextInput}
                                validate={[validators.isRequired, validators.isInt, validators.isAboveZero]}
                                type="number"
                                essence="Price"
                                placeholder="0"
                            />
                        )}
                    </label>
                </Fragment>
            );
        });
    };

    render() {
        const {
            handleSubmit, pristine, submitting, supposedFacilities,
        } = this.props;

        if (supposedFacilities) {
            return (
                <div className="service-tab">
                    <Form className="service-tab__form" onSubmit={handleSubmit(this.onSubmit)} noValidate>
                        <div className="service-tab__form-header">Facilities and Services</div>
                        <FieldArray name="paidFacilities" component={this.renderPaidFacilities} />
                        <div className="service-tab__form-section">Another popular facilities</div>
                        <Field
                            name="facilities"
                            component={CheckboxGroup}
                            options={supposedFacilities.freeFacilities}
                        />
                        <Button
                            className="service-tab__form-submit"
                            color="secondary"
                            disabled={pristine || submitting}
                        >
                            {'Continue'}
                        </Button>
                    </Form>
                </div>
            );
        }
        return (
            <div className="hotel-page hotel-page__loader">
                <BeatLoader sizeUnit="px" size={20} color="#2B9E86" loading />
            </div>
        );
    }
}

export default ServiceTab;
