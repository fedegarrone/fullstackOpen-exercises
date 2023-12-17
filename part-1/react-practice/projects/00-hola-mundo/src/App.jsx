import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  const formatUserName = (userName) => `@${userName}`

  return (
    <section className="app">
      <TwitterFollowCard
        userName={'gralramos'}
        formatUserName={formatUserName}>
        General Ramos
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="ricardo">
        Ricardo Libertonto
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="lalu_b"
        initialIsFollowing>
        Laila Barberan
      </TwitterFollowCard>
      <TwitterFollowCard
        formatUserName={formatUserName}
        userName="lu_magadan">
        Luciana Magadan
      </TwitterFollowCard>
    </section>
  );
}
