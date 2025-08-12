document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });

            // Close mobile menu after clicking
            if (window.innerWidth <= 992) {
                document.querySelector('nav ul').classList.remove('active');
                document.querySelector('.hamburger i').classList.remove('fa-times');
                document.querySelector('.hamburger i').classList.add('fa-bars');
            }
        });
    });

    // Mobile Navigation Toggle
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        hamburger.querySelector('i').classList.toggle('fa-bars');
        hamburger.querySelector('i').classList.toggle('fa-times'); // Change icon
    });

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const faqItem = question.closest('.faq-item');
            faqItem.classList.toggle('active'); // Toggle active class
        });
    });

    // Testimonial Carousel
    const testimonials = [
        {
            quote: "Servis instal ulang Windows-nya cepat banget! Laptop saya jadi seperti baru lagi, semua driver terinstal dengan rapi. Sangat recommended!",
            author: "Budi Santoso",
            photo: "https://randomuser.me/api/portraits/men/32." // Ganti dengan foto asli
        },
        {
            quote: "Upgrade dari Windows 10 ke 11 mulus banget. Awalnya takut ada kendala, tapi timnya profesional dan pengerjaannya rapi. Fitur Windows 11-nya juga langsung bisa dipakai semua.",
            author: "Siti Aminah",
            photo: "https://randomuser.me/api/portraits/women/44." // Ganti dengan foto asli
        },
        {
            quote: "Laptop saya error melulu, dibawa ke sini langsung teratasi. Sekarang performanya jadi lebih baik dan stabil. Mantap!",
            author: "Andi Wijaya",
            photo: "https://randomuser.me/api/portraits/men/21." // Ganti dengan foto asli
        },
        {
            quote: "Harga yang ditawarkan sangat kompetitif dengan kualitas layanan yang prima. Timnya ramah dan responsif. Puas banget dengan hasilnya!",
            author: "Dewi Lestari",
            photo: "https://randomuser.me/api/portraits/women/68." // Ganti dengan foto asli
        }
    ];

    const testimonialCarousel = document.querySelector('.testimoni-carousel');
    const prevBtn = document.querySelector('.carousel-nav .prev-btn');
    const nextBtn = document.querySelector('.carousel-nav .next-btn');
    let currentIndex = 0;

    function renderTestimonial() {
        testimonialCarousel.innerHTML = ''; // Clear existing content
        const item = testimonials[currentIndex];
        const testimonialDiv = document.createElement('div');
        testimonialDiv.classList.add('testimoni-item');
        testimonialDiv.innerHTML = `
            <img src="${item.photo}" alt="${item.author}">
            <blockquote>"${item.quote}"</blockquote>
            <p class="author">- ${item.author}</p>
        `;
        testimonialCarousel.appendChild(testimonialDiv);
    }

    function showNextTestimonial() {
        currentIndex = (currentIndex + 1) % testimonials.length;
        renderTestimonial();
    }

    function showPrevTestimonial() {
        currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        renderTestimonial();
    }

    // Initial render
    renderTestimonial();

    nextBtn.addEventListener('click', showNextTestimonial);
    prevBtn.addEventListener('click', showPrevTestimonial);

    // Optional: Auto-slide testimonials
    // setInterval(showNextTestimonial, 7000); // Change every 7 seconds
});