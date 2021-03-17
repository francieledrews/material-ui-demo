import React from 'react';
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia, CssBaseline, Grid, Toolbar, Container, Button } from '@material-ui/core';
import { PhotoCamera } from '@material-ui/icons';

import TextComponent from './TextComponent';
import Text from '../text.json';

import useStyles from '../styles';

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function App() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />

      <header>
        <AppBar position="relative">
          <Toolbar>
            <PhotoCamera className={classes.icon} />
            <Typography variant="h6">
              <TextComponent text={Text.Header.header_title} />
            </Typography>
          </Toolbar>
        </AppBar>
      </header>

      <main>
        <div className={classes.container}>
          <Container maxWidth="sm">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              <TextComponent text={Text.Main_Top.heading_top} />
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              <TextComponent text={Text.Main_Top.subtext_top} />
            </Typography>
            <div className={classes.buttons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    <TextComponent text={Text.Main_Top.button1_top} />
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    <TextComponent text={Text.Main_Top.button2_top} />
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia
                    className={classes.cardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title"
                  />
                  <CardContent className={classes.cardContent}>
                    <Typography gutterBottom variant="h5">
                      <TextComponent text={Text.Main_Cards.card_heading} />
                    </Typography>
                    <Typography>
                      <TextComponent text={Text.Main_Cards.card_text} />
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      <TextComponent text={Text.Main_Cards.button1_card} />
                    </Button>
                    <Button size="small" color="primary">
                      <TextComponent text={Text.Main_Cards.button2_card} />
                    </Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </main>

      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          <TextComponent text={Text.Footer.footer_heading} />
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary">
          <TextComponent text={Text.Footer.footer_text} />
        </Typography>
      </footer>

    </React.Fragment>
  );
}