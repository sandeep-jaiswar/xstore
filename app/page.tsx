'use client'

import Drawer from "@/components/Drawer";
import { useState } from "react";

export default function Home() {
  const [show, setShow] = useState(true)
  const onClose = () => {
    setShow(false)
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Drawer isOpen={show} onClose={onClose}>
        hellow
      </Drawer>
    </main>
  );
}
