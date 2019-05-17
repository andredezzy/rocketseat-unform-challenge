import React from "react";

import { Container } from "./styles";

import RocketseatLaunchLogo from "../../assets/rocketseat-launch-logo.png";
import UnformLogo from "../../assets/unform-logo.png";

import Separator from "../Separator";

export default function Header() {
    return (
        <Container>
            <a
                href="https://rocketseat.com.br"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={RocketseatLaunchLogo} alt="rocketseat-launch-logo" />
            </a>

            <Separator height={127} />

            <a
                href="https://github.com/Rocketseat/unform"
                target="_blank"
                rel="noopener noreferrer"
            >
                <img src={UnformLogo} alt="unform-logo" />
            </a>
        </Container>
    );
}
