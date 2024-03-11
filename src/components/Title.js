import React, { useState, useEffect } from "react";

function Title() {
  const [title, setTitle] = useState(() => {
    const storedTitle = localStorage.getItem("title");
    return storedTitle ? storedTitle : "list title here...";
  });
  const [editingTitle, setEditingTitle] = useState(false);

  useEffect(() => {
    localStorage.setItem("title", title);
  }, [title]);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleTitleClick = () => {
    setEditingTitle(true);
    setTitle(""); // Clear the title when editing starts
  };

  const handleTitleBlur = () => {
    setEditingTitle(false);
    if (title.trim() === "") {
      // If the title is empty, reset it
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
          className="title-input"
        />
      ) : (
        <h3 onClick={handleTitleClick}>{title}</h3>
      )}
    </>
  );
}

export default Title;
