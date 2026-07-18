"use client"

import React, { useState } from "react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { PiCertificate } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";
import { MessageCircle, X } from "lucide-react";
import { PortfolioChat } from "@/components/portfolio-chat";



export function MyDock() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10">
      <Dock direction="middle">
        <DockIcon
          role="button"
          tabIndex={0}
          aria-label={isChatOpen ? "Close portfolio chat" : "Open portfolio chat"}
          aria-expanded={isChatOpen}
          aria-controls="portfolio-chat-panel"
          onClick={() => setIsChatOpen((open) => !open)}
          onKeyDown={(event) => {
            if (event.key === "Enter" || event.key === " ") {
              event.preventDefault();
              setIsChatOpen((open) => !open);
            }
          }}
          className="bg-violet-500/15 text-violet-200 hover:bg-violet-500/25"
        >
          {isChatOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
        </DockIcon>
        <DockIcon onClick={() => scrollTo("exp")}>
          <MdOutlineWorkOutline className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => scrollTo("certs")}>
          <PiCertificate className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => scrollTo("skills")}>
          <FaCode className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => scrollTo("projects")}>
          <FaRegFolderOpen className="size-6" />
        </DockIcon>
        <DockIcon onClick={() => scrollTo("contact")}>
          <MdOutlineContactPage className="size-6" />
        </DockIcon>
      </Dock>
      <PortfolioChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}
