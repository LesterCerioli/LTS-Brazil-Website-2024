"use client";
import { useState } from "react";

interface PostFormProps {
  onPostCreated: () => void;
}

export default function PostForm({ onPostCreated }: PostFormProps) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("backend");
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState("");

  const isImageFile = (file: File) => file.type.startsWith("image/");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFile = event.target.files?.[0] || null;

    if (uploadedFile && !isImageFile(uploadedFile)) {
      setMessage("Only image files are allowed.");
      setFile(null);
      return;
    }

    setFile(uploadedFile);
    setMessage("");
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setMessage("");

    // Verificação de campos vazios e arquivo inválido
    if (!title || !content || !category || !file) {
      setMessage("All fields are required. Please complete the form.");
      return;
    }

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("category", category);
    formData.append("file", file);

    try {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Post created successfully!");
        onPostCreated();
        setTitle("");
        setContent("");
        setCategory("backend");
        setFile(null);
      } else {
        setMessage(data.message || "Error creating post.");
      }
    } catch (error) {
      setMessage("Error creating post.");
    }
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <div>
        <label>Title:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ borderColor: title ? "" : "red" }}
          required
        />
      </div>
      <div>
        <label>Content:</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          style={{ borderColor: content ? "" : "red" }}
          required
        />
      </div>
      <div>
        <label>Category:</label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          style={{ borderColor: category ? "" : "red" }}
          required
        >
          <option value="backend">BackEnd</option>
          <option value="frontend">FrontEnd</option>
          <option value="devOps">DevOps</option>
        </select>
      </div>
      <div>
        <label>Upload Image:</label>
        <input
          type="file"
          onChange={handleFileChange}
          accept="image/*"
          style={{ borderColor: file ? "" : "red" }}
          required
        />
      </div>
      <button type="submit">Create Post</button>
      {message && <p style={{ color: "red" }}>{message}</p>}
    </form>
  );
}
