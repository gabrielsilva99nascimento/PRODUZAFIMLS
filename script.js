// Dados dinâmicos
const servicesData = [
    {
        icon: 'film',
        title: 'Filmagem Profissional',
        description: 'Equipamentos de última geração e equipe técnica especializada para captar a melhor imagem.'
    },
    {
        icon: 'video',
        title: 'Edição de Vídeo',
        description: 'Pós-produção criativa que transforma suas filmagens em conteúdo impactante.'
    },
    {
        icon: 'ad',
        title: 'Comerciais & Publicidade',
        description: 'Criação de campanhas publicitárias que engajam e convertem seu público.'
    },
    {
        icon: 'music',
        title: 'Produção Musical',
        description: 'Trilhas sonoras originais e mixagem profissional para seus projetos.'
    },
    {
        icon: 'drone-alt',
        title: 'Filmagem Aérea',
        description: 'Imagens espetaculares com drones profissionais e pilotos certificados.'
    },
    {
        icon: 'lightbulb',
        title: 'Conteúdo Criativo',
        description: 'Desenvolvimento de roteiros e conceitos para suas produções audiovisuais.'
    }
];

const portfolioData = [
    {
        img: 'https://images.unsplash.com/photo-1551029506-0807df4e2031?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Comercial de Moda',
        category: 'comercial',
        desc: 'Campanha publicitária para marca de roupas'
    },
    {
        img: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Documentário Ambiental',
        category: 'documentario',
        desc: 'Série documental sobre preservação ambiental'
    },
    {
        img: 'https://images.unsplash.com/photo-1511578314322-379afb476865?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Evento Corporativo',
        category: 'evento',
        desc: 'Cobertura completa de evento empresarial'
    },
    {
        img: 'https://images.unsplash.com/photo-1486693128850-a77436e7ba3c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Comercial de Tecnologia',
        category: 'comercial',
        desc: 'Lançamento de novo produto tecnológico'
    },
    {
        img: 'https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Documentário Cultural',
        category: 'documentario',
        desc: 'Série sobre diversidade cultural brasileira'
    },
    {
        img: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
        title: 'Festival de Música',
        category: 'evento',
        desc: 'Cobertura completa de festival musical'
    }
];

const testimonialsData = [
    {
        text: "A Produza Films superou todas as nossas expectativas. O nível de profissionalismo e a qualidade do material entregue foram excepcionais.",
        name: "Ana Carolina Silva",
        role: "Marketing Manager - Empresa X",
        img: "https://randomuser.me/api/portraits/women/45.jpg"
    },
    {
        text: "Trabalhar com a Produza Films foi uma experiência incrível. Eles entenderam perfeitamente nossa visão e transformaram em um vídeo impressionante.",
        name: "Ricardo Almeida",
        role: "Diretor Criativo - Agência Y",
        img: "https://randomuser.me/api/portraits/men/32.jpg"
    },
    {
        text: "O atendimento personalizado e a atenção aos detalhes fazem da Produza Films nossa produtora preferida para todos os projetos audiovisuais.",
        name: "Juliana Santos",
        role: "CEO - Startup Z",
        img: "https://randomuser.me/api/portraits/women/68.jpg"
    }
];

// Inicialização quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', function() {
    // Menu Mobile
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
        menuToggle.querySelector('i').classList.toggle('fa-times');
    });
    
    // Fechar menu ao clicar em um link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            menuToggle.querySelector('i').classList.remove('fa-times');
        });
    });
    
    // Navbar scroll effect
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });
    
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Carregar serviços
    const servicesGrid = document.querySelector('.services-grid');
    servicesData.forEach(service => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card';
        serviceCard.innerHTML = `
            <div class="service-icon">
                <i class="fas fa-${service.icon}"></i>
            </div>
            <h3>${service.title}</h3>
            <p>${service.description}</p>
        `;
        servicesGrid.appendChild(serviceCard);
    });
    
    // Carregar portfólio
    const portfolioGrid = document.querySelector('.portfolio-grid');
    portfolioData.forEach(item => {
        const portfolioItem = document.createElement('div');
        portfolioItem.className = `portfolio-item ${item.category}`;
        portfolioItem.innerHTML = `
            <img src="${item.img}" alt="${item.title}">
            <div class="portfolio-overlay">
                <h3>${item.title}</h3>
                <p>${item.desc}</p>
                <a href="#" class="btn-primary">Ver Projeto</a>
            </div>
        `;
        portfolioGrid.appendChild(portfolioItem);
    });
    
    // Filtro do portfólio
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            const filter = this.getAttribute('data-filter');
            
            const portfolioItems = document.querySelectorAll('.portfolio-item');
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.classList.contains(filter)) {
                    item.style.display = 'block';
                } else {
                    item.style.display = 'none';
                }
            });
        });
    });
    
    // Carregar depoimentos
    const testimonialSlider = document.querySelector('.testimonial-slider');
    testimonialsData.forEach((testimonial, index) => {
        const testimonialSlide = document.createElement('div');
        testimonialSlide.className = 'testimonial-slide';
        if (index === 0) testimonialSlide.classList.add('active');
        testimonialSlide.innerHTML = `
            <div class="testimonial-content">
                <p>"${testimonial.text}"</p>
                <div class="client-info">
                    <img src="${testimonial.img}" alt="${testimonial.name}">
                    <div>
                        <h4>${testimonial.name}</h4>
                        <span>${testimonial.role}</span>
                    </div>
                </div>
            </div>
        `;
        testimonialSlider.appendChild(testimonialSlide);
    });
    
    // Controles do slider de depoimentos
    const prevButton = document.querySelector('.slider-prev');
    const nextButton = document.querySelector('.slider-next');
    let currentSlide = 0;
    const slides = document.querySelectorAll('.testimonial-slide');
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        slides[index].classList.add('active');
    }
    
    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }
    
    function prevSlide() {
        currentSlide = (currentSlide - 1 + slides.length) % slides.length;
        showSlide(currentSlide);
    }
    
    nextButton.addEventListener('click', nextSlide);
    prevButton.addEventListener('click', prevSlide);
    
    // Auto slide change every 5 seconds
    setInterval(nextSlide, 5000);
    
    // Form submission
    const contactForm = document.getElementById('form-contato');
    const newsletterForm = document.getElementById('newsletter-form');
    
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simulate form submission
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.textContent = 'Enviando...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.textContent = 'Mensagem Enviada!';
            this.reset();
            
            setTimeout(() => {
                submitBtn.textContent = 'ENVIAR MENSAGEM';
                submitBtn.disabled = false;
            }, 2000);
        }, 1500);
    });
    
    newsletterForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const submitBtn = this.querySelector('button[type="submit"]');
        submitBtn.innerHTML = '<i class="fas fa-check"></i>';
        
        setTimeout(() => {
            this.reset();
            submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i>';
        }, 2000);
    });
    
    // Animação ao scroll
    function animateOnScroll() {
        const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-slide, .contact-form');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animated elements
    document.querySelectorAll('.service-card, .portfolio-item, .testimonial-slide, .contact-form').forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    });
    
    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);
});