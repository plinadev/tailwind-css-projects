import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "codewithsahand",
      userImage: "https://i.pravatar.cc/150?img=11",
      postImage:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
      caption: "Just another day building something cool!",
    },
    {
      id: "2",
      username: "dev_jane",
      userImage: "https://i.pravatar.cc/150?img=12",
      postImage:
        "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80",
      caption: "Enjoying the sunset 🌅",
    },
  ];

  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
}

export default Posts;
