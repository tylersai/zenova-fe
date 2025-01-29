"use client";

import classNames from "classnames";
import React, { useState } from "react";
import styles from "./SearchInput.module.scss";
import { useRouter } from "next/navigation";

const SearchInput = () => {
  const router = useRouter();
  const [search, setSearch] = useState("");

  const goSearch = () => {
    if (search && search.trim()) {
      router.push("/search?q=" + encodeURIComponent(search.trim()));
    }
  };

  return (
    <form
      className={classNames("input-group", styles.root)}
      onSubmit={(e) => {
        e.preventDefault();
        goSearch();
      }}
    >
      <input
        type="text"
        className="form-control"
        placeholder='Try searching "quality speakers"'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="input-group-text btn-sm text-secondary">
        <i className="bi bi-search"></i>
      </button>
    </form>
  );
};

export default SearchInput;
