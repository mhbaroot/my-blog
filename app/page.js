
import Link from "next/link";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return posts.slice(0, 5); 
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">وبلاگ من</h1>
      <div className="grid gap-4">
        {posts.map((post) => (
          <div key={post.id} className="border p-4 rounded shadow">
            <Link href={`/posts/${post.id}`}>
              <h2 className="text-xl font-semibold hover:underline">{post.title}</h2>
            </Link>
            <p className="text-gray-600">{post.body.slice(0, 100)}...</p>
          </div>
        ))}
      </div>
    </div>
  );
}