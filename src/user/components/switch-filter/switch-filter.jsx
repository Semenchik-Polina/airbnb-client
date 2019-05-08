import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import Switch from 'rc-switch';

import './switch-filter.scss';

class SwitchFilter extends PureComponent {
    static propTypes = {
        checked: PropTypes.bool.isRequired,
        onChange: PropTypes.func.isRequired,
    };

    onChange = () => {
        this.props.onChange();
    };

    render() {
        const { checked, onChange, ...props } = this.props;

        return (
            <div {...props}>
                <Switch
                    onClick={this.onChange}
                    checked={this.props.checked}
                    checkedChildren="Past"
                    unCheckedChildren="Future"
                    prefixCls="switch-filter"
                />
            </div>
        );
    }
}

export default SwitchFilter;
