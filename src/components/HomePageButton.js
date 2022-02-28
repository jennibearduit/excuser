import { Button, Grid } from "@mui/material"

const HomePageButton = (props) => {
    const { isHomePage, onClick: handleHomePage } = props

    if (isHomePage === true) {
        return(<></>)
    }
    
    return (
        <>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6} paddingLeft={5} paddingRight={5} paddingTop={10} paddingBottom={10}>
                <Button variant="contained" onClick={handleHomePage} className="buttons" color="secondary">
                    Back to Home
                </Button>
            </Grid>
            <Grid item xs={0} md={3}></Grid>
        </>
    )
}

export default HomePageButton