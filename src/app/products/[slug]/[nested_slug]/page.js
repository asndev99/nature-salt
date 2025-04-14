import React from "react";

const page = async ({ params }) => {
  const { nested_slug } = await params;
  return <div>{nested_slug}</div>;
};

export default page;
