import React, { useEffect, useRef } from 'react';

export default function ElasticSearch() {
    const inputRef = useRef<HTMLInputElement>(null);
    
    useEffect(() => {
        const inputEl = inputRef.current;
        if (!inputEl) return;

        const handler = () => {
            const value = inputEl.value.trim();
            const elasticItems = document.querySelectorAll('.elastic-directions li');
            
            elasticItems.forEach((elem: Element) => {
                const shouldHide = value !== '' && 
                    (elem as HTMLElement).innerText.search(value) === -1;
                elem.classList.toggle('hide', shouldHide);
            });
        };

        inputEl.addEventListener('input', handler);
        return () => inputEl.removeEventListener('input', handler);
    }, []);

    return <input id="elastic-directions" ref={inputRef} />;
};
