import React, { Component } from "react";
import { withRouter } from "react-router-dom";

import { Container, Bottom } from "./styles";

import api from "../../services/api";

import { Form, Input } from "@rocketseat/unform";
import * as Yup from "yup";

import Button from "../Button";
import RightArrowIcon from "../../assets/icons/right-arrow-icon.svg";

const schema = Yup.object().shape({
    name: Yup.string().required(""),
    contact: Yup.string().required("")
});

class RegisterForm extends Component<any> {
    handleSubmit = async (data: any) => {
        const response = await api.post("/user", data);

        console.log(response);

        this.props.history.push("/#");
    };

    render() {
        return (
            <Container>
                <Form schema={schema} onSubmit={this.handleSubmit}>
                    <Input name="name" label="Nome" placeholder="Jão Bacanão" />
                    <Input
                        name="contact"
                        label="Contato"
                        placeholder="@jaobacanao"
                    />

                    <Bottom>
                        <Button
                            left
                            href="#"
                            text="Voltar"
                            color="#FF9595"
                            hoverColor="#FF8484"
                        />

                        <button type="submit">
                            <span>Cadastrar</span>
                            <img
                                id="right-arrow-icon"
                                src={RightArrowIcon}
                                alt="right-arrow-icon"
                            />
                        </button>
                    </Bottom>
                </Form>
            </Container>
        );
    }
}

export default withRouter(RegisterForm);
