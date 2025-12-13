"use client";

import { Search } from "lucide-react";
import { InputGroup, InputGroupAddon, InputGroupInput } from "./ui/input-group";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function SearchCard({ q }: { q?: string }) {
  const [searchTerm, setSearchTerm] = useState(q || "");

  const router = useRouter();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
    //   console.log("按下回车", searchTerm);
      router.push(`/search?q=${searchTerm}`);
    }
  };
  return (
    <div>
      <InputGroup>
        <InputGroupInput
          className="focus-visible:ring-offset-0"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => handleSearch(e)}
          onKeyDown={(e) => handleKeyDown(e)}
        />
        <InputGroupAddon>
          <Search />
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}
