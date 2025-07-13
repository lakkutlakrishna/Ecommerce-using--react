import React from "react";
import "./styles/Blog.css";

const Blog = () => {
  const blogPosts = [
    {
      date: "10",
      month: "NOV",
      title: "Aestibulum Ipsum A Ornare Car",
      author: "Ytcdemo",
      comments: 2,
      views: 1,
      image: "https://storage.googleapis.com/a1aa/image/EODUBoI-i0Frq1SdkjWal4VJlyW4JH4549onKpOd9ww.jpg",
    },
    {
      date: "12",
      month: "NOV",
      title: "Aestibulum Ipsum A Ornare Lectus",
      author: "Ytcdemo",
      comments: 0,
      views: 1,
      image: "https://storage.googleapis.com/a1aa/image/xbgbdiKEag2TdUyHgPT_Z6KtpJnAumCOrRktyLf8PBM.jpg",
    },
    {
      date: "15",
      month: "NOV",
      title: "Biten Demonstraverunt Lector",
      author: "Ytcdemo",
      comments: 0,
      views: 1,
      image: "https://storage.googleapis.com/a1aa/image/vfA6fS7ZuuhmFWRwtRCf65_DBXwpNK8oDT_7YnAsfM0.jpg",
    },
  ];

  return (
    <div className="blog-container">
      <h2 className="blog-title">FROM OUR BLOG</h2>
      <div className="blog-grid">
        {blogPosts.map((post, index) => (
          <div className="blog-card" key={index}>
            <div className="blog-date">
              <span className="date">{post.date}</span>
              <span className="month">{post.month}</span>
            </div>
            <img src={post.image} alt={post.title} className="blog-image" />
            <div className="blog-content">
              <h3 className="blog-heading">{post.title}</h3>
              <div className="blog-meta">
                <i className="fas fa-user"></i> {post.author}
                <i className="fas fa-comments"></i> {post.comments} Comments
                <i className="fas fa-eye"></i> {post.views} View
              </div>
              <a href="#" className="blog-read-more">Read more</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
