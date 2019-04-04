import React, { PureComponent } from 'React';

import Button from '../../../shared/components/button/button';

import './payload-tab.scss';

class PayloadTab extends PureComponent {
    static propTypes = {};

    handleSubmit = () => {};

    render() {
        return (
            <div className="payload-tab">
                <div>Who’s payloading?</div>

                <div className="photo-form__buttons-container">
                    <Button className="photo-form__buttons-container-item" color="secondary">
                        Book
                    </Button>
                </div>
            </div>
        );
    }
}

export default PayloadTab;
