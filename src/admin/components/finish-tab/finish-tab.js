import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import history from '../../../shared/tools/history';

import Button from '../../../shared/components/button/button';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        hotelInfo: PropTypes.shape().isRequired,
    };

    onSubmit = () => {
        this.props.createHotel();
        history.push('/admin-home/create-new-hotel/rooms');
    };

    render() {
        console.log(this.props.hotelInfo);

        return (
            <Button className="finish-form__submit" color="primary">
                Continue
            </Button>
        );
    }
}

export default FinishTab;
