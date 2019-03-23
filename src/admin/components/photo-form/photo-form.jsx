import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Field, Form } from 'redux-form';

import Button from '../../../shared/components/button/button';
import DropDownSelect from '../../../shared/components/dropdown-select/dropdown-select';
import ImageUploader from '../image-uploader/image-uploader';

import { HOTEL_ZONES } from '../../constants/index';
import * as validators from '../../../shared/tools/validators';

import './photo-form.scss';

class PhotoForm extends PureComponent {
    static propTypes = {
        handleSubmit: PropTypes.func.isRequired,
        addPhotos: PropTypes.func.isRequired,
        destroyPhotoForm: PropTypes.func.isRequired,
        hideForm: PropTypes.func.isRequired,
    };

    handleSubmit = (values) => {
        this.props.addPhotos(values);
        this.props.destroyPhotoForm();
        this.props.hideForm();
    };

    render() {
        const { handleSubmit, hideForm } = this.props;

        return (
            <Form className="photo-form" onSubmit={handleSubmit(this.handleSubmit)}>
                <label htmlFor="type">
                    {'Choose hotel zone'}
                    <Field className="photo-form__field" name="type" component={DropDownSelect} options={HOTEL_ZONES} />
                </label>
                <Field name="photos" className="photo-form__field" validate={[validators.isRequired]} component={ImageUploader} />
                <div className="photo-form__buttons-container">
                    <Button
                        src="https://img.icons8.com/ios/26/007883/back-filled.png"
                        className="photo-form__buttons-container-item"
                        type="button"
                        color="back"
                        handleClick={hideForm}
                    >
                        Go back
                    </Button>
                    <Button className="photo-form__buttons-container-item" color="secondary">
                        Add photos
                    </Button>
                </div>
            </Form>
        );
    }
}

export default PhotoForm;
