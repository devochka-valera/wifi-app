import React from 'react';
import {List, ListItem} from 'material-ui/List';
import ActionInfo from 'material-ui/svg-icons/action/info';
import Subheader from 'material-ui/Subheader';
import Avatar from 'material-ui/Avatar';
import Wifi from 'material-ui/svg-icons/Notification/wifi';
import {blue500, yellow600, blue800} from 'material-ui/styles/colors';
import {connect} from "react-redux";
import {browserHistory} from 'react-router'
import {makeWifiSelection} from "../actions/actions";

const District = (props) => (
    <div>
        <List>
            <Subheader inset={true}> <h3>{props.address}</h3></Subheader>
            {props.wifiForSelected.map((item, index) => {
                return <ListItem
                    onClick={(e) => {
                        e.preventDefault();
                        props.dispatch(makeWifiSelection(item));
                        browserHistory.push(`/districts/${props.address}/${item.num_id}`)
                    }}
                    key={index}
                    leftAvatar={<Avatar backgroundColor={blue800} icon={<Wifi />}/>}
                    rightIcon={<ActionInfo color={blue500}/>}
                    primaryText={item.row.name_object}
                    secondaryText={item.row.name_wifi}
                />
            })}
        </List>
    </div>
);

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(District)