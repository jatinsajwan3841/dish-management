import React from "react";
import MenuAppBar from './topbar'
import DishTable from "./table";
import {makeStyles, Container, TextField, Button, Fab } from '@material-ui/core';
import PostAddIcon from '@material-ui/icons/PostAdd';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@material-ui/core';
import { useDispatch, useSelector } from "react-redux";
import { adddish,editdish } from "../actions";

const useStyles = makeStyles(theme => ({
    fab: {
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  }));

export default function Admin(){
    const [id,setid] = React.useState(2)
    const [editvals,seteditvals] = React.useState('')
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const dispatch = useDispatch();
    const classes = useStyles();    
    const dishlist = useSelector(state => state.dishlist);

    const submit = (e) => {
        e.preventDefault();
        setOpen(false);
        const tar = e.target
        const details = {
            id: id,
            dname: tar.name.value,
            dcarb: tar.carb.value,
            dprot: tar.prot.value,
            dfat: tar.fat.value,
            dcal: (4*tar.carb.value)+(4*tar.prot.value)+(9*tar.fat.value)
        }
        dispatch(adddish(details))
        setid(id+1)
    }

    const handleClickOpen = () => {
        setOpen(true);
      };

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
      };
    
    const handleEdit = (e) => {
        e.preventDefault();
        setOpen1(false);
        const tar = e.target
        const editlist = {
            id: parseInt(tar.id.value),
            dname: tar.name.value,
            dcarb: tar.carb.value,
            dprot: tar.prot.value,
            dfat: tar.fat.value,
            dcal: (4*tar.carb.value)+(4*tar.prot.value)+(9*tar.fat.value)
        };
        seteditvals('')
        dispatch(editdish(editlist))
       
    }

    const tempvals = (tid) => {
        setOpen1(true)
        const element = dishlist.findIndex((elem) => elem.id == tid);
        seteditvals(dishlist[element])
    }


    return(<>
        <MenuAppBar/>
        <Container>
            <Fab color="primary" aria-label="add" className={classes.fab} onClick={handleClickOpen}>
                    <PostAddIcon />
                </Fab>

            <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={submit}>
                    <DialogTitle id="form-dialog-title">Add dish</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please enter the details below: 
                    </DialogContentText>
                    
                    <TextField
                            required
                            fullWidth
                            name="name"
                            label="Dish Name" 
                            helperText="Please enter dish name" />
                    <TextField
                            type='number'
                            required
                            name='carb'
                            label="carbohydrates" 
                            inputProps={{ min: "0" }}
                            helperText="Please enter carbohydrates" /> 
                    <TextField
                            type='number'
                            required
                            fullWidth
                            name='prot'
                            label="Protiens" 
                            inputProps={{ min: "0" }}
                            helperText="Please enter protiens" />    
                    <TextField
                            type='number'
                            required
                            name='fat'
                            label="Fats" 
                            inputProps={{ min: "0" }}
                            helperText="Please enter fats" />          
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<PostAddIcon />}
                        type='submit'
                    >
                        Add
                    </Button>
                    </DialogActions>
                    </form>  
                </Dialog>

        {dishlist.length !== 0? 
                    <DishTable dishlist={dishlist} tempvals={tempvals}/>
            
            : <p>No dish added, please add from the floating action button at right end.</p>}

        {editvals !== '' ?
            <Dialog open={open1} onClose={handleClose} aria-labelledby="form-dialog-title">
            <form onSubmit={handleEdit}>
                    <DialogTitle id="form-dialog-title">Edit details</DialogTitle>
                    <DialogContent>
                    <DialogContentText>
                        Please edit the details below: 
                    </DialogContentText>
                    <input type='number' hidden readOnly
                            name='id'
                            value={editvals.id} />
                    <TextField
                            required
                            name="name"
                            label="Dish Name" 
                            helperText="Please enter dish name" 
                            defaultValue={editvals.dname} />
                    <TextField
                            type='number'
                            required
                            name='carb'
                            label="carbohydrates" 
                            inputProps={{ min: "0" }}
                            helperText="Please enter carbohydrates"
                            defaultValue={editvals.dcarb} /> 
                    <TextField
                            type='number'
                            required
                            name='prot'
                            label="Protiens" 
                            inputProps={{ min: "0" }}
                            helperText="Please enter protiens" 
                            defaultValue={editvals.dprot} />    
                    <TextField
                            type='number'
                            required
                            name='fat'
                            label="Fats" 
                            inputProps={{ min: "0" }}
                            helperText="Please enter fats" 
                            defaultValue={editvals.dfat} />          
                    </DialogContent>
                    <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button
                        variant="contained"
                        color="secondary"
                        startIcon={<PostAddIcon />}
                        type='submit'
                    >
                        Edit
                    </Button>
                    </DialogActions>
                    </form>  
                </Dialog>
        : null
        }
        </Container></>
    )
}