import React from 'react';
import {connect} from 'react-redux'
import {GridList, GridTile} from 'material-ui/GridList';
import CircularProgress from 'material-ui/CircularProgress';
import {makeAddressSelection} from "../actions/actions";
import {browserHistory} from 'react-router'


const styles = {
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
    },
    gridList: {
        width: '100%',
        height: 'auto',
        overflowY: 'auto',
    },
};

const tilesData = [];
for (let imageIndex = 1; imageIndex < 48; imageIndex++) {
    let image = require(`../assets/${imageIndex}.jpg`);
    tilesData.push(image);
}

const Disticts = (props) => {
    if (props.isLoading) {
        return <div>
            <CircularProgress size={80} thickness={5}/>
        </div>
    }

    return <div style={styles.root}>
        <GridList cols={4} style={styles.gridList}>
            {props.addresses.map((tile, index) => (
                <GridTile onClick={(e) => {
                    e.preventDefault();
                    browserHistory.push(`/districts/${tile}`);
                    props.dispatch(makeAddressSelection(tile));
                }} key={index} title={tile}>
                    <img src={tilesData[index]}/>
                </GridTile>
            ))}
        </GridList>
    </div>
};

function mapStateToProps(state) {
    return state
}

export default connect(mapStateToProps)(Disticts)


