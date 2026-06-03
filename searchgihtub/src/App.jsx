import { gql } from "@apollo/client";
import { useLazyQuery } from "@apollo/client/react";
import { useState } from "react";

const GET_USER = gql`
  query GetUser($login: String!) {
    user(login: $login) {
      login
      name
      bio
      avatarUrl
    }
  }
`;

export default function App() {
  const [username, setUsername] = useState("");

  const [getData, { data, loading, error }] = useLazyQuery(GET_USER);

  function search(value) {
    getData({
      variables: {
        login: value,
      },
    });
  }

  return (
    <div className="page">
      <h1 className="heading">GitHub User Search</h1>
      <p className="subheading">Search any GitHub username</p>

      <div className="search-row">
        <input
          className="input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="e.g. torvalds"
          onKeyDown={(e)=>{
            if(e.key === "Enter"){
              search(username)
            }
          }}
        />
        <button className="btn" onClick={() => search(username)}>
          Search
        </button>
      </div>

      {loading && <p className="status">Loading...</p>}
      {error && <p className="error">{error.message}</p>}

      {data?.user && (
        <div className="card">
          <img
            className="avatar"
            src={data.user.avatarUrl}
            alt={data.user.login}
          />
          <div className="info">
            <h2 className="name">{data.user.name}</h2>
            <p className="login">@{data.user.login}</p>
            {data.user.bio && <p className="bio">{data.user.bio}</p>}
          </div>
        </div>
      )}
    </div>
  );
}