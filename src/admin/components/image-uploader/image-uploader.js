import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import Dropzone from 'react-dropzone';
import Button from '../../../shared/components/button/button';

import './image-uploader.scss';

class ImageUploader extends PureComponent {
    static defaultProps = {
        className: '',
    };

    static propTypes = {
        className: PropTypes.string,
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
        }).isRequired,
        meta: PropTypes.shape().isRequired,
    };

    state = {
        files: [],
    };

    handleDrop = (acceptedFiles) => {
        this.setState(state => ({
            files: [
                ...state.files,
                ...acceptedFiles.map(file => Object.assign(file, { preview: URL.createObjectURL(file) })),
            ],
        }));

        this.props.input.onChange(this.state.files);
    };

    removeItem = removingFile => () => {
        const newFiles = this.state.files.filter(file => file !== removingFile);

        this.setState(() => ({
            files: newFiles,
        }));

        this.props.input.onChange(newFiles.length > 0 ? newFiles : null);
    };

    renderUploadedImages = () => this.state.files.map((file, index) => (
        <div className="uploader__aside-container" key={index}>
            <Button
                className="photo-tab__photo-container-delete"
                type="button"
                imgSrc="https://img.icons8.com/ios/50/000000/delete-sign.png"
                handleClick={this.removeItem(file)}
            />
            <img className="uploader__aside-container-image" src={file.preview} alt="hotel" />
        </div>
    ));

    renderUploader = ({ getRootProps, getInputProps }) => {
        const {
            meta: { touched, error },
            className,
        } = this.props;

        const uploaderClasses = classNames('uploader', className, {
            uploader_invalid: error && touched,
        });

        const activeZoneClasses = classNames('uploader__active-zone', {
            'uploader__active-zone_invalid': error && touched,
        });

        return (
            <section className={uploaderClasses}>
                <div {...getRootProps()}>
                    <input {...getInputProps()} />
                    <p className={activeZoneClasses}>Drag `n` drop photos here, or click to select photos</p>
                </div>
                {this.state.files.length > 0 && <aside className="uploader__aside">{this.renderUploadedImages()}</aside>}
            </section>
        );
    };

    render() {
        return (
            <Dropzone onDrop={this.handleDrop} accept="image/*">
                {this.renderUploader}
            </Dropzone>
        );
    }
}

export default ImageUploader;
