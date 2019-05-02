import _ from 'lodash';
import { connect } from 'react-redux';
import { reduxForm, getFormValues } from 'redux-form';

import ServiceTab from '../components/service-tab/service-tab';

import { SERVICE_ANSWERS, SERVICE_ANSWERS_INDEXES } from '../constants/index';

import * as actions from '../actions/actions';

const getServiceFormInitialValues = (services, supposedFacilities) => {
    if (supposedFacilities) {
        const initialValues = {
            facilities: [],
            paidFacilities: supposedFacilities.possiblyPaidFacilities.map(facility => ({
                selectedOption: SERVICE_ANSWERS[SERVICE_ANSWERS_INDEXES.UNAVAILABLE_FACILITY_INDEX].value,
                price: null,
                id: facility.id,
            })),
        };

        if (services) {
            initialValues.facilities = services
                .filter(service => !service.canBePaid)
                .map(service => service.id);

            const existingFacilities = services
                .filter(service => service.canBePaid)
                .map(service => ({
                    selectedOption:
                        SERVICE_ANSWERS[
                            service.price > 0
                                ? SERVICE_ANSWERS_INDEXES.PAID_FACILITY_INDEX
                                : SERVICE_ANSWERS_INDEXES.FREE_FACILITY_INDEX
                        ].value,
                    price: service.price,
                    id: service.id,
                }));

            const newFacilities = initialValues.paidFacilities.map((facility) => {
                const existingFacility = _.find(existingFacilities, { id: facility.id });
                return existingFacility || facility;
            });

            initialValues.paidFacilities = newFacilities;
        }

        return initialValues;
    }

    return null;
};

export default connect(
    state => ({
        supposedFacilities: state.adminReducer.supposedFacilities,
        formValues: getFormValues('serviceForm')(state),
        facilities: state.adminReducer.hotelInfo.facilities,
        initialValues: getServiceFormInitialValues(
            state.adminReducer.hotelInfo.facilities,
            state.adminReducer.supposedFacilities,
        ),
    }),
    dispatch => ({
        addServices: (data, supposedFacilities) => dispatch(actions.addServices(data, supposedFacilities)),
        fetchSupposedFacilities: () => dispatch(actions.fetchSupposedFacilities()),
    }),
)(
    reduxForm({
        form: 'serviceForm',
    })(ServiceTab),
);
