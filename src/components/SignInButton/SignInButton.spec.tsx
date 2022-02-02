import { render, screen } from "@testing-library/react";
import { mocked } from "jest-mock";
import { useSession } from "next-auth/client";
import { SignInButton } from ".";

jest.mock("next-auth/client");

describe("SignInButton component", () => {
  const useSessionMocked = mocked(useSession);

  it("renders correctly when user is not authenticated", () => {
    useSessionMocked.mockReturnValueOnce([null, false]);

    const { getByText } = render(<SignInButton />);

    expect(getByText("Sign in with Github")).toBeInTheDocument();
  });

  it("renders correctly when user is authenticated", () => {
    useSessionMocked.mockReturnValueOnce([
      {
        user: {
          name: "John Doe",
          email: "john.doe@example.com",
        },
        expires: "fake-expires",
      },
      false,
    ]);

    const { getByText } = render(<SignInButton />);

    expect(getByText("John Doe")).toBeInTheDocument();
  });
});
