"use client";

import { useState } from "react";
import { Skill } from "@/utils/types";
import { useSkills, getIconComponent } from "@/utils/storage";
import { FaCode, FaServer, FaMicrochip, FaMobile, FaPalette, FaChartLine } from "react-icons/fa";

export default function SkillsEditor() {
  const { skills, updateSkills } = useSkills();
  const [isEditing, setIsEditing] = useState(false);
  const [editingSkill, setEditingSkill] = useState<Skill | null>(null);
  const [editingSkills, setEditingSkills] = useState<Skill[]>(skills);

  const availableIcons = [
    { name: "FaCode", icon: FaCode, label: "Code" },
    { name: "FaServer", icon: FaServer, label: "Server" },
    { name: "FaMicrochip", icon: FaMicrochip, label: "Microchip" },
    { name: "FaMobile", icon: FaMobile, label: "Mobile" },
    { name: "FaPalette", icon: FaPalette, label: "Design" },
    { name: "FaChartLine", icon: FaChartLine, label: "Analytics" },
  ];

  const handleSaveSkills = () => {
    updateSkills(editingSkills);
    setIsEditing(false);
    setEditingSkill(null);
  };

  const handleCancelEdit = () => {
    setEditingSkills(skills);
    setIsEditing(false);
    setEditingSkill(null);
  };

  const handleAddSkill = () => {
    const newId = Math.max(0, ...editingSkills.map((s) => s.id)) + 1;
    const newSkill: Skill = {
      id: newId,
      category: "New Skill Category",
      icon: "FaCode",
      items: ["Skill 1", "Skill 2"],
    };
    setEditingSkills([...editingSkills, newSkill]);
  };

  const handleDeleteSkill = (id: number) => {
    setEditingSkills(editingSkills.filter((skill) => skill.id !== id));
  };

  const handleEditSkill = (skill: Skill) => {
    setEditingSkill({ ...skill });
  };

  const handleUpdateSkill = () => {
    if (!editingSkill) return;
    
    setEditingSkills(
      editingSkills.map((skill) =>
        skill.id === editingSkill.id ? editingSkill : skill
      )
    );
    setEditingSkill(null);
  };

  const handleSkillChange = (field: keyof Skill, value: any) => {
    if (!editingSkill) return;
    
    setEditingSkill({
      ...editingSkill,
      [field]: value,
    });
  };

  const handleSkillItemChange = (index: number, value: string) => {
    if (!editingSkill) return;
    
    const newItems = [...editingSkill.items];
    newItems[index] = value;
    
    setEditingSkill({
      ...editingSkill,
      items: newItems,
    });
  };

  const handleAddSkillItem = () => {
    if (!editingSkill) return;
    
    setEditingSkill({
      ...editingSkill,
      items: [...editingSkill.items, "New Skill"],
    });
  };

  const handleRemoveSkillItem = (index: number) => {
    if (!editingSkill) return;
    
    setEditingSkill({
      ...editingSkill,
      items: editingSkill.items.filter((_, i) => i !== index),
    });
  };

  // Skill Editing Modal
  if (editingSkill) {
    return (
      <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
        <div className="bg-white dark:bg-gray-800 rounded-lg w-full max-w-xl p-6">
          <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            {editingSkill.id ? "Edit Skill Category" : "Add Skill Category"}
          </h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Category Name
              </label>
              <input
                type="text"
                value={editingSkill.category}
                onChange={(e) => handleSkillChange("category", e.target.value)}
                className="w-full px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                Icon
              </label>
              <div className="grid grid-cols-3 gap-2">
                {availableIcons.map((iconOption) => {
                  const IconComponent = iconOption.icon;
                  return (
                    <button
                      key={iconOption.name}
                      type="button"
                      onClick={() => handleSkillChange("icon", iconOption.name)}
                      className={`flex flex-col items-center p-2 rounded ${
                        editingSkill.icon === iconOption.name
                          ? "bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                          : "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      <IconComponent className="h-6 w-6 mb-1" />
                      <span className="text-xs">{iconOption.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
            
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                  Skills
                </label>
                <button
                  type="button"
                  onClick={handleAddSkillItem}
                  className="text-sm text-blue-600 hover:text-blue-500"
                >
                  + Add Skill
                </button>
              </div>
              
              <div className="space-y-2">
                {editingSkill.items.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={item}
                      onChange={(e) => handleSkillItemChange(index, e.target.value)}
                      className="flex-1 px-3 py-2 bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                    />
                    <button
                      type="button"
                      onClick={() => handleRemoveSkillItem(index)}
                      className="text-red-600 hover:text-red-500"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-6 flex justify-end gap-2">
            <button
              type="button"
              onClick={() => setEditingSkill(null)}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600"
            >
              Cancel
            </button>
            <button
              type="button"
              onClick={handleUpdateSkill}
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
            >
              Save Skill
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!isEditing) {
    return (
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
            Skills
          </h2>
          <button
            onClick={() => setIsEditing(true)}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            Edit Skills
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill) => {
            const IconComponent = getIconComponent(skill.icon);
            
            return (
              <div
                key={skill.id}
                className="rounded-xl bg-white p-6 shadow-md ring-1 ring-gray-200 dark:bg-gray-800 dark:ring-gray-700"
              >
                <div className="flex items-center gap-x-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                    <IconComponent className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold leading-7 text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                </div>
                <ul className="mt-4 space-y-2 text-sm text-gray-600 dark:text-gray-400">
                  {skill.items.map((item) => (
                    <li key={item} className="flex items-center gap-x-2">
                      <span className="h-1.5 w-1.5 flex-none rounded-full bg-blue-600 dark:bg-blue-400" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Edit Skills
        </h2>
        <div className="flex gap-2">
          <button
            onClick={handleCancelEdit}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white dark:bg-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleSaveSkills}
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md shadow-sm hover:bg-blue-500"
          >
            Save Changes
          </button>
        </div>
      </div>

      <div className="mb-4">
        <button
          onClick={handleAddSkill}
          className="px-4 py-2 text-sm font-medium text-white bg-green-600 rounded-md shadow-sm hover:bg-green-500"
        >
          + Add Skill Category
        </button>
      </div>

      <div className="space-y-4">
        {editingSkills.map((skill) => {
          const IconComponent = getIconComponent(skill.icon);
          
          return (
            <div
              key={skill.id}
              className="flex items-center justify-between p-4 border border-gray-200 dark:border-gray-700 rounded-lg"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400">
                  <IconComponent className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 dark:text-white">
                    {skill.category}
                  </h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {skill.items.length} skills
                  </p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  onClick={() => handleEditSkill(skill)}
                  className="px-3 py-1.5 text-sm text-blue-600 hover:text-blue-500"
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDeleteSkill(skill.id)}
                  className="px-3 py-1.5 text-sm text-red-600 hover:text-red-500"
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 