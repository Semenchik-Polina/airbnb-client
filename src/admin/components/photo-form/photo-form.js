import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';

import Dropzone from 'react-dropzone';
import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';

import { HOTEL_ZONES } from '../../constants/index';
import * as validators from '../../../shared/tools/validators';

import './photo-form.scss';

class PhotoForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        reset: PropTypes.func.isRequired,
        addPhotos: PropTypes.func.isRequired,
        destroyPhotoForm: PropTypes.func.isRequired,
        hideForm: PropTypes.func.isRequired,
    };

    state = {
        files: [],
    };

    handleDrop = field => (acceptedFiles) => {
        this.setState(state => ({
            files: [
                ...state.files,
                ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })),
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

    handleSubmit = (values) => {
        this.props.addPhotos(values);
        this.props.destroyPhotoForm();
        this.setState({ files: [] });
        this.props.hideForm();
    };

    render() {
        const { handleSubmit } = this.props;

        return (
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

export default PhotoForm;
