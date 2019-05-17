import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { User } from "../../store/ducks/users/types";
import { ApplicationState } from "../../store";

import * as UsersActions from "../../store/ducks/users/actions";

import { Container } from "./styles";

import Table from "../Table";
import Separator from "../Separator";
import TableItem from "../Table/Item";

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
                                margin={{ top: 4, right: 7, left: 100 }}
                            />
                            <th>Contato</th>
                        </tr>
                    </thead>
                </Table>

                <Separator
                    id="horizontal-separator"
                    height={3}
                    width={975}
                    margin={{ top: -8 }}
                />

                <Table id="body">
                    <tbody>
                        {users.map(user => (
                            <TableItem
                                key={user._id}
                                name={user.name}
                                contact={user.contact}
                            />
                        ))}
                    </tbody>
                </Table>
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
