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
  const [showChatHint, setShowChatHint] = useState(true);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  const toggleChat = () => {
    setIsChatOpen((open) => !open);
    setShowChatHint(false);
  };

  return (
    <div className="fixed bottom-10 left-1/2 z-40 flex -translate-x-1/2 items-end gap-3">
      <Dock direction="middle">
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

      <div className="relative">
        {showChatHint && !isChatOpen && (
          <div
            role="status"
            className="absolute -right-2 bottom-20 z-10 whitespace-nowrap rounded-xl border border-white/15 bg-zinc-950/95 px-3 py-1.5 text-xs font-medium text-white shadow-xl shadow-black/30 backdrop-blur-md after:absolute after:right-5 after:top-full after:border-4 after:border-transparent after:border-t-zinc-950"
          >
            <span className="mr-1 inline-block animate-bounce" aria-hidden="true">
              &#x1F44B;
            </span>
            Ask me about Thant
          </div>
        )}
        <Dock direction="middle">
          <DockIcon
            role="button"
            tabIndex={0}
            aria-label={isChatOpen ? "Close portfolio chat" : "Open portfolio chat"}
            aria-expanded={isChatOpen}
            aria-controls="portfolio-chat-panel"
            onClick={toggleChat}
            onKeyDown={(event) => {
              if (event.key === "Enter" || event.key === " ") {
                event.preventDefault();
                toggleChat();
              }
            }}
            className="bg-violet-500/15 text-violet-200 hover:bg-violet-500/25"
          >
            {isChatOpen ? <X className="size-6" /> : <MessageCircle className="size-6" />}
          </DockIcon>
        </Dock>
      </div>
      <PortfolioChat
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
      />
    </div>
  )
}
