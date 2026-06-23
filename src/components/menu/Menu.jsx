import React, { useState, useEffect } from "react";
import './Menu.css'

const Menu = () => {
  const [activeTab, setActiveTab] = useState('pizzas');


  useEffect(() => {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          const span = entry.target.querySelector('.menu-badge')
          const h1 = entry.target.querySelector('.menu-title')
          const p = entry.target.querySelector('.menu-subtitle')
          const ul = entry.target.querySelector('.menu-categories ul')
          
          if (entry.isIntersecting) {
            span.classList.add('animate-in');
            h1.classList.add('animate-in');
            p.classList.add('animate-in');
            ul.classList.add('animate-in');
          } else {
            span.classList.remove('animate-in');
            h1.classList.remove('animate-in');
            p.classList.remove('animate-in');
            ul.classList.remove('animate-in');
          }
        });
      }, { threshold: 0.1 });
    
      const MenuContent = document.querySelector('.menu-content');
      if (MenuContent) {
        observer.observe(MenuContent);
      }
    
      return () => observer.disconnect();
    }, []);

  return (
    <div className='Menu'>
      
      <div className="menu-content">
        <span className="menu-badge">our menu</span>

        <h1 className="menu-title">Crafted with <span>Intention</span></h1>

        <p className="menu-subtitle">Seasonal ingredients, old-world technique, and a kitchen that has
            nothing to prove.
        </p>

        <div className="menu-categories">
          <ul>
            <li className={activeTab === 'pizzas' ? 'active' : ''} onClick={() => setActiveTab('pizzas')}>Pizzas</li>
            <li className={activeTab === 'burgers' ? 'active' : ''} onClick={() => setActiveTab('burgers')}>Burgers</li>
            <li className={activeTab === 'pies' ? 'active' : ''} onClick={() => setActiveTab('pies')}>Pies</li>
            <li className={activeTab === 'desserts' ? 'active' : ''} onClick={() => setActiveTab('desserts')}>Desserts</li>
            <li className={activeTab === 'drinks' ? 'active' : ''} onClick={() => setActiveTab('drinks')}>Drinks</li>
            <li className={activeTab === 'specials' ? 'active' : ''} onClick={() => setActiveTab('specials')}>Specials</li>
          </ul>
        </div>

        <div className="menu-categories-content">

          {/*Pizzas*/}
          {activeTab === 'pizzas' &&(
          <div className="pizza-content">
            <div className="chalk-board">
              <span>Meat</span>
              <ul>
                <li><span>Meat Feast</span><span>R180.00</span></li>
                <li><span>Pepperoni</span><span>R145.00</span></li>
                <li><span>Biltong</span><span>R145.00</span></li>
                <li><span>Sweet Chicken</span><span>R145.00</span></li>
              </ul>
            </div>

            <div className="chalk-board">
              <span>Vegetables</span>
              <ul>
                <li><span>Mushroom</span><span>R145.00</span></li>
                <li><span>Sweet Veggie</span><span>R145.00</span></li>
                <li><span>Sweet Chilli</span><span>R145.00</span></li>
                <li><span>Green & Spicy Veggie</span><span>R125.00</span></li>
              </ul>
            </div>
          </div>
          )}

          {/*Burgers*/}
          {activeTab === 'burgers' &&(
          <div className="burger-content">
            <div className="chalk-board">
              <span>Beef</span>
              <ul>
                <li><span>Beef Burger</span><span>R80.00</span></li>
                <li><span>Cheese Burger</span><span>R80.00</span></li>
                <li><span>Bacon & Cheese</span><span>R80.00</span></li>
                <li><span>Veggie Burger</span><span>R80.00</span></li>
              </ul>
            </div>

            <div className="chalk-board">
              <span>Whoppers</span>
              <ul>
                <li><span>Double Beef Burger</span><span>R120.00</span></li>
                <li><span>Double Cheese Burger</span><span>R120.00</span></li>
                <li><span>Sweet Chilli Burger</span><span>R120.00</span></li>
                <li><span>Green & Spicy Veggie Burger</span><span>R120.00</span></li>
              </ul>
            </div>
          </div>
          )}

          {/*Pies*/}
          {activeTab === 'pies' &&(
          <div className="pie-content">
            <div className="chalk-board">
              <span>Sweet</span>
              <ul>
                <li><span>Blue Berry Pie</span><span>R45.00</span></li>
                <li><span>Rasberyy Pie</span><span>R45.00</span></li>
                <li><span>Fruit Pie</span><span>R45.00</span></li>
                <li><span>Nut Pie</span><span>R45.00</span></li>
              </ul>
            </div>

            <div className="chalk-board">
              <span>Meat</span>
              <ul>
                <li><span>Steak & Kidney Pie</span><span>R35.00</span></li>
                <li><span>Pepper Steak Pie</span><span>R35.00</span></li>
                <li><span>Sweet Pepper Pie</span><span>R35.00</span></li>
                <li><span>Chicken Pie</span><span>R120.00</span></li>
              </ul>
            </div>
          </div>
          )}

          {/*Dessert*/}
          {activeTab === 'desserts' &&(
          <div className="dessert-content">
            <div className="chalk-board">
              <span>Baked & Pastry</span>
              <ul>
                <li><span>Melktert</span><span>R65.00</span></li>
                <li><span>Chocolate Cake</span><span>R65.00</span></li>
                <li><span>Brownies</span><span>R65.00</span></li>
                <li><span>Carrot Cake</span><span>R65.00</span></li>
              </ul>
            </div>

            <div className="chalk-board">
              <span>Chilled & No-Baked</span>
              <ul>
                <li><span>Malva Pudding</span><span>R70.00</span></li>
                <li><span>Ice Cream</span><span>R70.00</span></li>
                <li><span>Ice Cream & Gelatto</span><span>R70.00</span></li>
                <li><span>Doughnuts</span><span>R70.00</span></li>
              </ul>
            </div>
          </div>
          )}

          {/*Drinks*/}
          {activeTab === 'drinks' &&(
          <div className="drinks-content">
            <div className="chalk-board">
              <span>Hot</span>
              <ul>
                <li><span>Black Coffee</span><span>R25.00</span></li>
                <li><span>Coffee + Milk</span><span>R25.00</span></li>
                <li><span>Cappuccino</span><span>R25.00</span></li>
                <li><span>Tea</span><span>R25.00</span></li>
              </ul>
            </div>

            <div className="chalk-board">
              <span>Cold</span>
              <ul>
                <li><span>Iced Tea</span><span>R30.00</span></li>
                <li><span>Coca Cola</span><span>R30.00</span></li>
                <li><span>Sprite</span><span>R30.00</span></li>
                <li><span>Chocolate Milkshake</span><span>R30.00</span></li>
              </ul>
            </div>
          </div>
          )}

          {/*Specials*/}
          {activeTab === 'specials' &&(
          <div className="specials-content">
            <div className="chalk-board-specials">
              <span>This week</span>
              <ul>
                <li><span>Munch Box</span><span>R80.00</span></li>
                <li><span>Malva Pudding</span><span>R25.00</span></li>
                <li><span>Cappuccino</span><span>R25.00</span></li>
                <li><span>Tea</span><span>R25.00</span></li>
              </ul>
            </div>
          </div>
          )}

        </div>

      </div>
    </div>
  )
}

export default Menu
