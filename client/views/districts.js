import React from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

import {GridList, GridTile} from 'material-ui/GridList';

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

const tilesData = [
    {
        img: require('../assets/Адмиралтейский район.jpg'),
        title: 'Breakfast',
    },
    {
        img: require('../assets/astoria-hotel-143716_1920.jpg'),
        title: 'Tasty burger',
    },
    {
        img: require('../assets/st-petersburg-887049_1920.jpg'),
        title: 'Camera',
    },
    {
        img: require('../assets/st-petersburg-russia-97330_1920.jpg'),
        title: 'Morning',
    },
    {
        img: require('../assets/st-petersburg-russia-122038_1920.jpg'),
        title: 'Hats',
    },
    {
        img: require('../assets/Васильеовстровский район.jpg'),
        title: 'Honey',
    },
    {
        img: require('../assets/Выборгский район.jpg'),
        title: 'Vegetables',
    },
    {
        img: require('../assets/Калининский район.jpg'),
        title: 'Water plant',
    },
];

const GridListExampleSimple = () => (
    <div style={styles.root}>
        <GridList
            cellHeight={180}
            style={styles.gridList}
        >
            {tilesData.map((tile) => (
                <GridTile
                    key={tile.img}
                    title={tile.title}
                >
                    <img src={tile.img}/>
                </GridTile>
            ))}
        </GridList>
    </div>
);

export default GridListExampleSimple;

injectTapEventPlugin();
