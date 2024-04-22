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
  const [content, setContent] = useState("");
  const handleMenuItemClick = (index) => {
    setSelectedMenuItem(index);
  };

  const location = useLocation();
  const { id } = useParams();

  const renderContent = (blogData) => {
    const filteredBlog = blogData.find((item) => item.url === id && item);
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
      tempDiv.appendChild(paragraphElement);
    });

    const anchorTags = tempDiv.querySelectorAll("a");
    anchorTags.forEach((tag) => {
      tag.style.color = "#07bc0c"; // Set text color to #07bc0c
    });

    const contentElement = document.getElementById("content1");
    contentElement.innerHTML = "";
    contentElement.appendChild(tempDiv);
  };

  useEffect(() => {
    axios
      .get(`https://139-59-5-56.nip.io:3443/getBlogList`)
      .then((response) => {
        setBlog(response.data);
        if (response.data) {
          renderContent(response.data);
        }
      })
      .catch((error) => {
        console.error("Error fetching blog post:", error);
      });
  }, [id]);

  return (
    <>
      <Helmet>
        <title>
          SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends
        </title>
        <meta
          name="description"
          content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more."
        />
      </Helmet>
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

// import React, { useState, useEffect } from "react";
// import { useLocation, useParams } from "react-router-dom";
// import NavbarWithBread from "./NavWithBread";
// import Footer from "./Footer";
// import { Helmet } from "react-helmet";
// import Request from "./Request1";
// import axios from "axios";

// function BlogIndi() {
//   const [selectedMenuItem, setSelectedMenuItem] = useState(1);
//   const [blog, setBlog] = useState(null);
//   const [content, setContent] = useState("");
//   const handleMenuItemClick = (index) => {
//     setSelectedMenuItem(index);
//   };

//   const location = useLocation();
//   const { id } = useParams();

//   const renderContent = (blogData) => {
//     const filteredBlog = blogData.find((item) => item.url === id && item);
//     const tempDiv = document.createElement("div");

//     tempDiv.innerHTML = "";
//     console.log(filteredBlog, "filteredBlog");
//     setContent(filteredBlog.content);
//     const paragraphs = filteredBlog.content.split("][");
//     paragraphs.forEach((paragraphText) => {
//       paragraphText = paragraphText.replace(/\[|\]/g, "");
//       paragraphText = paragraphText.replace(/\/n\//g, "<br><br>");
//       paragraphText = paragraphText.replace(
//         /\*\*(.*?)\*\*/g,
//         '<span style=" font-size: 28px; font-weight: bold;">$1</span>'
//       );

//       const paragraphElement = document.createElement("p");
//       paragraphElement.innerHTML = paragraphText;
//       tempDiv.appendChild(paragraphElement);
//     });

//     const anchorTags = tempDiv.querySelectorAll("a");
//     anchorTags.forEach((tag) => {
//       tag.style.color = "#07bc0c"; // Set text color to #07bc0c
//     });

//     const contentElement = document.getElementById("content1");
//     contentElement.innerHTML = "";
//     contentElement.appendChild(tempDiv);
//   };
//   useEffect(() => {
//     axios
//       .get(`https://139-59-5-56.nip.io:3443/getBlogList`)
//       .then((response) => {
//         setBlog(response.data);
//         renderContent(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching blog post:", error);
//       });
//   }, [id]);
//   console.log(blog);

//   return (
//     <>
//       <Helmet>
//         <title>
//           SecureDApp Blog: Expert Insights on NFTs, Token Sales & DeFi Trends
//         </title>
//         <meta
//           name="description"
//           content="Dive into SecureDApp's blog for insightful articles on NFTs, token sales, and the future of DeFi. Stay updated with the latest trends, guides, and expert opinions on blockchain, tokenomics, and more."
//         />
//       </Helmet>
//       <NavbarWithBread onItemClick={handleMenuItemClick} />

//       <div className="blogindi pt-40 pb-10">
//         <div className="mx-auto w-full px-10 lg:px-0 lg:w-4/6 pb-5">
//           {blog &&
//             blog.map(
//               (item, index) =>
//                 item.url === id && (
//                   <span
//                     key={index}
//                     className="rounded-md mx-1 py-1 text-white xs:text-md md:text-xl font-semibold"
//                   >
//                     {item.tags}
//                   </span>
//                 )
//             )}
//         </div>
//         <div className="w-full px-10 lg:px-0 lg:w-4/6 mx-auto pb-10 text-4xl text-white font-semibold">
//           {blog &&
//             blog.map(
//               (item, index) =>
//                 item.url === id && <span key={index}>{item.heading}</span>
//             )}
//         </div>
//         {blog &&
//           blog.map(
//             (item, index) =>
//               item.url === id && (
//                 <div>
//                   <div className="sm:px-10 lg:px-0">
//                     <img
//                       src={item.image}
//                       alt="not found"
//                       className="mx-auto rounded-xl w-4/6 sm:w-full lg:w-4/6 lg:mx-auto"
//                     />
//                   </div>
//                   <div className="w-4/6 mx-auto grid mt-2 pt-3 sm:grid-cols-1">
//                     <div className="text-right text-lg text-white my-auto pe-5">
//                       {item.data}
//                     </div>
//                     <div
//                       className=""
//                       style={{
//                         borderTop: "1px solid white",
//                         marginTop: "20px",
//                       }}
//                     ></div>
//                   </div>

//                   <div
//                     id="content1"
//                     key={content}
//                     className="text-black pt-1 text-xl text-white sm:pt-10 w-full px-10 sm:w-full sm:px-10 lg:w-4/6 lg:mx-auto lg:px-0"
//                   ></div>
//                 </div>
//               )
//           )}
//       </div>
//       <div>
//         <Request />
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </>
//   );
// }

// export default BlogIndi;
