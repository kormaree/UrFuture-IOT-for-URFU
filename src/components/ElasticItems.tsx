import { useEffect, useRef } from 'react';

interface ElasticSearchProps {
    onSelect: (value: string) => void;
}

export default function ElasticSearch({ onSelect }: ElasticSearchProps) {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        const inputEl = inputRef.current;
        if (!inputEl) return;

        const handler = () => {
            const value = inputEl.value.trim().toLowerCase();
            onSelect(value);

            const elasticItems = document.querySelectorAll('.elastic-directions li');
            elasticItems.forEach((elem: Element) => {
                const text = (elem as HTMLElement).innerText.toLowerCase();
                const shouldHide = value !== '' && text.indexOf(value) === -1;
                elem.classList.toggle('hide', shouldHide);
            });
        };

        const listContainer = document.querySelector('.elastic-directions');
        const clickHandler = (e: Event) => {
            const target = e.target as HTMLElement;
            if (target.tagName === 'BUTTON') {
                const text = target.innerText.trim();
                inputEl.value = text;
                handler();
                const id = target.getAttribute('data-id') || text;
                onSelect(id);
            }
        };

        inputEl.addEventListener('input', handler);
        listContainer?.addEventListener('click', clickHandler);

        return () => {
            inputEl.removeEventListener('input', handler);
            listContainer?.removeEventListener('click', clickHandler);
        };
    }, [onSelect]);

    return <input id="elastic-directions" ref={inputRef} />;
};
