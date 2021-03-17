import React, { useState, useContext } from "react";
import { Header } from "../components";
import * as ROUTES from "../constants/routes";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profiles";
import { FooterContainer } from "./footer";

export function BrowseContainer() {
  const [category, setCategory] = useState("shows");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  const { firebase } = useContext(FirebaseContext);

  const user = {
    displayName: "Steven",
    photoURL: "1",
  };

  return profile.displayName ? (
    <>
      <Header src="joker1" dontShowOnSmallViewPort>
        <Header.Frame>
          <Header.Group>
            <Header.Logo
              to={ROUTES.HOME}
              src="/images/misc/logo.svg"
              alt="Netflix"
            />

            <Header.Link
              active={category === "shows" ? true : false}
              onClick={() => setCategory("shows")}
            >
              TV Shows
            </Header.Link>

            <Header.Link
              active={category === "films" ? true : false}
              onClick={() => setCategory("films")}
            >
              Films
            </Header.Link>
          </Header.Group>

          <Header.Group>
            <Header.Search
              searchTerm={searchTerm}
              setSearchTerm={setSearchTerm}
            ></Header.Search>

            <Header.Profile>
              <Header.Picture src={user.photoURL} />

              <Header.Dropdown>
                <Header.Group>
                  <Header.Picture src={user.photoURL} />
                  <Header.Link>{user.displayName}</Header.Link>
                </Header.Group>

                <Header.Group>
                  <Header.Link onClick={() => firebase.auth().signOut()}>
                    Sign out of Netflix
                  </Header.Link>
                </Header.Group>
              </Header.Dropdown>
            </Header.Profile>
          </Header.Group>
        </Header.Frame>

        <Header.Feature>
          <Header.FeatureCTA>Watch Joker</Header.FeatureCTA>
          <Header.Text>
            Forever alone in a crowd, failed comedian Arthur Fleck seeks
            connection as he walks the streets of Gotham City. Arthur wears two
            masks -- the one he paints for his day job as a clown, and the guise
            he projects in a futile attempt to feel like he's part of the world
            around him.
          </Header.Text>
          <Header.PlayButton>Play</Header.PlayButton>
        </Header.Feature>
      </Header>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
