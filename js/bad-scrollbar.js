document.addEventListener('DOMContentLoaded', function() {
    // Получаем элементы по ID
    const wrapper = document.getElementById('semestersWrapper');
    const thumb = document.getElementById('scrollThumb');
    const track = document.getElementById('scrollTrack');
    
    if (!wrapper || !thumb || !track) {
        console.error('Не найдены необходимые элементы для скролла!');
        return;
    }

    // Функция обновления скролла
    function updateScroll() {
        const scrollWidth = wrapper.scrollWidth;
        const clientWidth = wrapper.clientWidth;
        
        if (scrollWidth > clientWidth) {
            const thumbWidth = (clientWidth / scrollWidth) * track.offsetWidth;
            thumb.style.width = `${thumbWidth}px`;
            
            // Показываем скролл
            track.style.opacity = '1';
        } else {
            // Скрываем скролл если контент помещается
            track.style.opacity = '0';
        }
    }

    // Инициализация
    updateScroll();
    
    // Обработчики событий
    let isDragging = false;
    let startX, startLeft;

    thumb.addEventListener('mousedown', function(e) {
        isDragging = true;
        startX = e.clientX;
        startLeft = thumb.offsetLeft;
        thumb.style.cursor = 'grabbing';
        e.preventDefault();
    });

    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        
        const trackWidth = track.offsetWidth;
        const thumbWidth = thumb.offsetWidth;
        let newLeft = startLeft + (e.clientX - startX);
        
        // Ограничиваем перемещение
        newLeft = Math.max(0, Math.min(newLeft, trackWidth - thumbWidth));
        
        // Обновляем позицию
        thumb.style.left = `${newLeft}px`;
        
        // Синхронизируем скролл
        const scrollRatio = (wrapper.scrollWidth - wrapper.clientWidth) / (trackWidth - thumbWidth);
        wrapper.scrollLeft = newLeft * scrollRatio;
    });

    document.addEventListener('mouseup', function() {
        isDragging = false;
        thumb.style.cursor = 'grab';
    });

    // Синхронизация при скролле колесиком
    wrapper.addEventListener('scroll', function() {
        if (isDragging) return;
        
        const trackWidth = track.offsetWidth;
        const thumbWidth = thumb.offsetWidth;
        const scrollRatio = (trackWidth - thumbWidth) / (wrapper.scrollWidth - wrapper.clientWidth);
        thumb.style.left = `${wrapper.scrollLeft * scrollRatio}px`;
    });

    // Ресайз окна
    window.addEventListener('resize', updateScroll);
});