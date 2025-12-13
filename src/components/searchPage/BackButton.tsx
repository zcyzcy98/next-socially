'use client'
import React from "react";
import { Button } from "../ui/button";
import { ArrowLeftIcon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();
  const handleClick = () => router.back();
  return (
    <div>
      <Button className="w-full" variant="ghost" onClick={handleClick}>
        <ArrowLeftIcon className="size-4" />
        Back
      </Button>
    </div>
  );
}
