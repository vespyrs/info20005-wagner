document.write('<nav>\
<div class="navbar-top">\
    <div class="identity-wrap">\
    <button class="menu-icon" onclick="toggleNav()"><i class="material-icons">menu</i></button>\
    <h4 class="site-identity"><a id="identity" href="../index.html">Wagner</a></h4>\
    </div>\
    <div class="navbar-icons">\
        <button class="nav-icon"><i class="material-icons">search</i></button>\
        <button class="nav-icon"><i class="material-icons">account_circle</i></button>\
        <button class="nav-icon"><i class="material-icons"><a href="html/cart.html">shopping_cart</a></i></button>\
    </div>\
</div>\
<div class="navbar-bottom">\
    <div class="navbar-link-wrapper">\
        <div class="nav-dropdown">\
            <button class="navbar-link"><a class="nav-link-txt">Products</a></button>\
            <div class="nav-dropdown-content">\
                <a>AV Installation</a>\
                <a>Cables & Connectors</a>\
                <div class="nav-sub-dropdown">\
                    <a href="html/category.html">Audio & Pro Sound</a>\
                    <div class="nav-sub-drop-content">\
                        <a>Australian Monitor</a>\
                        <a>Headphones</a>\
                        <a>Hi-Fi Equipment</a>\
                        <a>Loudspeakers</a>\
                        <a>Microphones</a>\
                        <a>PA & Multi-Zone</a>\
                        <a>Speaker Automotive</a>\
                        <a>Speaker Components</a>\
                        <a>Speaker Drivers</a>\
                        <a>Speaker Kits</a>\
                    </div>\
                </div>\
                <a>Data & Computer</a>\
                <a>Security & Surveillance</a>\
                <a>Phone Accessories</a>\
                <a>Comms. Accessories</a>\
                <a>Tools & Test Equipment</a>\
                <a>Power & Lighting</a>\
                <a>Automotive Accessories</a>\
                <a>Electronic Components</a>\
                <a>Service & Repair Parts</a>\
            </div>\
        </div>\
        <span class="navbar-link"><a class="nav-link-txt">Brands</a></span>\
        <span class="navbar-link"><a class="nav-link-txt">Sale</a></span>\
        <span class="navbar-link"><a class="nav-link-txt">Catalogue</a></span>\
        <span class="navbar-link"><a class="nav-link-txt">Contact Us</a></span>\
    </div>\
</div>\
</nav>\
<div id="nav-mobile-menu">\
<div class="navbar-link-wrapper">\
    <a href="javascript:void(0)" class="close-navbar" onclick="closeNav()">&times;</a>\
    <span class="navbar-link" onclick="openInnerNav()"><a class="nav-link-txt">Products</a></span>\
    <span class="navbar-link"><a class="nav-link-txt">Brands</a></span>\
    <span class="navbar-link"><a class="nav-link-txt">Sale</a></span>\
    <span class="navbar-link"><a class="nav-link-txt">Catalogue</a></span>\
    <span class="navbar-link"><a class="nav-link-txt">Contact Us</a></span>\
    </div>\
</div>\
<div id="mobile-nav-products">\
<div class="navbar-link-wrapper">\
    <div class="mobile-sub-nav-wrap">\
        <a href="javascript:void(0)" class="return-sub" onclick="closeInnerNav()"><</a>\
        <a href="javascript:void(0)" class="close-navbar" onclick="closeNav()">&times;</a>\
    </div>\
    <a class="navbar-link">AV Installation</a>\
    <a class="navbar-link">Cables & Connectors</a>\
    <a class="navbar-link" href="html/category.html">Audio & Pro Sound</a>\
    <a class="navbar-link">Data & Computer</a>\
    <a class="navbar-link">Security & Surveillance</a>\
    <a class="navbar-link">Phone Accessories</a>\
    <a class="navbar-link">Comms. Accessories</a>\
    <a class="navbar-link">Tools & Test Equipment</a>\
    <a class="navbar-link">Power & Lighting</a>\
    <a class="navbar-link">Automotive Accessories</a>\
    <a class="navbar-link">Electronic Components</a>\
    <a class="navbar-link">Service & Repair Parts</a>\
    </div>\
</div>\
');