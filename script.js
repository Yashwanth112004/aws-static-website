const blogs = [
  {
    title: "A Few AWS Services That Actually Changed How I Think About Cloud",
    image: "images/blog1.png",
    link: "https://yashwanth11187aws1.hashnode.dev/a-few-aws-services-that-actually-changed-how-i-think-about-cloud"
  },
  {
    title: "How I Approach Learning AWS Architecture (A Simple Framework That Helped Me)",
    image: "images/blog2.png",
    link: "https://yashwanth11187aws1.hashnode.dev/how-i-approach-learning-aws-architecture-a-simple-framework-that-helped-me"
  },
  {
    title: "Amazon EC2: The Service That Taught Me Cloud Is About Decisions, Not Servers",
    image: "images/blog3.png",
    link: "https://yashwanth11187aws1.hashnode.dev/amazon-ec2-the-service-that-taught-me-cloud-is-about-decisions-not-servers"
  }
];

const blogContainer = document.getElementById("blogs");

blogs.forEach(blog => {
  const card = document.createElement("div");
  card.className = "blog-card";

  card.innerHTML = `
    <img src="${blog.image}" alt="${blog.title}">
    <div class="blog-content">
      <h3>${blog.title}</h3>
      <a href="${blog.link}" target="_blank">Read Blog →</a>
    </div>
  `;

  blogContainer.appendChild(card);
});
