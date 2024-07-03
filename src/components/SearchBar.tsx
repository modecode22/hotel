import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const SearchBar = ({
  onSearch,
}: {
  onSearch: (query: string, mode: "number" | "type") => void;
}) => {
  const [query, setQuery] = useState("");
  const [mode, setMode] = useState<"number" | "type">("number");

  const handleSearch = (query: string) => {
    onSearch(query, mode);
  };

  return (
    <header className=" space-x-2 mb-4 p-2 flex gap-2 bg-white">
      <Input
        type="text"
        value={query}
        onChange={(e) => {
          setQuery(e.target.value);
          handleSearch(e.target.value);
        }}
        placeholder={`Search by ${mode}`}
        className="flex-grow"
      />
      <Button onClick={() => setMode(mode === "number" ? "type" : "number")}>
        Switch to {mode === "number" ? "Type" : "Number"}
      </Button>
    </header>
  );
};

export default SearchBar;
