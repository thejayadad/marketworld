'use client'
import React, { useState } from 'react';

const CreateUserForm = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpenModal} className="px-3 py-2 border border-gray-300 bg-transparent">
       NewUser
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
          <button onClick={handleCloseModal} className="btn btn-secondary">
              Close
            </button>
            <h2 className="text-2xl mb-4">Create User Form</h2>
         
          </div>
        </div>
      )}
    </div>
  );
};

export default CreateUserForm;
