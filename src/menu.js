// dom elements
const content = document.querySelector("#content");
//might need to change to module
const loadMenu = () => {

    content.innerHTML = `
    
    <nav class="navbar">
        <h1 class="logo">The SteakHouse</h1>
        <ul>
            <li><a class="nav-home" href="#">Home</a></li>
            <li><a class="nav-menu" href="#">Menu</a></li>
            <li><a class="nav-contact" href="#">Contact</a></li>
        </ul>
    </nav>

    <h1 class="menu-title">Menu</h1>

    <div class="menu">
        <div class="appetizers">
            <h2>Appetizers & Sides</h2>
                <div class="menu-item">
                    <h5>Spicy Shrimp</h5>
                    <p>Fried shrimp with a spicy cream sauce.</p>
                    <p class="price">$12</p>
                </div>
                <div class="menu-item">
                    <h5>Crab Cakes</h5>
                    <p>Three jumbo crabcakes with lemon butter.</p>
                    <p class="price">$15</p>
                </div>
                <div class="menu-item">
                    <h5>Calamari</h5>
                    <p>Served with spicy and sweet chili sauce.</p>
                    <p class="price">$11</p>
                </div>
                <div class="menu-item">
                    <h5>Sweet Potato Cassarole</h5>
                    <p>With pecan crust</p>
                    <p class="price">$13 </p>
                </div>
        </div>
        <div class="entrees">
            <h2>Entrees</h2>
            <div class="menu-item">
                <h5>Filet Mignon 12 oz.</h5>
                <p>Served with mash potatoes</p>
                <p class="price">$42 </p>
            </div>
            <div class="menu-item">
                <h5>NY Strip 14 oz.</h5>
                <p>Prime 40 Day dry-aged</p>
                <p class="price">$54</p>
            </div>
            <div class="menu-item">
                <h5>Ribeye 18oz</h5>
                <p>Prime 40 day dry-aged</p>
                <p class="price">$65</p>
            </div>
            <div class="menu-item">
                <h5>Porterhouse 32 oz.</h5>
                <p>Prime 35 day dry-aged.</p>
                <p class="price">$105</p>
            </div>
        </div>
        <div class="dessert">
            <h2>Dessert</h2>
            <div class="menu-item">
                <h5>Chocolate & Orange Blossom Ice Cream</h5>
                <p>With passion fruit coulis and fresh mint</p>
                <p class="price">$9 </p>
            </div>
            <div class="menu-item">
                <h5>Chocolate Caramel Cake</h5>
                <p>Smoked chocolate mousse. salted caramel.</p>
                <p class="price">$12 </p>
            </div>
            <div class="menu-item">
                <h5>White chocolate & matcha cheesecake</h5>
                <p>With vanilla ice cream. chocolate sauce.</p>
                <p class="price">$11</p>
            </div>
            <div class="menu-item">
                <h5>Tiramisu Cake</h5>
                <p>Beautiful cocoa powder and whipped cream.</p>
                <p class="price">$11</p>
        </div>
        </div>
    </div>

    <footer>
        <div class="address">
            <ul class="address-list">
                <li>123 Random Street</li>
                <li>New York City</li>
                <li>New York</li>
                <li>111-111-1111</li>
                <li><a href="#">Reserve a table</a></li>
            </ul>
        </div>
        <div class="other-facts">  
            <ul class="fact-list">
                <li>Nutrition Facts</li>
                <li>Our Ingredients</li>
                <li>How It's Made</li>
            </ul>

        </div>
        <div class="social-media">
            <ul class="social-media-buttons">
                <li><i class="fab fa-facebook"></i></li>
                <li><i class="fab fa-twitter"></i></li>
                <li><i class="fab fa-instagram"></i></li>
                <li><i class="fab fa-google"></i></li>
            </ul>
        </div>
    </footer>    
    
    `
};

export {loadMenu};