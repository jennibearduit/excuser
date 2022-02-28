import { FormControl, Grid, InputLabel, MenuItem, Select } from "@mui/material"

export const categories = [ 
    "Family",
    "Office",
    "Children",
    "College",
    "Party"
    ]

const CategoryButton = (props) => {
    const { isHomePage, category, onClick: handleCategory } = props

    if (isHomePage === false) {
        return(<></>)
    }

    return (
        <>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6} paddingLeft={5} paddingRight={5} paddingTop={10}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-helper-label" className="selectLabel">Category</InputLabel>
                    <Select
                        className="select"
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={category}
                        label="Category"
                        onChange={handleCategory}
                    >
                        {categories.map(val => {
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

export default CategoryButton