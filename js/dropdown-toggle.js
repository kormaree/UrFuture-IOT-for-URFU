let intervalId;

document.querySelectorAll('.dropdown-toggle').forEach(toggle => {
    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        
        const menu = e.currentTarget.dataset.path;
        const dropdownMenu = document.querySelector(`[data-target=${menu}]`);
        const imgOff = toggle.querySelector('.img_dropdown-active');
        const imgOn = toggle.querySelector('.img_dropdown-not-active');
        
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            if (menu !== dropdownMenu) {
                menu.classList.remove('menu-active', 'open');
                const otherToggle = menu.previousElementSibling;
                if (otherToggle) {
                    otherToggle.querySelector('.img_dropdown-active').classList.remove('hidden');
                    otherToggle.querySelector('.img_dropdown-not-active').classList.remove('visible');
                }
            }
        });

        if (!dropdownMenu.classList.contains('open')) {

            dropdownMenu.classList.add('menu-active', 'open');
            
            imgOff.classList.add('hidden');
            imgOn.classList.add('visible');
        } else {

            dropdownMenu.classList.remove('menu-active', 'open');
            
            imgOff.classList.remove('hidden');
            imgOn.classList.remove('visible');
        }
    });
});

document.addEventListener('click', (e) => {
    if (!e.target.closest('.dropdown')) {
        document.querySelectorAll('.dropdown-menu').forEach(menu => {
            menu.classList.remove('menu-active', 'open');
            const toggle = menu.previousElementSibling;
            if (toggle) {
                toggle.querySelector('.img_dropdown-active').classList.remove('hidden');
                toggle.querySelector('.img_dropdown-not-active').classList.remove('visible');
            }
        });
    }
});