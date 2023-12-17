import "./TwitterFollowCard.css";

export function TwitterFollowCard({name, userName, isFollowing}) {
    const imgSrc = `https://unavatar.io/${userName}`;
    return (
    <article className="tw-followCard">
      <header className="tw-followCard-userInfo">
        <img
          className="tw-followCard-userInfo-avatar"
          src={imgSrc}
          alt="Avatar"
        />
        <div className="tw-followCard-userInfo-data">
          <strong>{name}</strong>
          <span>{userName}</span>
        </div>
      </header>
      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );

}