import React from 'react';
import { View, Text } from 'react-native';
import { HomeTileStyles } from './HomeTileStyles';

function HomeTiles() {
    return (
        <View style={{ flex: 1, flexDirection: 'column' }}>
            <View style={HomeTileStyles.tilesRow}>
                <View style={{ ...HomeTileStyles.tile, flex: 1 }}><Text style={HomeTileStyles.tileText}>Tile 1</Text></View>
                <View style={{ ...HomeTileStyles.tile, flex: 1 }}><Text style={HomeTileStyles.tileText}>Tile 2</Text></View>
            </View>
            <View style={HomeTileStyles.tilesRow}>
                <View style={{ ...HomeTileStyles.tile, flex: 1 }}><Text style={HomeTileStyles.tileText}>Tile 3</Text></View>
                <View style={{ ...HomeTileStyles.tile, flex: 1 }}><Text style={HomeTileStyles.tileText}>Tile 4</Text></View>
            </View>


        </View>
    )
};


export default HomeTiles;