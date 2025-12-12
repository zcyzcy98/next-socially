"use client";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { updateHotNews } from "@/actions/hotNews.action";
import { HotNews } from "@prisma/client";

export default function HotNewsCard({ hotNews }: { hotNews: HotNews[] }) {
  const handleReadNews = async (news: HotNews) => {
    window.open(news.url, "_blank");
    const res  = await updateHotNews(news.id, {
      readNumber: news.readNumber + 1,
    });
    console.log(res);
  };
  return (
    <Card>
      <CardHeader>
        <CardTitle>Hot News</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {hotNews.map((news) => (
            <div
              key={news.id}
              onClick={() => handleReadNews(news)}
              className="flex gap-2 items-center justify-between w-full"
            >
              <div className="flex items-center gap-1 w-full relative">
                <text className="text-sm text-primary font-medium cursor-pointer w-[70%] truncate">
                  {news.title}
                </text>
                <text className="text-sm text-primary font-medium cursor-pointer w-[30%] text-center">
                  {news.readNumber}
                </text>
                <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-blue-600 scale-x-0 hover:scale-x-100 transition-transform origin-left"></span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
