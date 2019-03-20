import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Button from '../../../shared/components/button/button';
import PhotoItem from '../photo-item/photo-item';
import PhotoForm from '../../containers/photo-form-container';

import history from '../../../shared/tools/history';

import './photo-tab.scss';

class PhotoTab extends PureComponent {
    static propTypes = {
        photoItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    };

    state = {
        isFormHidden: true,
    };

    renderPhotoItems = (item, index) => <PhotoItem photoItem={item} key={index} />;

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
        return this.state.isFormHidden ? (
            <div>
                <div className="photo-tab__buttons-container">
                    <Button className="photo-tab__buttons-container-item" handleClick={this.showForm} color="primary">
                        Add photos
                    </Button>
                    {this.props.photoItems.length > 0 && (
                        <Button
                            className="photo-tab__buttons-container-item"
                            handleClick={this.handleClick}
                            color="secondary"
                        >
                            Continue
                        </Button>
                    )}
                </div>
                {this.props.photoItems.reverse().map(this.renderPhotoItems)}
            </div>
        ) : (
            <PhotoForm hideForm={this.hideForm} />
        );
    }
}

export default PhotoTab;
