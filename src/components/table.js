import {Container,IconButton } from '@material-ui/core';
import {Table, TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { useDispatch } from "react-redux";
import { deletedish } from "../actions";


export default function DishTable(props){
    const dispatch = useDispatch();
    return(
        <TableContainer component={Container} style={{marginTop: 15}}>
                    <Table size="small" stickyHeader={true}>
                    <TableHead>
                        <TableRow>
                        <TableCell align="center"><b>Dish Name</b></TableCell>
                        <TableCell align="center"><b>Carbohydrates(g)</b></TableCell>
                        <TableCell align="center"><b>Protiens(g)</b></TableCell>
                        <TableCell align="center"><b>Fats(g)</b></TableCell>
                        <TableCell align="center"><b>Calories</b></TableCell>
                        <TableCell align="center"><b>edit/delete</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.dishlist.map((row) => (
                        <TableRow key={row.id}>
                            <TableCell component="th" scope="row" align="center">{row.dname}</TableCell>
                            <TableCell align="center">{row.dcarb}</TableCell>
                            <TableCell align="center">{row.dprot}</TableCell>
                            <TableCell align="center">{row.dfat}</TableCell>
                            <TableCell align="center">{row.dcal}</TableCell>
                            <TableCell align="center">
                                    <IconButton 
                                        color="primary"
                                        size="small"
                                        onClick={() => props.tempvals(row.id)}
                                    ><EditIcon/>
                                    </IconButton>
                                    <IconButton 
                                        color="secondary"
                                        size="small"
                                        onClick={() => dispatch(deletedish(row.id))}
                                    ><DeleteIcon/>
                                    </IconButton>
                            </TableCell>
                        </TableRow>
                        ))}
                    </TableBody>
                    </Table>
                    </TableContainer>
    )
}