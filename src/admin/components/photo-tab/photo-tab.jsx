import React, { PureComponent } from 'react';
import Dropzone from 'react-dropzone';

import './photo-tab.scss';

class PhotoTab extends PureComponent {
    onDrop = () => {};

    renderUploader = () => ({ getRootProps, getInputProps }) => (
        <section className="photo-tab">
            <div className="photo-tab__uploader" {...getRootProps()}>
                <input {...getInputProps()} />
                <p>Drag `n` drop some files here, or click to select files</p>
            </div>
        </section>
    );

    render() {
        return (
            <Dropzone onDrop={this.onDrop}>
                {this.renderUploader()}
            </Dropzone>
        );
    }
}

export default PhotoTab;
