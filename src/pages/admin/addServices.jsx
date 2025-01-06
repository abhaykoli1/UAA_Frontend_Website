import React, { useState } from "react";
import { addService } from "../../api/apiServices";

const AddService = () => {
  const [formData, setFormData] = useState({
    title: "",
    shortDec: "",
    bannerImg: "",
    icon: "",
    seo_title: "",
    seo_description: "",
    description: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await addService(formData);
      alert(response.message);
    } catch (error) {
      alert(error + "Failed to add service. Check console for errors.");
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="title"
        placeholder="Title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="shortDec"
        placeholder="Short Description"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="bannerImg"
        placeholder="Banner Image URL"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="icon"
        placeholder="Icon URL"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="seo_title"
        placeholder="SEO Title"
        onChange={handleChange}
        required
      />
      <input
        type="text"
        name="seo_description"
        placeholder="SEO Description"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Add Service</button>
    </form>
  );
};

export default AddService;
