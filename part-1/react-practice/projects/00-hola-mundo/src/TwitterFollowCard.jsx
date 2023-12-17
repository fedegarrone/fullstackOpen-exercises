import { useState } from "react";
import "./TwitterFollowCard.css";

export function TwitterFollowCard({children, userName = 'unknown', initialIsFollowing}) {
  const imgSrc = `https://unavatar.io/${userName}`;
  const formatUserName = (userName) => `@${userName}`;
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleClick = () => {
    setIsFollowing(!isFollowing)
  }

  const text = isFollowing ? 'Following' : 'Follow'
  const buttonClassName = isFollowing
    ? "tw-followCard-button is-following"
    : "tw-followCard-button";
    return (
      <article className="tw-followCard">
        <header className="tw-followCard-userInfo">
          <img
            className="tw-followCard-userInfo-avatar"
            src={imgSrc}
            alt="Avatar"
          />
          <div className="tw-followCard-userInfo-data">
            <strong>{children}</strong>
            <span>{formatUserName(userName)}</span>
          </div>
        </header>
        <aside>
          <button className={buttonClassName} onClick={handleClick}>
            <span className="tw-followCard-button-text">{text}</span>
            <span className="tw-followCard-button-unFollow">
              Unfollow
            </span>
          </button>
        </aside>
      </article>
    );

}