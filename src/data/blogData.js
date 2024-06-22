const blogData = [
    {
      title: "My Journey into Web Development",
      img: "https://imgv3.fotor.com/images/slider-image/A-clear-close-up-photo-of-a-woman.jpg",
      author: "Emily Turner",
      authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
      content: "I started my journey into web development five years ago. Initially, it was a hobby, but it quickly became a passion. I remember the first time I built a simple HTML page and how exhilarating it felt to see my creation come to life on the browser..."
    },
    {
      title: "Travel Diaries: Exploring Japan",
      img: "https://i0.wp.com/www.touristjapan.com/wp-content/uploads/2023/04/fujiyoshida-view-scaled-e1680427764989.jpg?resize=2000%2C800&ssl=1",
      author: "Michael Brown",
      authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
      content: "Japan has always been at the top of my travel list. Last year, I finally got the opportunity to visit. From the bustling streets of Tokyo to the serene temples of Kyoto, every moment was a new adventure. Here are some highlights from my trip..."
    },
    {
      title: "Cooking at Home: My Favorite Recipes",
      img: "https://i.ytimg.com/vi/65IsG7jOoes/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDbtfIXGEARy7wqFxo2lm5VQ6woIA",
      author: "Sophia Martinez",
      authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
      content: "Cooking has always been a therapeutic activity for me. Over the years, I've gathered a collection of recipes that are both delicious and easy to make. In this post, I'll share some of my favorites, including my go-to pasta dish and a family-favorite dessert..."
    },
    {
      title: "The Benefits of Yoga and Meditation",
      img: "https://fitpage.in/wp-content/uploads/2021/05/Article_Banner-1.jpg",
      author: "David Lee",
      authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
      content: "Yoga and meditation have been transformative practices in my life. They have not only improved my physical health but also my mental well-being. In this post, I'll discuss the benefits I've experienced and share some tips for beginners..."
    },
    {
      title: "Gardening Tips for Beginners",
      img: "https://www.ugaoo.com/cdn/shop/articles/shutterstock_139759228_eb50c5c7-3293-4358-aac1-03e0ef67a383.jpg?v=1661768042",
      author: "Rachel Green",
      authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
      content: "Gardening can be a rewarding and relaxing hobby. When I first started, I made many mistakes but learned a lot along the way. In this post, I'll share some beginner-friendly tips and tricks to help you start your own garden..."
    },
    {
        title: "Building a Mobile App with React Native",
        img: "https://i.morioh.com/210522/5c686471.webp",
        author: "John Smith",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "React Native is a powerful framework for building mobile applications using React. In this post, I'll walk you through the basics of setting up a React Native project and building your first mobile app..."
      },
      {
        title: "Exploring the Python Ecosystem",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhiOWL4GpYI8PPH54yf6oQGdyFrSJNDnnPDw&s",
        author: "Lisa Brown",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "Python is a versatile programming language with a rich ecosystem of libraries and frameworks. In this post, I'll introduce you to some of the most popular Python libraries and how they can be used to solve various problems..."
      },
      {
        title: "Understanding JavaScript Closures",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkBZ-fgXyXSXpVSKV21yAvG1YyuxwwJnjw3w&s",
        author: "Chris Wilson",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "JavaScript closures are an important concept that every JavaScript developer should understand. In this post, I'll explain what closures are, how they work, and provide some examples of how to use them in your code..."
      },
      {
        title: "The Basics of Docker for DevOps",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiH-uUHwwBZCWmilKRd5TxLSsRS0FMpWvT5ErTOVUZ2nha5xARXfKbOJoBQhRTJK19PZw&usqp=CAU",
        author: "Karen Lee",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "Docker is an essential tool for modern DevOps practices. It allows developers to create, deploy, and run applications in isolated containers. In this post, I'll cover the basics of Docker and how to get started with containerizing your applications..."
      },
      {
        title: "Machine Learning with TensorFlow",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZJZLAQ8JrafS7_RBaaI066xVsmKqOne3ptQ&s",
        author: "James White",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "TensorFlow is a popular open-source library for machine learning developed by Google. In this post, I'll introduce you to TensorFlow and guide you through building your first machine learning model..."
      },
      {
        title: "Design Principles for Effective UI/UX",
        img: "https://insights.daffodilsw.com/hubfs/Allen/How%20UX%20Design%20Adds%20Value%20to%20a%20Business.jpg",
        author: "Emma Davis",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "Creating a user-friendly interface is crucial for the success of any digital product. In this post, I'll discuss key design principles that can help you create effective UI/UX designs that enhance usability and user satisfaction..."
      },
      {
        title: "Getting Started with GraphQL",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5GVJW5pJVyuPsNOfwVD9UzJdfrYhVucJevg&s",
        author: "Daniel Clark",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "GraphQL is a query language for APIs that allows clients to request only the data they need. In this post, I'll introduce you to GraphQL and show you how to get started with building a GraphQL API and consuming it in your applications..."
      },
      {
        title: "Introduction to Cybersecurity",
        img: "https://www.simplilearn.com/ice9/free_resources_article_thumb/Is_Cybersecurity_Hard_to_Learn.jpg",
        author: "Sarah Taylor",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "Cybersecurity is essential for protecting digital assets from unauthorized access, attacks, and data breaches. In this post, I'll provide an overview of cybersecurity principles, common threats, and best practices for staying secure online..."
      },
      {
        title: "Remote Work: Tips for Productivity and Well-being",
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1hmfVHhHm6kikggUVjqvy2Poxs5gYUpgcUA&s",
        author: "Mark Johnson",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "Remote work has become increasingly popular, but it comes with unique challenges. In this post, I'll share tips for maintaining productivity, fostering communication, and promoting well-being while working remotely..."
      },
      {
        title: "Building a Mobile App with React Native",
        img: "https://st.depositphotos.com/1049680/61456/i/450/depositphotos_614565006-stock-photo-adorable-girl-business-worker-using.jpg",
        author: "John Smith",
        authorLink: "https://www.linkedin.com/showcase/aws-training-&-certification/posts/?feedView=all",
        content: "React Native is a powerful framework for building mobile applications using React. In this post, I'll walk you through the basics of setting up a React Native project and building your first mobile app..."
      },
  ];
  
  export default blogData;
  
  