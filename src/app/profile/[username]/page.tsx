import { getProfileByUsername } from "@/actions/profile.action";
import React from "react";

export async function generateMetadata({
  params,
}: {
  params: { username: string };
}) {
  const user = await getProfileByUsername(params.username);
  if (!user) return;

  return {
    title: `${user.name ?? user.username}`,
    description: user.bio || `Check out ${user.username}'s profile.`,
  };
}

export default function ProfilePage({
  params,
}: {
  params: { username: string };
}) {
  console.log(params);
  return <div>ProfilePage</div>;
}
