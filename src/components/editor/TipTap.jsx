"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";
import { proseFormatting } from "@/lib/helper";
import Link from "@tiptap/extension-link";

const Tiptap = ({ onChange, content, disabled }) => {
  const handleChange = (newContent) => {
    onChange(newContent);
  };
  const editor = useEditor(
    {
      editable: !disabled,
      // immediatelyRender: false,

      extensions: [
        StarterKit,
        Underline,
        Link.configure({
          openOnClick: true,
          autolink: true,
          defaultProtocol: "https",
          protocols: ["http", "https"],
          isAllowedUri: (url, ctx) => {
            try {
              // construct URL
              const parsedUrl = url.includes(":")
                ? new URL(url)
                : new URL(`${ctx.defaultProtocol}://${url}`);

              // use default validation
              if (!ctx.defaultValidate(parsedUrl.href)) {
                return false;
              }

              // disallowed protocols
              const disallowedProtocols = ["ftp", "file", "mailto"];
              const protocol = parsedUrl.protocol.replace(":", "");

              if (disallowedProtocols.includes(protocol)) {
                return false;
              }

              // only allow protocols specified in ctx.protocols
              const allowedProtocols = ctx.protocols.map((p) =>
                typeof p === "string" ? p : p.scheme
              );

              if (!allowedProtocols.includes(protocol)) {
                return false;
              }

              // disallowed domains
              const disallowedDomains = [
                "example-phishing.com",
                "malicious-site.net",
              ];
              const domain = parsedUrl.hostname;

              if (disallowedDomains.includes(domain)) {
                return false;
              }

              // all checks have passed
              return true;
            } catch {
              return false;
            }
          },
          shouldAutoLink: (url) => {
            try {
              // construct URL
              const parsedUrl = url.includes(":")
                ? new URL(url)
                : new URL(`https://${url}`);

              // only auto-link if the domain is not in the disallowed list
              const disallowedDomains = [
                "example-no-autolink.com",
                "another-no-autolink.com",
              ];
              const domain = parsedUrl.hostname;

              return !disallowedDomains.includes(domain);
            } catch {
              return false;
            }
          },
        }),
      ],
      content: content ?? "<p>Enter lesson note here...</p>",
      editorProps: {
        attributes: {
          class: `h-full ${proseFormatting}   text-appBlack w-full text-[16px] break-words outline-none`,
        },
      },
      onUpdate: ({ editor }) => {
        handleChange(editor.getHTML());
      },
    },
    [disabled]
  );

  return (
    <div className="h-full flex flex-col ">
      <Toolbar editor={editor} content={content} />
      <EditorContent
        className="my-2 mx-4  overflow-x-hidden overflow-y-scroll flex-1"
        style={{ wordWrap: "break-word", whiteSpace: "pre-line" }}
        editor={editor}
      />
    </div>
  );
};

export default Tiptap;
