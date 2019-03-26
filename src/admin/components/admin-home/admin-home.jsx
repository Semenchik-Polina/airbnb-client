import React, { PureComponent, Fragment } from 'react';

import { Route, Redirect } from 'react-router-dom';
import Tool from '../../../shared/components/tool/tool';
import AdminPanel from '../../containers/admin-panel-container';

import TabBar from '../../containers/tab-bar-container';

class AdminHome extends PureComponent {
    static propTypes = {
        hotels: PropTypes.arrayOf(PropTypes.shape()).isRequired,
        removeHotel: PropTypes.func.isRequired,
        fetchHotels: PropTypes.func.isRequired,
        startEditingHotel: PropTypes.func.isRequired,
        startCreatingHotel: PropTypes.func.isRequired,
    };

    componentDidMount() {
        this.props.fetchHotels();
    }

    flatImageArray = photos => ({
        photos: _.flattenDeep(photos.map(photoContainer => photoContainer.photos)),
    });

    removeHotel = hotel => () => {
        this.props.removeHotel(hotel.id);
    };

    startEditingHotel = hotel => () => {
        this.props.startEditingHotel(hotel);
    };

    startCreatingHotel = () => {
        this.props.startCreatingHotel();
    };

    renderAdminActivity = () => (
        <div className="admin-home">
            <div className="admin-home__activity">
                <div className="admin-home__activity-image" />
                <button type="button" className="admin-home__activity-link" onClick={this.startCreatingHotel}>
                    Create an awesome new hotel
                </button>
            </div>
            {this.props.hotels.length > 0 && (
                <section className="admin-home__hotels">
                    <span className="admin-home__hotels-header">Hotels</span>
                    <div className="admin-home__hotels-container">
                        {this.props.hotels.map((hotel, index) => (
                            <div key={index} className="admin-home__hotels-container-item">
                                <Tool
                                    src="/images/tools/delete.png"
                                    className="admin-home__hotels-container-item-delete"
                                    handleClick={this.removeHotel(hotel)}
                                />
                                <Tool
                                    src="/images/tools/edit.png"
                                    className="admin-home__hotels-container-item-edit"
                                    handleClick={this.startEditingHotel(hotel)}
                                />
                                <PhotoItem photoItem={this.flatImageArray(hotel.photos)} />
                                <span className="admin-home__hotels-container-item-name">
                                    {hotel.mainInfo.hotelName}
                                </span>
                            </div>
                        ))}
                    </div>
                </section>
            )}
        </div>
    );

    renderRiderect() {
        return <Redirect to="/admin-home/create-new-hotel/main-info" />;
    }

    render() {
        return (
            <Fragment>
                <Route exact path="/admin-home" component={AdminPanel} />
                <Route exact path="/admin-home/create-new-hotel" component={this.renderRiderect} />
                <Route path="/admin-home/create-new-hotel/" component={TabBar} />
            </Fragment>
        );
    }
}

export default AdminHome;
