window.addEventListener('DOMContentLoaded', () => {
    const filterBtn = document.getElementById('filterBtn');

    filterBtn.addEventListener('click', () => {
        const min = parseInt(document.getElementById('minPrice').value.replace(/\D/g,'')) || 0;
        const max = parseInt(document.getElementById('maxPrice').value.replace(/\D/g,'')) || Infinity;

        const container = document.getElementById('account-list');
        const cards = Array.from(container.querySelectorAll('.col-md-4'));

        // Lọc card theo min/max
        let filtered = cards.filter(card => {
            const priceSpan = card.querySelector('.price');
            if (!priceSpan) return false;
            const price = parseInt(priceSpan.textContent.replace(/\D/g,'')) || 0;
            return price >= min && price <= max;
        });

        // Sắp xếp giảm dần theo giá (cao → thấp)
        filtered.sort((a, b) => {
            const priceA = parseInt(a.querySelector('.price').textContent.replace(/\D/g,'')) || 0;
            const priceB = parseInt(b.querySelector('.price').textContent.replace(/\D/g,'')) || 0;
            return priceB - priceA; // Giá cao trước → thấp sau
        });


        // Clear container rồi append lại
        container.innerHTML = '';
        filtered.forEach(card => container.appendChild(card));
    });
});
