const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('show'); // Corrected 'classlist' to 'classList'
        } else {
            entry.target.classList.remove('show'); // Corrected 'classlist' to 'classList'
        }
    });
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));
