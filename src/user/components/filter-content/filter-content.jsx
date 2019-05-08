import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classNames';

import DropDown from '../dropdown/dropdown';
import Button from '../../../shared/components/button/button';

import './filter-content.scss';

class FilterContent extends PureComponent {
    static defaultProps = {
        value: '',
        className: '',
    };

    static propTypes = {
        children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
        onClearClick: PropTypes.func.isRequired,
        onApplyClick: PropTypes.func.isRequired,
        className: PropTypes.string,
        value: PropTypes.string,
    };

    render() {
        const {
            children, className, onApplyClick, onClearClick, ...props
        } = this.props;

        const filterContentClasses = classNames('filter-content', className);

        return (
            <DropDown className={filterContentClasses} onClickOutside={onClearClick} {...props}>
                <div className="filter-content__container">
                    <div className="filter-content__container-filter-wrapper">{children}</div>
                    {!!props.value && (
                        <div className="filter-content__container-buttons">
                            <Button
                                className="filter-content__container-buttons-item"
                                color="back"
                                handleClick={onClearClick}
                            >
                                Clear
                            </Button>
                            <Button
                                className="filter-content__container-buttons-item"
                                color="back"
                                handleClick={onApplyClick}
                            >
                                Apply
                            </Button>
                        </div>
                    )}
                </div>
            </DropDown>
        );
    }
}

export default FilterContent;
