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
    const filteredBlog = blogData.find((item) => item.url === id && item);
    // const tempDiv = document.createElement("div");

    // tempDiv.innerHTML = "";
    // setContent(filteredBlog.content);

    let paragraphs = filteredBlog.content.split("][");

    // let str1 = "";
    // let str2 = "";
    // let v;
    // paragraphs.forEach((paragraphText) => {
    //   paragraphText = paragraphText.replace(/\[|\]/g, "");
    //   // Replace links with anchor tags
    //   paragraphText = paragraphText.replace(
    //     /<([^|]+)\|([^>]+)>/g,
    //     '<a target="_blank" href="$2">$1</a>'
    //   );
    //   paragraphText = paragraphText.replace(
    //     /&lt;([^|]+)\|([^&]+)&gt;/g,
    //     '<a target="_blank" href="$2">$1</a>'
    //   );

    //   paragraphText = paragraphText.replace(/\/n\//g, "<br><br>");
    //   paragraphText = paragraphText.replace(
    //     /\*\*(.*?)\*\*/g,
    //     '<span style="font-size: 28px; font-weight: bold;">$1</span>'
    //   );
    //   v = paragraphText;

    //   // for (let w = 0; w < paragraphText.length; w++) {
    //   // const s = paragraphText.indexOf("{");
    //   // const e = paragraphText.indexOf("}");
    //   // const i = document.createElement("img");
    //   // if (s && e) {
    //   //   for (let i = s + 1; i < e; i++) {
    //   //     str = str + paragraphText[i];
    //   //   }
    //   //   i.setAttribute("src", str);
    //   //   i.setAttribute("alt", "paragraph image");

    //   //   tempDiv.appendChild(i);

    //   // paragraphText.replace(/\{|\}/, "")
    //   // paragraphText.replace(str,"")
    //   // }
    //   // }
    // });

    // // let r = 0;

    // // while (r < v.length) {
    // //   const s = v.indexOf("{"); // finding out index of { and } in the v
    // //   const e = v.indexOf("}");

    // //   if (s && e) {
    // //     r = s;
    // //     // if s and e are present in v
    // //     for (let j = r; j < s; j++) {
    // //       str1 += v[j]; // storing the para that contains the image in st1
    // //     }
    // //     for (let j = s + 1; j < e; j++) {
    // //       str2 += v[j]; // storing the image in the str2
    // //     }
    // //     // appending para that contains the image.
    // //     let para = document.createElement("p");
    // //     para.innerHTML = str1;
    // //     tempDiv.appendChild(para);
    // //     str1 = "";
    // //     // appending the image after the para
    // //     const i = document.createElement("img");
    // //     i.setAttribute("src", str2);
    // //     i.setAttribute("alt", "paragraph image");
    // //     tempDiv.appendChild(i);
    // //     str2 = "";
    // //     v.replace(/\{|\}/, ""); // removing first occurance of { and } from v
    // //     v.replace(str2, ""); // removing first occurance of str2
    // //   } else {
    // //     for (let j = r; j < v.length; j++) {
    // //       str1 += v[j];
    // //       r = j;
    // //     }
    // //     const para = document.createElement("p");
    // //     para.innerHTML = str1;
    // //     tempDiv.appendChild(para);
    // //   }
    // // }

    // const paragraphElement = document.createElement("p");
    // paragraphElement.innerHTML = v;
    // tempDiv.appendChild(paragraphElement);

    // const anchorTags = tempDiv.querySelectorAll("a");
    // anchorTags.forEach((tag) => {
    //   tag.style.color = "#07bc0c"; // Set text color to #07bc0c
    // });

    // const contentElement = document.getElementById("content1");
    // contentElement.innerHTML = "";
    // contentElement.appendChild(tempDiv);

    let str = "";

    const modifiedParagraphs = [];

    paragraphs.forEach((paragraphText) => {
      // Remove square brackets

      let modifiedText = paragraphText.replace(/\[|\]/g, "");

      // Replace links with anchor tags and add color attribute
      modifiedText = modifiedText.replace(
        /<([^|]+)\|([^>]+)>/g,
        '<a target="_blank" href="$2" style="color: #07bc0c;">$1</a>'
      );
      modifiedText = modifiedText.replace(
        /&lt;([^|]+)\|([^&]+)&gt;/g,
        '<a target="_blank" href="$2" style="color: #07bc0c;">$1</a>'
      );

      // Replace '/n/' with line breaks
      modifiedText = modifiedText.replace(/\/n\//g, "<br><br>");

      // Bold text wrapped in '**'
      modifiedText = modifiedText.replace(
        /\*\*(.*?)\*\*/g,
        '<span style="font-size: 28px; font-weight: bold;">$1</span>'
      );

      modifiedText = modifiedText.split("\n\n");
      // Identify and store images
      const imageRegex = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
      let images = [];
      let match;
      while ((match = imageRegex.exec(modifiedText)) !== null) {
        images.push({ src: match[0], alt: "Image" }); // Default alt text
      }

      // Store modified paragraph along with images
      modifiedParagraphs.push({ modifiedText, images });
    });
    console.log(modifiedParagraphs);

    return modifiedParagraphs;
  };

  useEffect(() => {
    axios
      .get(`https://139-59-5-56.nip.io:3443/getBlogList`)
      .then((response) => {
        setBlog(response.data);
        if (response.data) {
          setContent(renderContent(response.data));
        }
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [id]);
  console.log(content);
  return (
    <>
      {/* {blog1 && ( */}
      <>
        <meta
          property="og:image"
          content="https://i.ibb.co/zRkXq2p/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
        />
        {/* <meta name="description" content="securedapp_blog" />
<meta name="keywords" content="Leading DApp startups trust us to secure their blockchain applications" />
<meta name="twitter:card" content="summary_large" /> */}

        <Helmet>
          {/* <title>{blog1.heading}</title>
        <meta name="description" content={blog1.heading} />
        <meta property="og:title" content={blog1.heading} />
        <meta property="og:description" content={blog1.heading} /> */}
          <meta
            property="og:image"
            content="https://i.ibb.co/zRkXq2p/ai-nuclear-energy-background-future-innovation-disruptive-technology.jpg"
          />
          {/* <meta property="og:url" content={`https://securedapp.io/blog/${blog1.url}`} />
        <meta property="og:type" content="article" /> */}
        </Helmet>
      </>
      {/* )} */}
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

                  {/* <div
                    // id="content1"
                    className="text-black pt-1 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-4/6 lg:mx-auto lg:px-0"
                  ></div> */}

                  {/* <div className="text-black pt-1 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-4/6 lg:mx-auto lg:px-0">
                    {content.map((paragraph, index) => (
                      <div key={index}>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: paragraph.modifiedText,
                          }}
                        />
                        {paragraph.images.map((image, imgIndex) => (
                          <img key={imgIndex} src={image.src} alt={image.alt} />
                        ))}
                      </div>
                    ))}
                  </div> */}
                  <div className="text-black pt-1 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-4/6 lg:mx-auto lg:px-0">
                    {content.map((paragraph, index) => (
                      <div key={index}>
                        {paragraph.modifiedText.map((text, textIndex) => {
                          text = text.replace("{", "");
                          text = text.replace("}", "");

                          const imageRegex =
                            /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;
                          const match = imageRegex.exec(text);
                          if (match) {
                            // If image link found, render image
                            const img = { alt: match[1], src: match[0] };
                            return (
                              <React.Fragment key={textIndex}>
                                <div
                                  dangerouslySetInnerHTML={{
                                    __html: text.replace(imageRegex, ""),
                                  }}
                                />
                                <img
                                  style={{
                                    marginTop: 60,
                                    marginBottom: 60,
                                    paddingLeft: 38,
                                    paddingRight: 38,
                                  }}
                                  src={img.src}
                                  alt={img.alt}
                                />
                              </React.Fragment>
                            );
                          } else {
                            // If no image link found, render paragraph text
                            return (
                              <div
                                key={textIndex}
                                dangerouslySetInnerHTML={{ __html: text }}
                              />
                            );
                          }
                        })}
                      </div>
                    ))}
                  </div>
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
