import React, { useState, useEffect } from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import { getBlogByUrlApi } from "../api/blog";
import Layout from "../layout/Layout";
import HeaderBlog from "../components/Blogs/HeaderBlog";

export default function Blogs() {
  const [blog, setBlog] = useState(null);
  const { query } = useRouter();

  useEffect(() => {
    (async () => {
      const response = await getBlogByUrlApi(query.blog);
      setBlog(response);
    })();
  }, [query]);

  if (!blog) return null;

  return (
    <>
      <Head>
        <title> {blog.title} </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <HeaderBlog blog={blog} />
      </Layout>
    </>
  );
}
