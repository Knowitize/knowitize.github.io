<script>
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            // 1. Remove 'active' class from all links
            navLinks.forEach(nav => nav.classList.remove('active'));
            
            // 2. Add 'active' class to the clicked link
            this.classList.add('active');
        });
    });

</script>