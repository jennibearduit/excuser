import { Button, Grid } from "@mui/material"

const SubmitButton = (props) => {
    const { isHomePage, onClick: handleSubmit } = props

    if (isHomePage === false) {
        return(<></>)
    }
    
    return (
        <>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6} paddingLeft={5} paddingRight={5} paddingTop={10}>
                <Button variant="contained" onClick={handleSubmit} color="secondary">
                    Submit
                </Button>
            </Grid>
            <Grid item xs={0} md={3}></Grid>
        </>
    )
}

export default SubmitButton