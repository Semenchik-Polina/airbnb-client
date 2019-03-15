import React, { PureComponent } from 'react';
import Dropzone from 'react-dropzone';
import './photo-tab.scss';

class PhotoTab extends PureComponent {
    method() {}

    render() {
        return (
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section className="photo-tab">
                        <div className="photo-tab__uploader" {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag `n` drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }
}

export default PhotoTab;
