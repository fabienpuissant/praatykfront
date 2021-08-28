import { Grid } from '@material-ui/core'
import React from 'react'
import CustomAppBar from "../components/AppBar/CustomAppBar"
import ParallaxContainer from "../components/ParallaxContainer/ParallaxContainer"
import { createTheme, ThemeProvider } from '@material-ui/core/styles'

export default function Home() {

    const theme = createTheme({
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <CustomAppBar />
                </Grid>
                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                    <ParallaxContainer />
                </Grid>

                <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
                <div style={{height: "200vh"}} />
                </Grid>
            </Grid>
        </ThemeProvider>
    )
}
