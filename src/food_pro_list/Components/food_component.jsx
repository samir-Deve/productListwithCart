import React, { Component } from 'react';
import "../Style/food_component.css";
import DataContext from './contextAPI';

class FoodList extends Component {
	state = {
		countVolumeOn: false,
		isAddedToCart: false
	} 
	HandleCountVolume = () => {
		this.setState(prev => ({...prev, countVolumeOn: true, isAddedToCart: true}))
	}
	render() { 
		const {food_pic, category, name, price, productCount, onDelete, onIncrease, onDecrease} = this.props;
		const obj = {category, name, price, productCount}

		return (
						<div className="food_list_card">
							<div className="pic_both_btns">
								<img src={food_pic} alt="" className="food_pic" />
								<div>
									{
										!this.state.isAddedToCart && (
											<button onClick={() => {
												onDelete(obj)
												this.HandleCountVolume()
											}} className="add_to_cart_btn">
												<svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clipPath="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
												<span>Add to cart</span>
											</button>
										)
									}
								</div>
								{
									this.state.countVolumeOn && (
										<div className="increment_or_decrement_btns">
											<button className="decrement_btn" onClick={onDecrease}>
													<svg xmlns="http://www.w3.org/2000/svg" width="10" height="5" fill='none' viewBox="0 0 10 2">
														<path fill="#fff" d="M0 .375h10v1.25H0V.375Z"/>
													</svg>
											</button>
											<span className='Quantity'>{productCount}</span>
											<button className="increment_btn" onClick={onIncrease}>
												<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10">
													<path fill="#fff" d="M10 4.375H5.625V0h-1.25v4.375H0v1.25h4.375V10h1.25V5.625H10v-1.25Z"/>
												</svg>
											</button>
									</div>
									)
								}
							</div>
							<div className="cata_name_price">
								<span className="catagory">{category}</span>
								<span className="name">{name}</span>
								<span className="price">${price}</span>
							</div>
						</div>
		);
	}
}
 
export default FoodList;