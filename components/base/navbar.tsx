import { Input } from "components";
import { useDebounce, useLoading } from "hooks";
import { fetchAPI } from "lib/api";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { navLists } from "store";

const Navbar = () => {
  const router = useRouter();
  const { loading } = useLoading();
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [results, setResults] = useState<object[]>([]);
  const { debouncedValue, isTyping } = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedValue) {
      fetchAPI(
        "http://localhost:5562/api/transaction/search",
        { q: debouncedValue },
        {
          method: "POST",
          body: JSON.stringify({ q: debouncedValue }),
        }
      ).then((res) => {
        setResults((prev) => [...prev, res]);
      });
    }
  }, [debouncedValue]);
  const handleSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  }, []);
  console.log(results);
  return (
    <header className="block fixed top-0 h-[60px] lg:h-nav w-[100%] bg-grey-6 ">
      <div className="container mx-[auto] flex py-[auto] h-[100%] text-primary-1 items-center justify-between">
        <div id="nav-logo" className=" text-[24px] font-[400]">
          {loading ? "Loading" : "Clothes"}
        </div>
        <div id="nav-search-input" className="hidden lg:flex">
          <Input
            id="search-input"
            onChange={handleSearch}
            isTyping={isTyping}
          />
        </div>
        <nav className="hidden lg:flex flex-row space-x-7 text-[16px] text-grey-7 font-[500]">
          {navLists.map((item) => {
            return (
              <ul
                key={item.text}
                className={router.asPath === item.href ? "active" : ""}
              >
                <li>
                  <a href={item.href}>{item.text}</a>
                </li>
              </ul>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
