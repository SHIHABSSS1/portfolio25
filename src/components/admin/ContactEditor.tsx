"use client";

import { useState } from "react";
import { ContactInfo } from "@/utils/types";
import { useContactInfo } from "@/utils/storage";

export default function ContactEditor() {
  const { contactInfo, updateContactInfo } = useContactInfo();
  const [editingContact, setEditingContact] = useState<ContactInfo>(contactInfo);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    section?: string,
    field?: string
  ) => {
    const { name, value } = e.target;

    if (section && field) {
      // Handle nested fields like address or socialLinks
      setEditingContact((prev) => ({
        ...prev,
        [section]: {
          ...prev[section as keyof ContactInfo],
          [field]: value,
        },
      }));
    } else {
      // Handle top-level fields
      setEditingContact((prev) => ({
        ...prev,
        [name]: value,
      }));
    }
  };

  const handleSave = () => {
    updateContactInfo(editingContact);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditingContact(contactInfo);
    setIsEditing(false);
  };

  if (!isEditing) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Contact Information
          </h2>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            Edit Contact Info
          </button>
        </div>

        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Basic Contact
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-medium">Email:</span>{" "}
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {contactInfo.email}
                  </a>
                </p>
                <p>
                  <span className="font-medium">Phone:</span>{" "}
                  <a
                    href={`tel:${contactInfo.phone}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    {contactInfo.phone}
                  </a>
                </p>
                <p>
                  <span className="font-medium">WhatsApp:</span>{" "}
                  <a
                    href={`https://wa.me/${contactInfo.whatsapp.replace(
                      /\+/g,
                      ""
                    )}`}
                    className="text-blue-600 dark:text-blue-400 hover:underline"
                    target="_blank"
                    rel="noreferrer"
                  >
                    {contactInfo.whatsapp}
                  </a>
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
                Address
              </h3>
              <div className="space-y-3 text-gray-700 dark:text-gray-300">
                <p>
                  <span className="font-medium">Present:</span>{" "}
                  {contactInfo.address.present}
                </p>
                <p>
                  <span className="font-medium">Permanent:</span>{" "}
                  {contactInfo.address.permanent}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
              Social Links
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-700 dark:text-gray-300">
              <p>
                <span className="font-medium">Facebook:</span>{" "}
                <a
                  href={contactInfo.socialLinks.facebook}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactInfo.socialLinks.facebook}
                </a>
              </p>
              <p>
                <span className="font-medium">GitHub:</span>{" "}
                <a
                  href={contactInfo.socialLinks.github}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactInfo.socialLinks.github}
                </a>
              </p>
              <p>
                <span className="font-medium">LinkedIn:</span>{" "}
                <a
                  href={contactInfo.socialLinks.linkedin}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactInfo.socialLinks.linkedin}
                </a>
              </p>
              <p>
                <span className="font-medium">Twitter:</span>{" "}
                <a
                  href={contactInfo.socialLinks.twitter}
                  className="text-blue-600 dark:text-blue-400 hover:underline"
                  target="_blank"
                  rel="noreferrer"
                >
                  {contactInfo.socialLinks.twitter}
                </a>
              </p>
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
          Edit Contact Information
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
        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Basic Contact
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={editingContact.email}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={editingContact.phone}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="whatsapp"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                WhatsApp
              </label>
              <input
                type="text"
                id="whatsapp"
                name="whatsapp"
                value={editingContact.whatsapp}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Address
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="present-address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Present Address
              </label>
              <input
                type="text"
                id="present-address"
                name="present-address"
                value={editingContact.address.present}
                onChange={(e) => handleChange(e, "address", "present")}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="permanent-address"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Permanent Address
              </label>
              <input
                type="text"
                id="permanent-address"
                name="permanent-address"
                value={editingContact.address.permanent}
                onChange={(e) => handleChange(e, "address", "permanent")}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-4">
            Social Links
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="facebook"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Facebook
              </label>
              <input
                type="url"
                id="facebook"
                name="facebook"
                value={editingContact.socialLinks.facebook}
                onChange={(e) => handleChange(e, "socialLinks", "facebook")}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="github"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                GitHub
              </label>
              <input
                type="url"
                id="github"
                name="github"
                value={editingContact.socialLinks.github}
                onChange={(e) => handleChange(e, "socialLinks", "github")}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="linkedin"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                LinkedIn
              </label>
              <input
                type="url"
                id="linkedin"
                name="linkedin"
                value={editingContact.socialLinks.linkedin}
                onChange={(e) => handleChange(e, "socialLinks", "linkedin")}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="twitter"
                className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
              >
                Twitter
              </label>
              <input
                type="url"
                id="twitter"
                name="twitter"
                value={editingContact.socialLinks.twitter}
                onChange={(e) => handleChange(e, "socialLinks", "twitter")}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 