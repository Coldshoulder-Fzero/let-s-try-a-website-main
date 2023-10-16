function includeNavbar() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('nav-placeholder').innerHTML = data;
        });
}

// Call the function to include the navbar on page load
includeNavbar();
