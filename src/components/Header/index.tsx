import Image from "next/image";

import { SignInButton } from "../SignInButton";

import logoImage from "../../../public/images/logo.svg";

import styles from "./styles.module.scss";
import React from "react";
import ActiveLink from "../ActiveLink";

export const Header = () => {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.headerContent}>
        <Image src={logoImage} alt="ig.news" />

        <nav>
          <ActiveLink href="/" activeClassName={styles.active}>
            <a>Home</a>
          </ActiveLink>
          <ActiveLink href="/posts" activeClassName={styles.active}>
            <a>Posts</a>
          </ActiveLink>
        </nav>

        <SignInButton />
      </div>
    </header>
  );
};
