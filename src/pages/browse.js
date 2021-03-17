import React from "react";
import { BrowseContainer } from "../containers/browse";
import { useContent } from "../hooks";

export default function Browse() {
  const { films } = useContent("films");
  const { series } = useContent("series");

  return <BrowseContainer />;
}
