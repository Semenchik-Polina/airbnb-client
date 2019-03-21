import React, { PureComponent, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import PhotoItem from '../photo-item/photo-item';
import PhotoForm from '../../containers/photo-form-container';

import history from '../../../shared/tools/history';

import defaultImg from '../../../../public/images/hotel-default.jpg';

import './photo-tab.scss';

class PhotoTab extends PureComponent {
    static propTypes = {
        hotelInfo: PropTypes.shape().isRequired,
        removePhotoItem: PropTypes.func.isRequired,
    };

    state = {
        isFormHidden: true,
    };

    removePhotoItem = id => () => {
        this.props.removePhotoItem(id);
    };

    renderPhotoItems = item => (
        <div className="photo-tab__photo-container" key={item.id}>
            <Button
                className="photo-tab__photo-container-delete"
                imgSrc="https://img.icons8.com/ios/50/000000/delete-sign.png"
                handleClick={this.removePhotoItem(item.id)}
            />
            <PhotoItem className="photo-tab__photo-container-item" photoItem={item} />
            <span className="photo-tab__photo-container-type">{item.type}</span>
        </div>
    );

    showForm = () => {
        this.setState({ isFormHidden: false });
    };

    handleClick = () => {
        history.push('/admin-home/create-new-hotel/finish');
    };

    hideForm = () => {
        this.setState({ isFormHidden: true });
    };

    render() {
        return (
            <div className="photo-tab">
                {this.state.isFormHidden ? (
                    <Fragment>
                        <div className="photo-tab__buttons-container">
                            <Button
                                className="photo-tab__buttons-container-item"
                                handleClick={this.showForm}
                                color="white"
                            >
                                Add photos
                            </Button>
                            {this.props.hotelInfo.photos.length > 0 && (
                                <Button
                                    className="photo-tab__buttons-container-item"
                                    handleClick={this.handleClick}
                                    color="secondary"
                                >
                                    Continue
                                </Button>
                            )}
                        </div>
                        {this.props.hotelInfo.photos.length === 0 && (
                            <div className="photo-tab__photo-container">
                                <PhotoItem photoItem={{ photos: [{ preview: defaultImg }], type: 'Default' }} />
                            </div>
                        )}
                        {this.props.hotelInfo.photos.map(this.renderPhotoItems)}
                    </Fragment>
                ) : (
                    <PhotoForm hideForm={this.hideForm} />
                )}
            </div>
        );
    }
}

export default PhotoTab;
