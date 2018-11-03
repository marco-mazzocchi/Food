import React, { Component } from 'react';
import './App.css';
import FoodSwiper from '../../components/FoodSwiper/FoodSwiper';
import SwiperButtons from '../../components/SwiperButtons/SwiperButtons';

class App extends Component {

    constructor(props) {
        super(props);

        this.apiUrl = '/api';

        this.state = {
            dishes: [],
            index: 0,
            model: {}
        }

        this.saveAsWater = this.saveAsWater.bind(this);
        this.saveAsFire = this.saveAsFire.bind(this);

    }

    componentWillMount() {

        this._asyncRequest = this.getFoodList().then(
            (res) => {
                const dishes = res.data;
                this._asyncRequest = null;
                this.setState({
                    dishes: dishes
                });
                this.shuffleDishes();
            }
        ).catch(
            (error) => {
                throw new Error(error);
            }
        );

    }

    componentWillUnmount() {
        if (this._asyncRequest) {
            this._asyncRequest.cancel();
        }
    }

    async getFoodList() {
        const list = await fetch(
            `${this.apiUrl}/dishes`
        ).then((resp) => resp.json());
        return list;
    }

    removeDish(dishIndex) {
        let dishes = this.state.dishes;

        delete dishes[dishIndex];

        this.setState({
            dishes
        });
    }

    currentFood() {
        return this.state.dishes[0];
    }

    saveAsWater() {
        this.updateModel(-1);
        // remove current dish
        this.removeDish(0);
        this.sortDishes();
    }

    saveAsFire() {
        this.updateModel(1);
        // remove current dish
        this.removeDish(0);
        this.sortDishes();
    }

    shuffleDishes() {
        let dishes = this.state.dishes;

        for (let i = dishes.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [dishes[i], dishes[j]] = [dishes[j], dishes[i]];
        }

        this.setState({
            dishes
        });

    }

    // Sort dishes according to current model
    sortDishes() {
        let dishes = this.state.dishes;
        const model = this.state.model;

        dishes = dishes.sort((a, b) => {

            let aTotal = 0;
            let bTotal = 0;

            for(const modelTag in model) {
                const modelTagValue = model[modelTag];
                if(a.tags.includes(modelTag))
                    aTotal += modelTagValue;
                if(b.tags.includes(modelTag))
                    bTotal += modelTagValue;
            }

            // ritorna > 0 se vince (viene prima) b
            // ritorna < 0 se vince (viene prima) a
            // ritorna 0 se sono pari (resta invariato)
            return bTotal - aTotal;
        });

        this.setState({
            dishes: dishes
        });
    }

    updateModel(modifier) {
        const currentFood = this.currentFood();
        let newModel = Object.assign({}, this.state.model);

        newModel = currentFood.tags.reduce((newModel, tag) => {
            if(!newModel.hasOwnProperty(tag)) newModel[tag] = 0;
            newModel[tag] = newModel[tag] + modifier;
            return newModel;
        }, newModel);

        this.setState({
            model: newModel
        });
    }

    render() {
        if(this.state.dishes.length === 0) {
            return 'no data';
        }

        const currentFood = this.currentFood();

        return (
            <div className="App">
                <FoodSwiper currentFood={currentFood} />
                <SwiperButtons
                    onWaterClick={ this.saveAsWater }
                    onFireClick={ this.saveAsFire }
                />
            </div>
        );
    }
}

export default App;
