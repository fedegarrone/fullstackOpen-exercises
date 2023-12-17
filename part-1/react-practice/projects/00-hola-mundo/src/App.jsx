import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

export function App() {
  return (
    <div className="app">
      <TwitterFollowCard name="General Ramos" userName="gralramos" isFollowing="true"/>
      <TwitterFollowCard name="Ricardo" userName="ricardo" isFollowing="false"/>
      <TwitterFollowCard name="Laila Barberan" userName="lalu_b" isFollowing="false"/>
      <TwitterFollowCard name="Luciana Magadan" userName="lu_magadan" isFollowing="false"/>
    </div>
  );
}
