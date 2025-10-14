"use client"

import React from "react"

import { Dock, DockIcon } from "@/components/ui/dock"
import { PiCertificate } from "react-icons/pi";
import { MdOutlineWorkOutline } from "react-icons/md";
import { FaCode } from "react-icons/fa6";
import { FaRegFolderOpen } from "react-icons/fa";
import { MdOutlineContactPage } from "react-icons/md";



export function MyDock() {
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-10">
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
    </div>
  )
}
