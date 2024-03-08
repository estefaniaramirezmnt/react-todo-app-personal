import React, { useState } from "react";

function Title() {
  const [title, setTitle] = useState("list title here...");
  const [editingTitle, setEditingTitle] = useState(false);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleClick = () => {
    setEditingTitle(true);
    setTitle(""); // Initialize title as empty string when clicked
  };

  const handleTitleBlur = () => {
    setEditingTitle(false);
    if (title.trim() === "") {
      setTitle("list title here...");
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setEditingTitle(false);
      if (title.trim() === "") {
        setTitle("list title here...");
      }
    }
  };

  return (
    <>
      {editingTitle ? (
        <input
          type="text"
          value={title}
          onChange={handleTitleChange}
          onBlur={handleTitleBlur}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      ) : (
        <h3 onClick={handleTitleClick}>{title}</h3>
      )}
    </>
  );
}

export default Title;
