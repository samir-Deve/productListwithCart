import React from 'react'
import ReactDOM from 'react-dom/client'
import FoodList from './food_pro_list/Components/food_component.jsx'
import Cart from './food_pro_list/Components/food_list_cart.jsx'
import FoodListCompo from './food_pro_list/Components/food_list_compo.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FoodListCompo />
  </React.StrictMode>,
)
