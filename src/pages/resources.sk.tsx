import React, { FC } from "react"
import { Typography, Box, Grid } from "@material-ui/core"

import SEO from "../components/seo"
import { HelpCard } from "./help.en"

const ResourcesPage: FC = () => (
  <>
    <SEO title="Všeobecné informácie o elektronických podpisoch" />

    <Box m={3} mt={4}>
      <Typography variant="h4" component="h1">
        Všeobecné informácie o elektronických podpisoch
      </Typography>

      <Box mt={4}>
        <Grid container spacing={3} direction="row">
          <Grid item sm={6} md={4}>
            <HelpCard
              title="Zákon Európskej Únie"
              image="eu-flag.jpg"
              link="/sk/resources/eu-law"
            >
              Zákon Európskej Únie týkajúci sa elektronických podpisov.
            </HelpCard>
          </Grid>
        </Grid>
      </Box>
    </Box>
  </>
)

export default ResourcesPage
