import { useState } from "react";
import { TwitterFollowCard } from "./TwitterFollowCard.jsx";

const users = [
  {
    userName: 'gralramos',
    name: 'General Ramos',
    isFollowing: true
  },
  {
    userName: 'ricardo',
    name: 'Ricardo Libertonto',
    isFollowing:false
  },
  {
    userName: 'lalu_b',
    name: 'Laila Barberan',
    isFollowing:true
  },
  {
    userName: 'lu_magadan',
    name: 'Luciana Magadan',
    isFollowing:false
  }
]

export function App() {


  return (
    <section className="app">
      {
        users.map(user => {
          const { userName, name, isFollowing } = user
          return (
            <TwitterFollowCard key={userName} userName={userName} initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}
