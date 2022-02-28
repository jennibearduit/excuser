import { Grid } from "@mui/material"
import { useEffect, useState } from "react"
import CategoryButton from "./CategoryButton"
import ExcuseBox from "./ExcuseBox"
import NumberButton from "./NumberButton"
import SubmitButton from "./SubmitButton"
import excuseService from '../services/phrases'
import HomePageButton from "./HomePageButton"


const WelcomePage = () => {
    const [isHomePage, toggleHomePage] = useState(true)
    const [category, setCategory] = useState("")
    const [numExcuses, setNumExcuses] = useState("")
    const [excuses, setExcuses] = useState([])

    const handleCategory = (event) => {
        event.preventDefault()
        setCategory(event.target.value)
        console.log("This category is clicked:", event.target.value)
    }

    const handleNumExcuses = (event) => {
        event.preventDefault()
        setNumExcuses(event.target.value)
        console.log("This number is clicked:", event.target.value)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!category && !numExcuses) {
            window.alert("Please fill in the category and number of excuses!");
            return;
        } else if (!category) {
            window.alert("Please fill in the category!");
            return;
        } else if (!numExcuses) {
            window.alert("Please fill in the number of excuses!");
            return;
        }

        toggleHomePage(false)
    }

    const handleHomePage = (event) => {
        event.preventDefault()
        setExcuses([])
        toggleHomePage(true)
    }

    const hook = () => {
        if (!isHomePage) {
            excuseService
                .getExcuse(category, numExcuses)
                .then(res => {
                    setExcuses(res)
                })
        } else {
            // do nothing
        }
    }

    useEffect(hook, [isHomePage])

    return (
        <Grid container alignItems="center">
            <Grid item xs={12} md={12} paddingLeft={2} paddingRight={2} paddingTop={10}>
                <h1 className="appName">Excuse Generator!</h1>
            </Grid>
            <CategoryButton isHomePage={isHomePage} category={category} onClick={handleCategory} />
            <NumberButton isHomePage={isHomePage} numExcuses={numExcuses} onClick={handleNumExcuses} />
            <SubmitButton isHomePage={isHomePage} onClick={handleSubmit} />
            {excuses.map(element => {
                return (
                    <ExcuseBox isHomePage={isHomePage} excuse={element.excuse} key={element.id}/>
                )
            })}
            <HomePageButton isHomePage={isHomePage} onClick={handleHomePage} />
        </Grid>
    )
}

export default WelcomePage
