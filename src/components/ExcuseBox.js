import { Card, Grid } from "@mui/material"

export const ExcuseBox = (props) => {
    const { excuse, isHomePage } = props

    if (isHomePage === true) {
        return(<></>)
    }

    return (
        <>
            <Grid item xs={0} md={3}></Grid>
            <Grid item xs={12} md={6} paddingLeft={5} paddingRight={5} paddingTop={10}>
                <Card variant="outlined" className="centerText">
                    <h4>{excuse}</h4>
                </Card>
            </Grid>
            <Grid item xs={0} md={3}></Grid>
        </>
    )
}

export default ExcuseBox