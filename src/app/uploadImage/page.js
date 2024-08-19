"use client";

import { useRef, useState } from "react";

export default function UploadImage() {
  const [files, setFiles] = useState([]);
  const check = useRef(false);

  const uploaded = async (e) => {
    e.preventDefault();
    check.current = false;

    const formData = new FormData();
    for (let file of files) {
      formData.append("file", file);
      try {
        const sendData = await fetch("/DB", {
          method: "POST",
          body: formData,
        });

        const res = await sendData.json();
        if (res.success === "true") {
          check.current = true;
        }
      } catch (error) {
        console.error("Error uploading file:", error);
      }
    }

    if (check.current) {
      alert("Your data was sent successfully.");
    } else {
      alert("Some error occurred, please try again.");
    }
  };

  return (
    <form style={{ display: "flex", justifyContent: "center" }} onSubmit={uploaded}>
      <label>Choose files to upload</label>
      <input
        type="file"
        multiple
        onChange={(e) => setFiles(Array.from(e.target.files))}
        name="file"
      />
      <button type="submit" style={{ marginLeft: "10px" }}>
        Submit
      </button>
    </form>
  );
}
