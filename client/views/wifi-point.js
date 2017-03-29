import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import {connect} from "react-redux";
import GoogleMapReact from 'google-map-react';
import styles from './global.css';

// const mapDotStyles = {
//     borderRadius: '50%',
//     background: "red",
//     height: 15,
//     width: 15
// }

const MapDot = ({text}) =>
    <div className={styles.holder}>{text}
        <div className={styles.dot}></div>
        <div className={styles.pulse}></div>
    </div>;

const WifiPoint = (props) => {
    return (
        <Card>
            <CardMedia
                overlay={<CardTitle title={props.selectedWifi.row.district}
                                    subtitle={props.selectedWifi.row.address}/>}>
                <GoogleMapReact
                    style={{
                        height: 400
                    }}
                    bootstrapURLKeys={{
                        key: 'AIzaSyCJCDDX1ZPHrnZ5hIGJs-dwN9Jl6Y7XG9s',
                        language: 'ru',
                    }}
                    defaultCenter={{lat: +props.selectedWifi.row.latitude, lng: +props.selectedWifi.row.longitude}}
                    defaultZoom={16}
                >
                    <MapDot
                        lat={+props.selectedWifi.row.latitude}
                        lng={+props.selectedWifi.row.longitude}
                    />
                </GoogleMapReact>
            </CardMedia>
            <CardTitle title={props.selectedWifi.row.name_object} subtitle={props.selectedWifi.row.status}/>
        </Card>
    );
};

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(WifiPoint)


