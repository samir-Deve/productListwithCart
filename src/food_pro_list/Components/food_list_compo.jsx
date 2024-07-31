import React, { Component } from 'react';
import data from "../data.json";
import FoodList from './food_component';
import Cart from './food_list_cart';
import DataContext from './contextAPI';

class  FoodListCompo extends Component {
	state = {
		data: data,
		cartData: [],
		productCount: 1
	} 
		AddToCart = (ev) => {
			const CartCategory = ev.category;
			const CartName = ev.name;
			const CartPrice = ev.price;
			const productCount = ev.productCount
			const CartProduct = {
				kind: CartCategory, name: CartName, price: CartPrice, productCount: productCount}
			this.setState(prev => ({
				cartData: [...prev.cartData, CartProduct]
			}), () => console.log(this.state))
		}
		HandleIncrease = () => {
			this.setState(prev => ({
				...prev,
				productCount: prev.productCount += 1
			}))
		}

		HandleDecrease = () => {
			this.setState(prev => ({
				...prev,
				productCount: prev.productCount -= 1
			}))
		}
	render() { 
		return (
			<DataContext.Provider value={
				{
					data: this.state.data,
					cartData: this.state.cartData
				}
				}>
							<div className='Main_cont'>
				<div className="food_lists_cards">
					{
						this.state.data.map(each => (
							<FoodList 
								key={each.name}
								food_pic={each.image.desktop}
								category={each.category}
								name={each.name}
								price={each.price}
								productCount={this.state.productCount}
								onIncrease={this.HandleIncrease}
								onDecrease={this.HandleDecrease}
								onDelete={this.AddToCart}
							/>
						))
					}
				</div>
				<Cart />
			</div>
			</DataContext.Provider>
		);
	}
}
 
export default  FoodListCompo;