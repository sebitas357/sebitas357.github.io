import React, { useState, useEffect } from "react";
import Head from "next/head";
import { Spinner } from "reactstrap";
import { size } from "lodash";
import Layout from "../layout/Layout";
import { getLastBlogsApi } from "../api/blog";
import BlogList from "../components/BlogList/BlogList";

export default function Blog() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    (async () => {
      const response = await getLastBlogsApi(50);
      if (size(response) > 0) setBlogs(response);
      else setBlogs([]);
    })();
  }, []);

  return (
    <>
      <Head>
        <title>Blog</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Layout>
        <div className="section-title mt-4 mb-4">
          <h2>Nuestro Blog</h2>
        </div>
        {!blogs && (
          <div>
            <Spinner color="primary" className="spinner_blog" />{" "}
          </div>
        )}
        {blogs && size(blogs) == 0 && (
          <div>
            <h3>No hay Blogs</h3>
          </div>
        )}
        {size(blogs) > 0 && <BlogList blogs={blogs} />}
      </Layout>
    </>
  );
}
