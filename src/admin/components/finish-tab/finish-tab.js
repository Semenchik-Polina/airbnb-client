import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import PhotoItem from '../photo-item/photo-item';

import './finish-tab.scss';

class FinishTab extends PureComponent {
    static propTypes = {
        createHotel: PropTypes.func.isRequired,
        hotelInfo: PropTypes.shape().isRequired,
    };

    handleClick = () => {
        this.props.createHotel(this.props.hotelInfo);
    };

    renderPhotoItems = (item, index) => <PhotoItem photoItem={item} key={index} />;

    render() {
        const { hotelMainInfo, photos } = this.props.hotelInfo;

        return (
            <div className="finish-tab">
                <span className="finish-tab__header">{hotelMainInfo.hotelName}</span>
                {photos.map(this.renderPhotoItems)}
                <Button className="finish-tab__submit" handleClick={this.handleClick} color="primary">
                    Continue
                </Button>
            </div>
        );
    }
}

export default FinishTab;
