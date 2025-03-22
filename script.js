 /* Add this JavaScript for mobile menu toggle */
document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
    document.querySelector('.nav-menu').classList.toggle('active');
    this.classList.toggle('active');
});
