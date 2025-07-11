
async function getPost(id) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return post;
}

export default async function PostPage({ params }) {
  const post = await getPost(params.id);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p className="text-gray-800">{post.body}</p>
      <a href="/" className="text-blue-500 hover:underline mt-4 inline-block">
        بازگشت به صفحه اصلی
      </a>
    </div>
  );
}