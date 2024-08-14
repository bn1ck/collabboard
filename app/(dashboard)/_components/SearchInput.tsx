"use client";
import React, { useState } from "react";
import qs from "query-string";
import { useRouter } from "next/navigation";
import { useDebounceValue } from "usehooks-ts";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const SearchInput = () => {
    const router = useRouter();
    const [search, setSearch] = useState('');
    const debouncedSearch = useDebounceValue(search, 300);

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
  return (
    <div className="w-full relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
      <Input
        className="w-full max-w-[516px] pl-9"
        placeholder="Search boards"
      />
    </div>
  );
};

export default SearchInput;
