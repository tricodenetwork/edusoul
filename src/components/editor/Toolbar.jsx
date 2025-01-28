"use client";

import React from "react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
} from "lucide-react";
import Image from "next/image";

const Toolbar = ({ editor, content }) => {
  if (!editor) {
    return null;
  }
  return (
    <div className='flex m-2 border-b border-[#EAECF0] justify-start items-center gap-1 w-full lg:w-[97%] flex-wrap '>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBold().run();
        }}
        className={
          editor.isActive("bold")
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image
          src={"/assets/icons/bold.svg"}
          width={32}
          height={32}
          alt='bold'
        />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleItalic().run();
        }}
        className={
          editor.isActive("italic")
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image
          src={"/assets/icons/italic.svg"}
          width={32}
          height={32}
          alt='italic'
        />
      </button>
      {/* <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-[#717171] p-1"
          }
        >
          <Underline className='w-[32px] h-[32px]' />
        </button> */}
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 1 }).run();
        }}
        className={
          editor.isActive("heading", { level: 1 })
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image src={"/assets/icons/h1.svg"} width={32} height={32} alt='h1' />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleHeading({ level: 2 }).run();
        }}
        className={
          editor.isActive("heading", { level: 2 })
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image src={"/assets/icons/h2.svg"} width={32} height={32} alt='h2' />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBlockquote().run();
        }}
        className={
          editor.isActive("blockquote")
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image
          src={"/assets/icons/quote.svg"}
          width={32}
          height={32}
          alt='quote'
        />
      </button>

      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleBulletList().run();
        }}
        className={
          editor.isActive("bulletList")
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image
          src={"/assets/icons/bullet.svg"}
          width={32}
          height={32}
          alt='bullet'
        />
      </button>
      <button
        onClick={(e) => {
          e.preventDefault();
          editor.chain().focus().toggleOrderedList().run();
        }}
        className={
          editor.isActive("orderedList")
            ? "bg-ash text-white p-1 rounded-lg"
            : "text-[#717171] p-1"
        }
      >
        <Image src={"/assets/icons/num.svg"} width={32} height={32} alt='num' />
      </button>
      {/* <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().setCode().run();
          }}
          className={
            editor.isActive("code")
              ? "bg-ash text-white p-1 rounded-lg"
              : "text-[#717171] p-1"
          }
        >
          <Code className='w-5 h-5' />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-[#717171] p-1 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Undo className='w-5 h-5' />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "bg-sky-700 text-white p-2 rounded-lg"
              : "text-[#717171] p-1 hover:bg-sky-700 hover:text-white p-1 hover:rounded-lg"
          }
        >
          <Redo className='w-5 h-5' />
        </button> */}
    </div>
  );
};

export default Toolbar;
