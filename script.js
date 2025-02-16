document.addEventListener('DOMContentLoaded', () => {
            const filterBtns = document.querySelectorAll('.filter-btn');
            const cards = document.querySelectorAll('.card');
            const modal = document.getElementById('previewModal');
            const modalContentPreview = modal.querySelector('.modal-preview');
            const modalTitle = document.getElementById('modalTitle');
            const modalDescription = document.getElementById('modalDescription');
            const modalCopyBtn = document.getElementById('modalCopyBtn');
            const closeModalBtn = modal.querySelector('.close-btn');
            const toggleThemeBtn = document.getElementById('toggleTheme');
            let currentModalCSS = '';
            filterBtns.forEach(btn => {
                btn.addEventListener('click', () => {
                    filterBtns.forEach(b => b.classList.remove('active'));
                    btn.classList.add('active');
                    const filter = btn.getAttribute('data-filter');
                    cards.forEach(card => {
                        card.style.display = (filter === 'all' || card.getAttribute('data-category') === filter) ? 'block' : 'none';
                    });
                });
            });
            cards.forEach(card => {
                card.addEventListener('click', e => {
                    if (e.target.classList.contains('copy-btn')) return;
                    const preview = card.querySelector('.preview').innerHTML;
                    const title = card.querySelector('.card-info h3').innerText;
                    const description = card.querySelector('.card-info p').innerText;
                    currentModalCSS = card.querySelector('.copy-btn').getAttribute('data-code');
                    modalContentPreview.innerHTML = preview;
                    modalTitle.innerText = title;
                    modalDescription.innerText = description;
                    modal.style.display = 'flex';
                });
            });
            closeModalBtn.addEventListener('click', () => {
                modal.style.display = 'none';
            });
            window.addEventListener('click', e => {
                if (e.target === modal) modal.style.display = 'none';
            });
            document.querySelectorAll('.copy-btn').forEach(btn => {
                btn.addEventListener('click', e => {
                    e.stopPropagation();
                    const cssCode = btn.getAttribute('data-code');
                    copyToClipboard(cssCode);
                });
            });
            modalCopyBtn.addEventListener('click', () => {
                copyToClipboard(currentModalCSS);
            });

            function copyToClipboard(text) {
                navigator.clipboard.writeText(text).then(() => {
                    alert('CSS code copied to clipboard!');
                }).catch(err => {
                    alert('Failed
                        to copy text: ' + err); });
                    }
                    toggleThemeBtn.addEventListener('click', () => {
                        document.body.classList.toggle('dark');
                    });
                });
