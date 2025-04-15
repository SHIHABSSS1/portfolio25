"use client";

import { useState } from "react";
import { AboutData } from "@/utils/types";
import { useAbout } from "@/utils/storage";
import ImageUploader from "./ImageUploader";
import { FaTrash, FaArrowUp, FaArrowDown } from "react-icons/fa";

export default function AboutEditor() {
  const { about, updateAbout } = useAbout();
  const [editingAbout, setEditingAbout] = useState<AboutData>(about);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setEditingAbout((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleExperienceChange = (
    index: number,
    field: string,
    value: string
  ) => {
    setEditingAbout((prev) => {
      const newExperience = [...prev.experience];
      newExperience[index] = {
        ...newExperience[index],
        [field]: value,
      };
      return {
        ...prev,
        experience: newExperience,
      };
    });
  };

  const addExperience = () => {
    setEditingAbout((prev) => ({
      ...prev,
      experience: [
        ...prev.experience,
        { title: "", company: "", description: "" },
      ],
    }));
  };

  const removeExperience = (index: number) => {
    setEditingAbout((prev) => ({
      ...prev,
      experience: prev.experience.filter((_, i) => i !== index),
    }));
  };

  const handleImageUpload = (base64Image: string) => {
    setEditingAbout((prev) => ({
      ...prev,
      image: base64Image,
    }));
  };

  const handleCarouselImageUpload = (base64Image: string) => {
    setEditingAbout((prev) => ({
      ...prev,
      carouselImages: [...prev.carouselImages, base64Image],
    }));
  };

  const removeCarouselImage = (index: number) => {
    setEditingAbout((prev) => ({
      ...prev,
      carouselImages: prev.carouselImages.filter((_, i) => i !== index),
    }));
  };

  const moveCarouselImage = (index: number, direction: 'up' | 'down') => {
    if (
      (direction === 'up' && index === 0) || 
      (direction === 'down' && index === editingAbout.carouselImages.length - 1)
    ) {
      return;
    }

    setEditingAbout((prev) => {
      const newImages = [...prev.carouselImages];
      const newIndex = direction === 'up' ? index - 1 : index + 1;
      
      // Swap the images
      [newImages[index], newImages[newIndex]] = [newImages[newIndex], newImages[index]];
      
      return {
        ...prev,
        carouselImages: newImages,
      };
    });
  };

  const handleSave = () => {
    updateAbout(editingAbout);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingAbout(about);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            About Information
          </h2>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            Edit About Info
          </button>
        </div>

        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Personal Information
              </h3>
              <div className="space-y-4 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-medium">Name:</span> {about.name}
                </p>
                <p>
                  <span className="font-medium">Title:</span> {about.title}
                </p>
                <p>
                  <span className="font-medium">Tagline:</span> {about.tagline}
                </p>
                <p>
                  <span className="font-medium">Bio:</span> {about.bio}
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
                Profile Picture
              </h3>
              <div className="h-48 w-full overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                {about.image ? (
                  <img
                    src={about.image}
                    alt="Profile"
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="flex items-center justify-center h-full w-full bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400">
                    No image
                  </div>
                )}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Photo Gallery
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {about.carouselImages && about.carouselImages.length > 0 ? (
                about.carouselImages.map((image, index) => (
                  <div 
                    key={index} 
                    className="relative h-24 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700"
                  >
                    <img 
                      src={image} 
                      alt={`Gallery image ${index + 1}`} 
                      className="h-full w-full object-cover" 
                    />
                  </div>
                ))
              ) : (
                <div className="col-span-full flex items-center justify-center h-24 rounded-lg bg-gray-200 dark:bg-gray-600 text-gray-500 dark:text-gray-400">
                  No gallery images
                </div>
              )}
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-2">
              Professional Experience
            </h3>
            <div className="space-y-4">
              {about.experience.map((exp, index) => (
                <div
                  key={index}
                  className="border border-gray-200 dark:border-gray-700 rounded-lg p-4"
                >
                  <p className="font-medium text-gray-900 dark:text-white">
                    {exp.title} at {exp.company}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300 mt-1">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Edit About Information
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={editingAbout.name}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Title
              </label>
              <input
                type="text"
                id="title"
                name="title"
                value={editingAbout.title}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="tagline"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Tagline
              </label>
              <input
                type="text"
                id="tagline"
                name="tagline"
                value={editingAbout.tagline}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label
                htmlFor="bio"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Bio
              </label>
              <textarea
                id="bio"
                name="bio"
                rows={5}
                value={editingAbout.bio}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <div>
            <ImageUploader
              onImageUpload={handleImageUpload}
              currentImage={editingAbout.image}
            />
          </div>
        </div>

        {/* Carousel Images Section */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Photo Gallery
            </h3>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {editingAbout.carouselImages.length} images
              </span>
              <div className="w-40">
                <ImageUploader
                  onImageUpload={handleCarouselImageUpload}
                  currentImage=""
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {editingAbout.carouselImages.map((image, index) => (
              <div
                key={index}
                className="relative border border-gray-200 dark:border-gray-700 rounded-lg p-2"
              >
                <div className="relative h-40 mb-2 overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700">
                  <img
                    src={image}
                    alt={`Gallery image ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    Image #{index + 1}
                  </span>
                  <div className="flex space-x-2">
                    <button
                      onClick={() => moveCarouselImage(index, 'up')}
                      disabled={index === 0}
                      className={`text-blue-600 p-1 ${
                        index === 0 ? 'opacity-50 cursor-not-allowed' : 'hover:text-blue-500'
                      }`}
                      aria-label="Move up"
                    >
                      <FaArrowUp size={14} />
                    </button>
                    <button
                      onClick={() => moveCarouselImage(index, 'down')}
                      disabled={index === editingAbout.carouselImages.length - 1}
                      className={`text-blue-600 p-1 ${
                        index === editingAbout.carouselImages.length - 1
                          ? 'opacity-50 cursor-not-allowed'
                          : 'hover:text-blue-500'
                      }`}
                      aria-label="Move down"
                    >
                      <FaArrowDown size={14} />
                    </button>
                    <button
                      onClick={() => removeCarouselImage(index)}
                      className="text-red-600 p-1 hover:text-red-500"
                      aria-label="Remove image"
                    >
                      <FaTrash size={14} />
                    </button>
                  </div>
                </div>
              </div>
            ))}

            {editingAbout.carouselImages.length === 0 && (
              <div className="col-span-full flex items-center justify-center h-40 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 border border-dashed border-gray-300 dark:border-gray-600">
                No images in the gallery. Use the uploader above to add images.
              </div>
            )}
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-gray-900 dark:text-white">
              Professional Experience
            </h3>
            <button
              onClick={addExperience}
              className="px-3 py-1 text-sm font-medium text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500"
            >
              Add Experience
            </button>
          </div>

          <div className="space-y-6">
            {editingAbout.experience.map((exp, index) => (
              <div
                key={index}
                className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 space-y-3"
              >
                <div className="flex justify-between">
                  <h4 className="text-sm font-medium text-gray-900 dark:text-white">
                    Experience #{index + 1}
                  </h4>
                  <button
                    onClick={() => removeExperience(index)}
                    className="text-sm text-red-600 hover:text-red-500"
                  >
                    Remove
                  </button>
                </div>

                <div>
                  <label
                    htmlFor={`exp-title-${index}`}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    id={`exp-title-${index}`}
                    value={exp.title}
                    onChange={(e) =>
                      handleExperienceChange(index, "title", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`exp-company-${index}`}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Company
                  </label>
                  <input
                    type="text"
                    id={`exp-company-${index}`}
                    value={exp.company}
                    onChange={(e) =>
                      handleExperienceChange(index, "company", e.target.value)
                    }
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>

                <div>
                  <label
                    htmlFor={`exp-desc-${index}`}
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                  >
                    Description
                  </label>
                  <textarea
                    id={`exp-desc-${index}`}
                    value={exp.description}
                    onChange={(e) =>
                      handleExperienceChange(
                        index,
                        "description",
                        e.target.value
                      )
                    }
                    rows={3}
                    className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 