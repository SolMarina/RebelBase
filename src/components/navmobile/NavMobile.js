import React from 'react';
import styles from '../navmobile/NavMobile.module.css'
import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    formControl: {
        margin: theme.spacing(1),
        minWidth: 120,
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },

}));

const NavResponsive = (props) => {
    const classes = useStyles();
    const [state, setState] = React.useState({
        age: '',
        name: 'hai',
    });

    const handleChange = (event) => {
        const name = event.target.name;
        setState({
            ...state,
            [name]: event.target.value,
        });
    };
    return (
        <div className={styles.navb}>
            <div className={styles.buttonBox}>
                <button className={styles.button1}>All</button>
            </div>
            <div className={styles.selectBox}>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        value={state.age}
                        onChange={handleChange}
                        name="age"
                        className={classes.selectEmpty}
                        inputProps={{ 'aria-label': 'age' }}
                    >
                        {props.details.map(item => { return (<option value={item}> {item}</option>) })}

                    </NativeSelect>

                </FormControl>

            </div>
        </div>

    );
}
export default NavResponsive