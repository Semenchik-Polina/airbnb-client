import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

import { Carousel } from 'react-responsive-carousel';

import './photo-item.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class PhotoItem extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        photoItem: PropTypes.shape({
            photos: PropTypes.arrayOf(
                PropTypes.shape({
                    src: PropTypes.string.isRequired,
                }),
            ),
        }).isRequired,
        className: PropTypes.string,
    };

    render() {
        const { photoItem, className } = this.props;
        const itemClasses = classNames('photo-item', className);

        return (
            <Carousel infiniteLoop className={itemClasses} dynamicHeight={false} showArrows>
                {photoItem.photos.map((item, index) => (
                    <div key={index}>
                        <img src={item.src} alt="hotel" />
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default PhotoItem;
