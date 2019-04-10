import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Switch from 'rc-switch';

import './switch-input.scss';

class SwitchInput extends PureComponent {
    static propTypes = {
        input: PropTypes.shape({
            onChange: PropTypes.func.isRequired,
            onBlur: PropTypes.func.isRequired,
            value: PropTypes.bool.isRequired,
        }).isRequired,
    };

    onChange = () => {
        const { input } = this.props;
        input.onChange(!input.value);
    };

    render() {
        const { ...props } = this.props;
        const { input } = this.props;

        return (
            <div {...props}>
                <Switch
                    onClick={this.onChange}
                    checked={input.value}
                    checkedChildren="Included"
                    unCheckedChildren="None"
                    prefixCls="switch-input"
                />
            </div>
        );
    }
}

export default SwitchInput;
