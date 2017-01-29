import React, {Component} from "react";
import {List, ListItem} from "material-ui/List";
import Subheader from "material-ui/Subheader";
import Divider from "material-ui/Divider";
import Paper from "material-ui/Paper";
import "./MyList.css";
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from "material-ui/Table";


class MyList extends Component {
    render() {
        let xml = <ListItem>
            <Paper className="list-item">
                <img src="http://image.aladin.co.kr/product/1286/96/coversum/8956372284_1.jpg"/>
                <div className="flex-column">

                    <Table>
                        <TableHeader
                            displaySelectAll={false}>
                            <TableHeaderColumn >.</TableHeaderColumn>
                            <TableHeaderColumn>상</TableHeaderColumn>
                            <TableHeaderColumn>중</TableHeaderColumn>
                            <TableHeaderColumn>하</TableHeaderColumn>
                        </TableHeader>
                        <TableBody
                            displayRowCheckbox={false}>
                            <TableRow>
                                <TableRowColumn>yes24</TableRowColumn>
                                <TableRowColumn>2000</TableRowColumn>
                                <TableRowColumn>1500</TableRowColumn>
                                <TableRowColumn>1000</TableRowColumn>
                            </TableRow>
                            <TableRow>
                                <TableRowColumn>aladin</TableRowColumn>
                                <TableRowColumn>2000</TableRowColumn>
                                <TableRowColumn>1500</TableRowColumn>
                                <TableRowColumn>1000</TableRowColumn>
                            </TableRow>
                        </TableBody>
                    </Table>
                </div>
            </Paper>
        </ListItem>;
        return (
            <List>
                <Subheader>test list</Subheader>
                {xml}
                {xml}
                <Divider inset={true}/>
            </List>
        );
    }
}

export default MyList;
