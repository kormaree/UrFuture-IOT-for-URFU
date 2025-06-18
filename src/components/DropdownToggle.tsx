import React, { useState, useEffect } from 'react';

interface DropdownProps {
  toggleId: string;
  menuId: string;
}

const DropdownComponent: React.FC<DropdownProps> = ({ toggleId, menuId }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openDropdown = () => {
    setIsOpen(true);
  };

  const toggleDropdown = (e: Event) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const closeDropdown = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const toggle = document.getElementById(toggleId);
    const menu = document.getElementById(menuId);
    const input = document.getElementById('elastic-directions');
    

    if (toggle && menu) {
      toggle.addEventListener('click', toggleDropdown);
      input?.addEventListener('input', openDropdown);

      const menuItems = menu.querySelectorAll('a, li, button, div[role="button"]');
      menuItems.forEach(item => {
        item.addEventListener('click', closeDropdown);
      });

      if (isOpen) {
        menu.classList.add('menu-active', 'open');
        toggle.querySelector('.img_dropdown-active')?.classList.add('hidden');
        toggle.querySelector('.img_dropdown-not-active')?.classList.add('visible');
      } else {
        menu.classList.remove('menu-active', 'open');
        toggle.querySelector('.img_dropdown-active')?.classList.remove('hidden');
        toggle.querySelector('.img_dropdown-not-active')?.classList.remove('visible');
      }

      return () => {
        toggle.removeEventListener('click', toggleDropdown);
      };
    }
  }, [isOpen, toggleId, menuId]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const menu = document.getElementById(menuId);
      const toggle = document.getElementById(toggleId);
      
      if (menu && toggle && !menu.contains(event.target as Node) && !toggle.contains(event.target as Node)) {
        closeDropdown();
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [menuId, toggleId]);

  return null;
};

export default DropdownComponent;