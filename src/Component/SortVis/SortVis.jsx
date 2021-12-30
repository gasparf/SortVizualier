import React from "react";

export default class SortVis extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            array = [], //init array for blocks to be displayed, essentially this represents numbers
        };
    }

    resetArray(x) {
        const array = []
        // var x; this variable is to change the amount of blocks, will add in later
        for (let i = 0; i < 100; i++) {
            array.push(randomIntFromInterval(5, 1000)); //add varaibles after
        }

    }
}