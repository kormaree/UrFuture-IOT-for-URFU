document.addEventListener('DOMContentLoaded', function() {
    const dropdownMap = {
        'panel_div-personalaccount': 'panel_ul-personalaccount',
        'panel_div-IOT': 'panel_ul-IOT',
        'panel_div-profession': 'panel_ul-profession',
        'panel_div-komments': 'panel_ul-komments'
    };

    Object.keys(dropdownMap).forEach(triggerClass => {
        const triggers = document.querySelectorAll(`.${triggerClass}`);
        const dropdownClass = dropdownMap[triggerClass];
        
        triggers.forEach(trigger => {
            const dropdown = trigger.nextElementSibling;
            
            trigger.addEventListener('mouseenter', () => {
                document.querySelectorAll(`.${dropdownClass}`).forEach(d => {
                    d.classList.add('dropdown-visible');
                });
            });
            
            trigger.addEventListener('mouseleave', () => {
                setTimeout(() => {
                    if (!dropdown.matches(':hover')) {
                        dropdown.classList.remove('dropdown-visible');
                    }
                }, 200);
            });
            
            if (dropdown) {
                dropdown.addEventListener('mouseenter', () => {
                    dropdown.classList.add('dropdown-visible');
                });
                
                dropdown.addEventListener('mouseleave', () => {
                    dropdown.classList.remove('dropdown-visible');
                });
            }
        });
    });
});
