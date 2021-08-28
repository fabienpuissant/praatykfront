import { Grid } from '@material-ui/core';
import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import { Parallax, Background } from 'react-parallax';

const useStyles = makeStyles((theme) => ({
    button: {
      background: "white",
      "&:hover": {
          transitionDuration: "0.5s",
          background: 'orange',
          opacity: "0.9",
          color: "white"
        },
      },
      backgroundImage: {
        opacity: 0.8,
      
      }
  }));

export default function ParrallaxContainer() {

  const classes = useStyles();

  const [firstSectionImage, setFirstSectionImage] = useState("./assets/img/menageInterieur.jpg")


    const communStyle = {
        padding: 30,
        fontSize: "1.2em",
        position: "absolute",
        transform: "translate(-50%,-50%)",
        cursor: "pointer",
        borderRadius: 20,        
    }

  const insideStyles1 = {
      top: "25%",
      left: "25%",
    };

  const insideStyles2 = {
      top: "25%",
      left: "75%",
    };

    const insideStyles3 = {
      top: "75%",
      left: "25%",
    };

    const insideStyles4 = {
      top: "75%",
      left: "75%",
    };

    const handleMouseEnterFirstSection = (option) => {
      switch(option){
        case "repassage":
          setFirstSectionImage("./assets/img/repassage.jpg")
          break
        case "menageExte":
          setFirstSectionImage("./assets/img/menageExterieur.jpg")
          break
        case "menageInte":
          setFirstSectionImage("./assets/img/menageInterieur.jpg")
          break
        case "desinfection":
            setFirstSectionImage("./assets/img/desinfection.jpg")
            break
        default:
          setFirstSectionImage("./assets/img/menageInterieur.jpg")
            break
      }
    }


  return (
      <Grid container>
          <Parallax
              blur={0} 
              strength={200}
              style={{
                  width: "100%",
              }}
              >
                <Background>
                  <img src={firstSectionImage} alt="background" className={classes.backgroundImage}/>
                 </Background>
                  <div style={{ height: 500 }}>
                      <div style={{...communStyle, ...insideStyles1}} className={classes.button} onMouseEnter={() => {handleMouseEnterFirstSection("menageInte")}}>Ménage intérieur</div>
                      <div style={{...communStyle, ...insideStyles2}} className={classes.button} onMouseEnter={() => {handleMouseEnterFirstSection("repassage")}}>Repassage</div>
                      <div style={{...communStyle, ...insideStyles3}} className={classes.button} onMouseEnter={() => {handleMouseEnterFirstSection("menageExte")}}>Ménage extérieur</div>
                      <div style={{...communStyle, ...insideStyles4}} className={classes.button} onMouseEnter={() => {handleMouseEnterFirstSection("desinfection")}}>Désinfection</div>
                  </div>
          </Parallax>
          
          <Parallax
              blur={0} 
              bgImage="./assets/img/imageAcceuil2.jpg" 
              bgImageAlt="cleaning image" 
              strength={200}
              style={{
                  width: "100%"
              }}
              >
                  <div style={{ height: 500 }}>
                      <div style={{...communStyle, ...insideStyles1}} className={classes.button}>Electricien</div>
                      <div style={{...communStyle, ...insideStyles2}} className={classes.button}>Plombier</div>
                      <div style={{...communStyle, ...insideStyles3}} className={classes.button}>Chauffagiste</div>
                      <div style={{...communStyle, ...insideStyles4}} className={classes.button}>Paysagiste</div>
                  </div>
          </Parallax>

          
      </Grid>
  )
}
