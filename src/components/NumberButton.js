import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"

export const numbers = [ "1", "2", "3", "4", "5", "6", "7", "8", "9", "10" ]

export const NumberButton = (props) => {
    const { isHomePage, numExcuses, onClick: handleNumExcuses } = props

    if (isHomePage === false) {
        return(<></>)
    }

    return (
        <>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6} paddingLeft={5} paddingRight={5} paddingTop={10}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label" className="selectLabel">Number of Excuses</InputLabel>
                    <Select
                        className="select"
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={numExcuses}
                        label="Category"
                        onChange={handleNumExcuses}
                    >
                        {numbers.map(val => {
                            return (
                                <MenuItem key={val} value={val}>{val}</MenuItem>
                            )
                        })}
                    </Select>
                </FormControl>
            </Grid>
            <Grid item xs={0} md={3}></Grid>
        </>
    )
}

export default NumberButton