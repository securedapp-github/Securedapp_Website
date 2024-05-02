import React, { useState, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import NavbarWithBread from "./NavWithBread";
import Footer from "./Footer";
import { Helmet } from "react-helmet";
import Request from "./Request1";
import axios from "axios";

function BlogIndi() {
  const [selectedMenuItem, setSelectedMenuItem] = useState(1);
  const [blog, setBlog] = useState(null);
  const [blog1, setBlog1] = useState(null);

  const [content, setContent] = useState("");
  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  const location = useLocation();
  const { id } = useParams();

  const renderContent = (blogData) => {
    console.log("ID", id);
    const filteredBlog = blogData.find((item) => item.url === id && item);
    console.log("blog ", filteredBlog);
    setBlog1(filteredBlog);
    const tempDiv = document.createElement("div");

    tempDiv.innerHTML = "";
    setContent(filteredBlog.content);

    const paragraphs = filteredBlog.content.split("][");
    paragraphs.forEach((paragraphText) => {
      paragraphText = paragraphText.replace(/\[|\]/g, "");
      // Replace links with anchor tags
      paragraphText = paragraphText.replace(
        /<([^|]+)\|([^>]+)>/g,
        '<a target="_blank" href="$2">$1</a>'
      );
      paragraphText = paragraphText.replace(
        /&lt;([^|]+)\|([^&]+)&gt;/g,
        '<a target="_blank" href="$2">$1</a>'
      );
      paragraphText = paragraphText.replace(/\/n\//g, "<br><br>");
      paragraphText = paragraphText.replace(
        /\*\*(.*?)\*\*/g,
        '<span style="font-size: 28px; font-weight: bold;">$1</span>'
      );

      const paragraphElement = document.createElement("p");
      paragraphElement.innerHTML = paragraphText;
      console.log("para : ", paragraphElement)
      tempDiv.appendChild(paragraphElement);
    });

    const anchorTags = tempDiv.querySelectorAll("a");
    anchorTags.forEach((tag) => {
      tag.style.color = "#07bc0c"; // Set text color to #07bc0c
    });

    const contentElement = document.getElementById("content1");
    if (contentElement) {
      contentElement.innerHTML = "";
      console.log("tempDiv : ", tempDiv)
      contentElement.appendChild(tempDiv);
    } else {
      console.error("Element with ID 'content1' not found");
    }
  };

  useEffect(() => {
    axios
      .get(`https://139-59-5-56.nip.io:3443/getBlogList`)
      .then((response) => {
        setBlog(response.data);
        if (response.data) {
          setTimeout(() => {renderContent(response.data)}, 3000);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [id]);

  return (
    <>
    {blog1 && (
<>
<meta property="og:image" content={`https://securedapp.io/blog/${blog1.url}`} />
<meta name="description" content="securedapp_blog" />
<meta name="keywords" content="Leading DApp startups trust us to secure their blockchain applications" />
<meta name="twitter:card" content="summary_large" />

      <Helmet>
        <title>{blog1.heading}</title>
        <meta name="description" content={blog1.heading} />
        <meta property="og:title" content={blog1.heading} />
        <meta property="og:description" content={blog1.heading} />
        <meta property="og:image" content={blog1.image} />
        <meta property="og:url" content={`https://securedapp.io/blog/${blog1.url}`} />
        <meta property="og:type" content="article" />
      </Helmet>

      </>
    )}
      <NavbarWithBread onItemClick={handleMenuItemClick} />

      <div className="blogindi pt-40 pb-10">
        <div className="mx-auto w-full px-10 lg:px-0 lg:w-4/6 pb-5">
          {blog &&
            blog.map(
              (item, index) =>
                item.url === id && (
                  <span
                    key={index}
                    className="rounded-md mx-1 py-1 text-white xs:text-md md:text-xl font-semibold"
                  >
                    {item.tags}
                  </span>
                )
            )}
        </div>
        <div className="w-full px-10 lg:px-0 lg:w-4/6 mx-auto pb-10 text-4xl text-white font-semibold">
          {blog &&
            blog.map(
              (item, index) =>
                item.url === id && <span key={index}>{item.heading}</span>
            )}
        </div>

        {blog &&
          blog.map(
            (item, index) =>
              item.url === id && (
                <div key={index}>
                  <div className="sm:px-10 lg:px-0">
                    <img
                      src={item.image}
                      alt="not found"
                      className="mx-auto rounded-xl w-4/6 sm:w-full lg:w-4/6 lg:mx-auto"
                    />
                  </div>
                  <div className="w-4/6 mx-auto grid mt-2 pt-3 sm:grid-cols-1">
                    <div className="text-right text-lg text-white my-auto pe-5">
                      {item.data}
                    </div>
                    <div
                      className=""
                      style={{
                        borderTop: "1px solid white",
                        marginTop: "20px",
                      }}
                    ></div>
                  </div>

                  <div
                    id="content1"
                    className="text-black pt-1 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-4/6 lg:mx-auto lg:px-0"
                  ></div>
                </div>
              )
          )}

      </div>
      <div>
        <Request />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}

export default BlogIndi;
