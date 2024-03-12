import { redirect } from "next/navigation";
import React from "react";
interface SearchPageProps {
  searchParams: {
    term: string;
  };
}
const SearchPage = async ({ searchParams }: SearchPageProps) => {
  const { term } = searchParams;

  if (!term) {
    redirect("/");
  }
  return <div>{term}</div>;
};

export default SearchPage;
