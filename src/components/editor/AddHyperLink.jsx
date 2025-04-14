import { useState } from "react";
import { IconLink } from "@tabler/icons-react";

// Component to add hyperlink to the selected text
export const AddHyperlink = ({ editor }) => {
  const [showInput, setShowInput] = useState(false);
  const [linkInput, setLinkInput] = useState("");

  const setLink = () => {
    if (linkInput) {
      editor
        .chain()
        .focus()
        .extendMarkRange("link")
        .setLink({ href: linkInput })
        .run();
    }
    setShowInput(false);
    setLinkInput("");
  };

  const unsetLink = () => {
    editor.chain().focus().unsetLink().run();
    setShowInput(false);
    setLinkInput("");
  };

  return (
    <div className="flex items-center gap-2">
      {/* Add/Unset Link Button */}
      <button
        onClick={() => {
          if (editor.isActive("link")) {
            unsetLink();
          } else {
            setShowInput(true);
          }
        }}
        className={
          editor.isActive("link")
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <IconLink />
      </button>

      {/* Inline Input for Link */}
      {showInput && (
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Enter URL"
            value={linkInput}
            onChange={(e) => setLinkInput(e.target.value)}
            className="border border-gray-300 rounded p-1 text-sm"
          />
          <button
            onClick={setLink}
            className="bg-blue-500 text-white px-2 py-1 rounded text-sm"
          >
            Add
          </button>
          <button
            onClick={() => setShowInput(false)}
            className="bg-red-500 text-white px-2 py-1 rounded text-sm"
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};
