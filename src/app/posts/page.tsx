import Link from "next/link";

export default async function Page() {
  const res = await fetch("https://dummyjson.com/posts");
  const data = await res.json();
  const posts = data.posts;

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All Posts</h1>
      <ul className="text-left">
        {posts.map((post: any) => (
          <li key={post.id} className="mb-4">
            <Link href={`/posts/${post.id}`}>
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
