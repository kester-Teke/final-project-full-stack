'use client';

import { useState, useCallback, useEffect } from 'react';

export const useModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(null);

  const openModal = useCallback((modalData = null) => {
    setData(modalData);
    setIsOpen(true);
    // Empêcher le scroll du body avec effet smooth
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '15px'; // Évite le décalage
  }, []);

  const closeModal = useCallback(() => {
    setIsOpen(false);
    setData(null);
    // Réactiver le scroll
    document.body.style.overflow = '';
    document.body.style.paddingRight = '';
  }, []);

  // Fermer avec la touche Echap
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [isOpen, closeModal]);

  // Nettoyage au démontage
  useEffect(() => {
    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);

  return { isOpen, data, openModal, closeModal };
};