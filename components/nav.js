class CustomNav extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <nav class="bg-white/90 backdrop-blur sticky top-0 z-50 border-b border-gray-200">
            <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
                <a href="/" class="flex items-center space-x-3 text-black">
                    <img src="mowerbros logo.png" alt="Mower Bros Logo" class="h-16 w-16 rounded-full object-cover">
                    <span class="font-bold text-3xl">Mower Bros</span>
                </a>

                <div class="hidden md:flex items-center space-x-6">
                    <a href="#services" class="hover:text-secondary">Services</a>
                    <a href="#pricing" class="hover:text-secondary">Pricing</a>
                    <a href="#contact" class="hover:text-secondary">Contact</a>
                    <a href="#contact" class="bg-secondary text-white px-4 py-2 rounded-md hover:bg-green-600">Get a Quote</a>
                </div>

                <button class="md:hidden menu-btn flex items-center" aria-label="Toggle menu">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
                </button>
            </div>

            <div class="mobile-menu md:hidden px-4 pb-4 hidden">
                <a href="#services" class="block py-2">Services</a>
                <a href="#pricing" class="block py-2">Pricing</a>
                <a href="#contact" class="block py-2">Contact</a>
                <a href="#contact" class="block py-2 bg-secondary text-white px-4 py-2 rounded-md inline-block">Get a Quote</a>
            </div>
        </nav>
        `;

        const btn = this.querySelector('.menu-btn');
        if (btn) {
            btn.addEventListener('click', () => {
                const menu = this.querySelector('.mobile-menu');
                if (!menu) return;
                if (menu.classList.contains('hidden')) {
                    menu.classList.remove('hidden');
                } else {
                    menu.classList.add('hidden');
                }
            });
        }
    }
}

customElements.define('custom-nav', CustomNav);

