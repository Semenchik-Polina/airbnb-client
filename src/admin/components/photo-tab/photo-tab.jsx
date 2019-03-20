import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';

import Dropzone from 'react-dropzone';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import PhotoItem from '../photo-item/photo-item';

import history from '../../../shared/tools/history';

import { HOTEL_ZONES } from '../../constants/index';
import * as validators from '../../../shared/tools/validators';

import './photo-tab.scss';

class PhotoTab extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        addPhotos: PropTypes.func.isRequired,
        photoItems: PropTypes.arrayOf(PropTypes.shape()).isRequired,
    };

    state = {
        files: (this.props.photoValues && this.props.photoValues.photos) || [],
        isFormHidden: true,
    };

    handleDrop = field => (acceptedFiles) => {
        this.setState(state => ({
            files: [
                ...state.files,
                ...acceptedFiles.map(file => Object.assign(file, {
                    preview: URL.createObjectURL(file),
                })),
            ],
        }));
        field.input.onChange(this.state.files);
    };

    showUploadedImages = (file, index) => (
        <div key={index}>
            <div>
                <img className="photo-tab__image" src={file.preview} alt="hotel" />
            </div>
        </div>
    );

    renderUploader = () => ({ getRootProps, getInputProps }) => (
        <section className="photo-tab__uploader">
            <div {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag `n` drop photos here, or click to select photos</p>
            </div>
            {this.state.files.length > 0 && <aside>{this.state.files.map(this.showUploadedImages)}</aside>}
        </section>
    );

    renderDropZoneField = field => (
        <Dropzone onDrop={this.handleDrop(field)} accept="image/*" name={field.name}>
            {this.renderUploader()}
        </Dropzone>
    );

    renderPhotoItems = (item, index) => <PhotoItem key={index} />;

    handleSubmit = (values) => {
        this.props.addPhotos(values);
        this.setState({ isFormHidden: true });
        // history.push('/admin-home/create-new-hotel/finish');
    };

    handleClick = () => {
        this.setState({ isFormHidden: false });
    };

    render() {
        const { handleSubmit } = this.props;
        return this.state.isFormHidden ? (
            <div>
                {this.props.photoItems.length > 0 && this.props.photoItems.map(this.renderPhotoItems)}{' '}
                <Button className="photo-form__button" handleClick={this.handleClick} color="primary">
                    Add photos
                </Button>
            </div>
        ) : (
            <Form className="photo-form" onSubmit={handleSubmit(this.handleSubmit)}>
                <label htmlFor="type">
                    {'Choose hotel zone'}
                    <Field className="photo-form__field" name="type" component={DropDownSelect} options={HOTEL_ZONES} />
                </label>
                <Field name="photos" validate={[validators.isRequired]} component={this.renderDropZoneField} />

                <Button className="photo-form__button" color="primary">
                    Add photos
                </Button>
            </Form>
        );
    }
}

export default PhotoTab;
