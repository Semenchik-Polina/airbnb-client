import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import './photo-item.scss';

class PhotoItem extends PureComponent {
    static propTypes = {};

    render() {
        return (
            <div className="photo-item">
                <span className="photo-item__type">Hotel</span>
                <span>Photoes</span>
            </div>
        );
    }
}

export default PhotoItem;
