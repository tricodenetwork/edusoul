"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { proseFormatting } from "@/lib/helper";

const Tiptap = ({ onChange, content }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    content: "<p>Enter lesson note here...</p>",
    editorProps: {
      attributes: {
        class: `h-full ${proseFormatting}  text-appBlack w-full text-[16px] break-words outline-none`,
      },
    },
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  return (
    <div className='h-full flex flex-col '>
      <Toolbar editor={editor} content={content} />
      <EditorContent
        className='my-2 mx-4 overflow-x-hidden overflow-y-scroll flex-1'
        style={{ wordWrap: "break-word", whiteSpace: "pre-line" }}
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
