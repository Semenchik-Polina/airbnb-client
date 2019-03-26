import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import Tool from '../../../shared/components/tool/tool';

import PhotoItem from '../photo-item/photo-item';
import PhotoForm from '../../containers/photo-form-container';

import history from '../../../shared/tools/history';

import './photo-tab.scss';

class PhotoTab extends PureComponent {
    static propTypes = {
        photoTour: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
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
            <Tool
                className="photo-tab__photo-container-delete"
                src="/images/tools/delete.png"
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
                    <div className="photo-tab__content">
                        <div className="photo-tab__content-buttons-container">
                            <Button
                                className="photo-tab__content-buttons-container-item"
                                handleClick={this.showForm}
                                color="white"
                            >
                                Add photos
                            </Button>
                            {this.props.photoTour.length > 0 && (
                                <Button
                                    className="photo-tab__content-buttons-container-item"
                                    handleClick={this.handleClick}
                                    color="secondary"
                                >
                                    Continue
                                </Button>
                            )}
                        </div>
                        {this.props.photoTour.length === 0 && (
                            <div className="photo-tab__content-photo-container">
                                <PhotoItem
                                    photoItem={{ photos: [{ src: '/images/hotel-default.jpg' }], type: 'Default' }}
                                />
                            </div>
                        )}
                        {this.props.photoTour.map(this.renderPhotoItems)}
                    </div>
                ) : (
                    <PhotoForm className="photo-tab__content" hideForm={this.hideForm} />
                )}
            </div>
        );
    }
}

export default PhotoTab;
