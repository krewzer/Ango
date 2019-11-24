import React from "react";

const Searchbar = () => {
  return (
    <div>
      <form
        action="https://www.google.com/search"
        method="get"
        name="searchform"
        target="_blank"
      >
        <input
          class="searchTerm"
          autocomplete="on"
          name="q"
          placeholder="Search the web to support a good cause "
        />
      </form>
    </div>
  );
};
export default Searchbar;
