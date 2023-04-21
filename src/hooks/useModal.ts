import { useState } from 'react';

export const useModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedItemId, setSelectedItemId] = useState<number | null>(null);

  const showModal = () => setIsModalOpen(true);

  const hideModal = () => {
    setIsModalOpen(false);
    setSelectedItemId(null);
  };

  const onTableIconClick = (id: number | null) => {
    setSelectedItemId(id);
    showModal();
  };

  return { isModalOpen, showModal, hideModal, selectedItemId, onTableIconClick };
};
