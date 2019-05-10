import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader/loader';

import './loader-wrapper.scss';

class LoaderWrapper extends PureComponent {
    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        isLoading: PropTypes.bool.isRequired,
    };

    render() {
        if (this.props.isLoading) {
            return <Loader />;
        }
        return React.Children.toArray(this.props.children);
    }
}

export default LoaderWrapper;
