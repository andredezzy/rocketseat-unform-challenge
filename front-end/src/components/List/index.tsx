import React from "react";

import { Container } from "./styles";

import Table from "../Table";
import Separator from "../Separator";
import TableItem from "../Table/Item";

export default function List() {
    return (
        <Container>
            <Table id="head">
                <thead>
                    <tr>
                        <th>#</th>
                        <Separator
                            width={3}
                            height={19}
                            margin={{ top: 4, right: 7, left: 5 }}
                        />
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
                    <TableItem
                        id={1}
                        name="André Victor"
                        contact="@andredezzy"
                    />
                    <TableItem id={2} name="Erick" contact="@undefined" />
                    <TableItem id={3} name="Eduardo" contact="@undefined" />
                    <TableItem id={4} name="Victor" contact="@undefined" />
                    <TableItem id={5} name="Lucas" contact="@undefined" />
                    <TableItem id={10} name="Lucas" contact="@undefined" />
                    <TableItem id={10} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                    <TableItem id={4} name="Lucas" contact="@undefined" />
                </tbody>
            </Table>
        </Container>
    );
}
