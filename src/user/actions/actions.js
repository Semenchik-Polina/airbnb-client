import { toast } from 'react-toastify';
import _ from 'lodash';

import history from '../../shared/tools/history';

import * as controllers from '../controllers/controllers';

import { userTypes } from '../constants';

const showErrorToast = (err) => {
    const message = err.response && err.response.data.error ? err.response.data.error.message : `🦄 ${err}`;
    toast(message);
};

export function fetchHotels() {
    return async (dispatch) => {
        try {
            const { data } = await controllers.fetchHotels();

            dispatch({
                type: userTypes.FETCH_ALL_HOTELS,
                data,
            });
        } catch (err) {
            showErrorToast(err);
        }
    };
}
