import PostCard from "../components/PostCard";

type Props = { posts: Array<any> };

export default function Index({ posts }: Props) {
  return (
    <div className="grid lg:grid-cols-2 gap-5 p-2">
      {posts.map((post) => (
        <PostCard
          key={post.id}
          image={`https://picsum.photos/id/${post.id}/200/300`}
          title={post.title}
          content={post.body}
        />
      ))}
    </div>
  );
}

export async function getServerSideProps() {
  let posts = await fetch("https://jsonplaceholder.typicode.com/posts").then(
    (res) => res.json()
  );

  return {
    props: {
      posts: posts,
    }, // will be passed to the page component as props
  };
}
