import React, { PureComponent } from 'react';

import BeatLoader from 'react-spinners/BeatLoader';

import './loader.scss';
// className="hotel-page hotel-page__loader"
const Loader = () => (
    <div className="loader">
        <BeatLoader sizeUnit="px" size={20} color="#2B9E86" loading />
    </div>
);

export default Loader;
