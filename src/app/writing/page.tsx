import { BlogPosts } from "app/components/posts";

export const metadata = {
  title: "writing",
  description: "Writing on life and decentralised ecosystems.",
};

export default function Page() {
  return (
    <section>
      <h1 className="font-semibold text-2xl mb-8 tracking-tighter">
        {metadata.title}
      </h1>
      <BlogPosts />
    </section>
  );
}
