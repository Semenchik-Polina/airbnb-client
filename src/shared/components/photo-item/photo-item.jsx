import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

import { Carousel } from 'react-responsive-carousel';

import './photo-item.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

class PhotoItem extends PureComponent {
    static defaultProps = {
        className: '',
        handleClick: () => {},
    };

    static propTypes = {
        photos: PropTypes.arrayOf(
            PropTypes.shape({
                src: PropTypes.string.isRequired,
            }),
        ).isRequired,
        className: PropTypes.string,
        handleClick: PropTypes.func,
    };

    handleClick = () => {
        this.props.handleClick();
    };

    render() {
        const { photos, className } = this.props;
        const itemClasses = classNames('photo-item', className);

        return (
            <Carousel infiniteLoop className={itemClasses} dynamicHeight={false} showArrows>
                {photos.map((item, index) => (
                    <div key={index} onClick={this.handleClick}>
                        <img src={item.src} alt="hotel" />
                    </div>
                ))}
            </Carousel>
        );
    }
}

export default PhotoItem;
