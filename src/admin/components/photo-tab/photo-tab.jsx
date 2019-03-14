import React, { PureComponent } from 'react';
import Dropzone from 'react-dropzone';

class PhotoTab extends PureComponent {
    render() {
        return (
            <Dropzone onDrop={acceptedFiles => console.log(acceptedFiles)}>
                {({ getRootProps, getInputProps }) => (
                    <section>
                        <div {...getRootProps()}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                    </section>
                )}
            </Dropzone>
        );
    }
}

export default PhotoTab;
