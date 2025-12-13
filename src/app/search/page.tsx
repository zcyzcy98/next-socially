import { getPostsByKeyWords } from "@/actions/post.action";
import { getDbUserId } from "@/actions/user.action";
import PostCard from "@/components/PostCard";
import SearchCard from "@/components/SearchCard";
import { currentUser } from "@clerk/nextjs/server";

type Posts = Awaited<ReturnType<typeof getPostsByKeyWords>>;
type Post = Posts[number];

export default async function Page({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const user = await currentUser();
  if (!user) return;

  const { q } = await searchParams;
  const posts = await getPostsByKeyWords(q);

  const dbUserId = await getDbUserId();

  return (
    <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 ">
      <div className="lg:col-span-6">
        <div className="w-full pb-4 flex items-center justify-center">
          <SearchCard q={q} />
        </div>
        <div className="space-y-6">
          {posts.map((post: Post) => {
            return <PostCard key={post.id} post={post} dbUserId={dbUserId} />;
          })}
        </div>
      </div>
    </div>
  );
}
