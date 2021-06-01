import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SelectProfileContainer } from "../../containers/profiles";

jest.mock("react-router-dom");

describe("<Profiles />", () => {
  it("renders the <Profile />", () => {
    const user = {
      displayName: "Steven",
      photoURL: "1",
    };
    const setProfile = jest.fn();
    const { getByTestId } = render(
      <SelectProfileContainer user={user} setProfile={setProfile} />
    );

    fireEvent.click(getByTestId("select-user-profile"));
    expect(setProfile).toHaveBeenCalled();
  });
});
