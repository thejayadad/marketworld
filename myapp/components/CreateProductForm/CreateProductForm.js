'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AiOutlineFileImage } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Link from "next/link"


const CreateProductForm = () => {
    const CLOUD_NAME = 'socialsite';
    const UPLOAD_PRESET = 'marketsite';
    const router = useRouter();
  
    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [photo, setPhoto] = useState(null); 
    const [previewUrl, setPreviewUrl] = useState(''); 
    const [price, setPrice] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
      };
    
      const handleCloseModal = () => {
        setIsModalOpen(false);
      };
    
      const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
          const images = await uploadImage();
    
          const response = await fetch(`http://localhost:3000/api/product`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ title, desc, images, price }),
          });
    
          if (!response.ok) {
            throw new Error('Error submitting product');
          }
    
          handleCloseModal();
    
          useEffect(() => {
            router.push('/dashboard');
          }, [isModalOpen]); 
    
        } catch (error) {
          console.error(error);
          toast.error('Error submitting product');
        }
      };
    
      const uploadImage = async () => {
        if (!photo) return;
    
        const formData = new FormData();
        formData.append('file', photo);
        formData.append('upload_preset', UPLOAD_PRESET);
    
        try {
          const response = await axios.post(
            `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
            formData
          );
    
          return response.data.secure_url;
        } catch (error) {
          console.error(error);
          toast.error('Error uploading image');
        }
      };
    
      const handleImageChange = (e) => {
        const file = e.target.files[0];
    
        if (file) {
          setPhoto(file);
    
          const reader = new FileReader();
          reader.onloadend = () => {
            setPreviewUrl(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };

  return (
    <div>
    <button onClick={handleOpenModal} className="border-gray-300 bg-blue-200">
       NewProduct
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-md">
          <button onClick={handleCloseModal} className="btn btn-secondary">
              Close
            </button>
            <h2 className="text-2xl mb-4">Create Product Form</h2>
  <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block text-sm font-medium text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="desc" className="block text-sm font-medium text-gray-700">
            Description
          </label>
          <textarea
            id="desc"
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="price" className="block text-sm font-medium text-gray-700">
            Price
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className="mt-1 p-2 w-full border rounded-md"
            required
          />
        </div>

        <div>
          <label htmlFor="image" className="block text-sm font-medium text-gray-700">
            Upload Image <AiOutlineFileImage />
          </label>
          <input
            id="image"
            type="file"
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border rounded-md"
          />
          {previewUrl && (
            <div className="mt-2">
              <img
                src={previewUrl}
                alt="Image Preview"
                className="w-24 h-40 object-cover rounded-md"
              />
            </div>
          )}
        </div>

        <button
          type="submit"
          className="text-blue-200 py-2 rounded hover:bg-gray-700 border-blue-200 transition duration-300 w-full"
        >
          Create
        </button>
      </form>
      <ToastContainer />
          </div>
        </div>
      )}
    </div>
  )
}

export default CreateProductForm