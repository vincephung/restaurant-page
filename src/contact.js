// dom elements
const content = document.querySelector("#content");

const loadContact = () => {

    content.innerHTML = `
    
    <nav class="navbar">
        <h1 class="logo">The SteakHouse</h1>
        <ul>
            <li><a class="nav-home" href="#">Home</a></li>
            <li><a class="nav-menu" href="#">Menu</a></li>
            <li><a class="nav-contact" href="#">Contact</a></li>
        </ul>
    </nav>

    <h1 class="contact-title">Find Us</h1>
    <div class="contact-container">
        <div class="contact-address">
            <ul class="address-list">
                <li>123 Random Street</li>
                <li>New York City</li>
                <li>New York</li>
                <li>111-111-1111</li>
                <li><a href="#">Reserve a table</a></li>
            </ul>
        </div>
        <div class="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.536888160307!2d-0.12998484850110326!3d51.503365479534544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487604c5417786eb%3A0xad7bf42ed9c1f5bb!2s11%20Downing%20St%2C%20Westminster%2C%20London%20SW1A%202AB!5e0!3m2!1sen!2suk!4v1596874759693!5m2!1sen!2suk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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

export {loadContact};