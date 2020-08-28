// dom elements
const content = document.querySelector("#content");
const loadHome = () => {

    content.innerHTML = `
    
    <nav class="navbar">
        <h1 class="logo">The SteakHouse</h1>
        <ul>
            <li><a class="nav-home" href="#">Home</a></li>
            <li><a class="nav-menu" href="#">Menu</a></li>
            <li><a class="nav-contact" href="#">Contact</a></li>
        </ul>
    </nav>

    <div class="headline-container">
        <div class="restaurant-name">
            <h1>
                The Steakhouse <i class="fas fa-drumstick-bite"></i>
            </h1>
        </div>


    </div>
    <div class="description-container">
       
        <div class="description">
            <p>Sun-Thurs: 12pm-9pm</p>
            <p>Fri-Sat: 12pm-9pm</p>
            <button type="button">BOOK A TABLE</button>
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
            <h2>Connect With Us:</h2>
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

export{loadHome};