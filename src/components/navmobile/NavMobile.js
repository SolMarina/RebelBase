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
   
    const selectOptions = props.details.filter(item => item !== 'All');;

    return (
        <div className={styles.navb}>
            <div className={styles.buttonBox}>
                <button className={styles.button1} onClick={props.onClick()}>All</button>
            </div>
            <div className={styles.selectBox}>
                <FormControl className={classes.formControl}>
                    <NativeSelect
                        onChange={props.onChange()}
                        className={classes.selectEmpty}
                        
                    >
                        {selectOptions.map(item => { return (<option key={item} value={item}> {item}</option>) })}

                    </NativeSelect>

                </FormControl>

            </div>
        </div>

    );
}
export default NavResponsive