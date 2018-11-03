import React, { Component } from 'react';
import Hammer from 'react-hammerjs';

import './FoodSwiper.css';

class FoodSwiper extends Component {

    constructor(props) {
        super(props);

        this.isDragging = false;
        this.lastPosX = 0;

        this.onPan = this.onPan.bind(this);
        this.onPanStart = this.onPanStart.bind(this);
        this.onPanEnd = this.onPanEnd.bind(this);

    }

    onPan(ev) {

    }

    onPanStart(e) {

    }

    onPanEnd(e) {

    }

    render() {
        const panOptions = {
            direction: 'DIRECTION_HORIZONTAL',
            threshold: 0
        };

        return (
            <div className="food-swiper">
                <Hammer onPan={this.onPan} onPanStart={this.onPanStart} onPanEnd={this.onPanEnd} options={panOptions}>
                    <div className='current-food'>
                        {
                            this.props.currentFood.name
                        }
                    </div>
                </Hammer>
            </div>
        );
    }
}

export default FoodSwiper;
