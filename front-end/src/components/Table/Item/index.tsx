import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators, Dispatch } from "redux";

import { User } from "../../../store/ducks/users/types";
import { ApplicationState } from "../../../store";

import * as UsersActions from "../../../store/ducks/users/actions";

import { Container } from "./styles";

import Separator from "../../Separator";

import DeleteIcon from "../../../assets/icons/delete-icon.svg";

import api from "../../../services/api";

interface IProps {
    user: User;
}

interface DispatchProps {
    removeItem(_id: string): void;
}

type Props = IProps & DispatchProps;

class Item extends Component<Props> {
    handleRemoveItem = (_id: string) => {
        api.delete("/user/" + _id);

        const { removeItem } = this.props;

        removeItem(_id);
    };

    render() {
        const { user } = this.props;

        return (
            <Container>
                <td>{user.name}</td>
                <Separator width={3} height={19} margin={{ top: 4 }} />
                <td>{user.contact}</td>
                <td id="delete-icon">
                    <img
                        src={DeleteIcon}
                        alt="delete-icon"
                        onClick={() => this.handleRemoveItem(user._id)}
                    />
                </td>
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
)(Item);
