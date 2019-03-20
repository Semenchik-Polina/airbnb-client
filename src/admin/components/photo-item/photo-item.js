import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import { Carousel } from 'react-responsive-carousel';

import './photo-item.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class PhotoItem extends PureComponent {
    static propTypes = {
        photoItem: PropTypes.shape({
            type: PropTypes.string,
            photos: PropTypes.arrayOf(PropTypes.shape()),
        }).isRequired,
    };

    renderCarouselItem = (item, index) => (
        <div key={index}>
            <img src={item.preview} alt="hotel" />
            <p className="legend">{this.props.photoItem.type}</p>
        </div>
    );

    render() {
        const { photoItem } = this.props;
        return (
            <div className="photo-item">
                <Carousel showArrows>
                    {photoItem.photos.map(this.renderCarouselItem)}
                </Carousel>
            </div>
        );
    }
}

export default PhotoItem;
