class CustomFooter extends HTMLElement {
    connectedCallback() {
        const year = new Date().getFullYear();
        this.innerHTML = `
        <footer class="bg-gray-100 border-t border-gray-200 mt-12">
            <div class="max-w-6xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-6">
                <div>
                    <h4 class="font-bold mb-2">Mower Bros</h4>
                    <p class="text-sm text-gray-600">Premium lawn care services — precision mowing, treatment, and design.</p>
                </div>
                <div>
                    <h5 class="font-semibold mb-2">Contact</h5>
                    <p class="text-sm">(555) 123-4567</p>
                    <p class="text-sm">hello@mowerbros.com</p>
                </div>
                <div>
                    <h5 class="font-semibold mb-2">Follow Us</h5>
                    <div class="flex items-center space-x-3">
                        <a href="#" aria-label="Instagram" class="text-gray-600 hover:text-secondary" data-feather="instagram"></a>
                        <a href="#" aria-label="Facebook" class="text-gray-600 hover:text-secondary" data-feather="facebook"></a>
                        <a href="#" aria-label="Twitter" class="text-gray-600 hover:text-secondary" data-feather="twitter"></a>
                    </div>
                </div>
            </div>
            <div class="text-center text-sm text-gray-500 py-4">© ${year} Mower Bros. All rights reserved.</div>
        </footer>
        `;
    }
}

customElements.define('custom-footer', CustomFooter);

