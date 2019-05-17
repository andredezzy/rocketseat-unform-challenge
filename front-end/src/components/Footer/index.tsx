import React from "react";

import { Container } from "./styles";

import GitHubIcon from "../../assets/icons/github-icon.svg";

import Link from "../Link";
import Separator from "../Separator";

export default function Footer() {
    return (
        <Container>
            <Link href="http://andredezzy.me" label="www.andredezzy.me" />
            <Separator height={66} margin={{ left: 23, right: 23 }} />
            <Link
                href="http://andredezzy.me"
                id="github-icon"
                img={GitHubIcon}
            />
            <Separator
                height={54}
                rotate={16}
                margin={{ top: 3, right: 17, left: -25 }}
            />
            <Link href="http://github.com/andredezzy" label="andredezzy" />
        </Container>
    );
}
