import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { User } from "../../store/ducks/users/types";
import { ApplicationState } from "../../store";

import * as UsersActions from "../../store/ducks/users/actions";

import { Container, Bottom } from "./styles";

import Table from "../Table";
import Separator from "../Separator";
import TableItem from "../Table/Item";

import Button from "../Button";

interface StateProps {
    users: User[];
}

interface DispatchProps {
    loadRequest(): void;
}

type Props = StateProps & DispatchProps;

class List extends Component<Props> {
    componentDidMount() {
        const { loadRequest } = this.props;

        loadRequest();
    }

    render() {
        const { users } = this.props;

        return (
            <Container>
                <Table id="head">
                    <thead>
                        <tr>
                            <th>Nome</th>
                            <Separator
                                width={3}
                                height={19}
                                margin={{ top: 4, right: 7, left: 380 }}
                            />
                            <th>Contato</th>
                        </tr>
                    </thead>
                </Table>

                <Separator height={3} width={989} margin={{ top: -8 }} />

                <Table id="body">
                    <tbody>
                        {users.map(user => (
                            <TableItem key={user._id} user={user} />
                        ))}
                    </tbody>
                </Table>

                <Separator
                    id="footer-separator"
                    height={3}
                    width={989}
                    margin={{ top: 10, bottom: 15 }}
                />

                <Bottom>
                    <span>{users.length} usuário(s) cadastrados</span>
                    <Button
                        right
                        text="Cadastrar novo usuário"
                        href="#register"
                        color="#95C0FF"
                        hoverColor="#7EB2FF"
                    />
                </Bottom>
            </Container>
        );
    }
}

const mapStateToProps = (state: ApplicationState) => ({
    users: state.users.data
});

const mapDispatchToProps = (dispatch: Dispatch) =>
    bindActionCreators(UsersActions, dispatch);

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(List);
