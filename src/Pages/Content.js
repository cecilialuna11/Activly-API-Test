import React from 'react'
// Import functionality
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import ContentAPI from '../Util/ContentAPI'
import CardMedia from '@material-ui/core/CardMedia';
import Cat from './cat.png'

const useStyles = makeStyles({
    root: {
        minWidth: 300,
        maxWidth: 50,
        margin: 'auto',
        marginTop: 100,
        marginBottom: 100,
        boxShadow: '12px 12px 16px 0 rgba(0, 0, 0, 0.25), -8px -8px 12px 0 rgba(255, 255, 255, 0.4)',
        borderRadius: 10
    },
    button: {
        backgroundColor: '#DFC9CB',
        color: 'white',
        margin: 'auto',
        textAlign: 'center',
        "&:hover": {
            color: '#DFC9CB',
            boxShadow: '-2px -2px 20px rgba(255, 255, 255, 0.8), 2px 2px 20px rgba(0, 0, 0, 0.2)'
        }
    },
    media: {
        height: 140 
    },
    title: {
        fontSize: 14,
        color: '#DFC9CB'
    },
    pos: {
        marginBottom: 12,
    },
});

// Create page to display the cat facts
const Content = () => {
    // Create state variables
    let [responseData, setResponseData] = React.useState('')
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;

    // fetching data
    const fetchData = (e) => {
        e.preventDefault()

        ContentAPI.getData()
        .then((response)=>{
            setResponseData(response.data)
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error)
        })
    }
    Object.values(responseData).map((data) => {
        console.log(data)
    })
    let count = 0;
    return (
        <div >
            <div className="Content">
                    <Card className={classes.root}>
                        <CardContent>
                            <Typography className={classes.title} color="textSecondary" gutterBottom>
                                Cat Facts To Make You Smile
                            </Typography>
                            <CardMedia className={classes.media} image={Cat} title="Cat"> 
                            </CardMedia>
                            <Typography variant="h5" component="h2">
                                C{bull}a{bull}t
                            </Typography>
                            <Typography className={classes.pos} color="textSecondary">
                                The cat is a domestic species of small carnivorous mammal. <i>Click button to load some cat facts.</i>
                            </Typography>
                            {Object.values(responseData).map((data, i) => {
                                count++
                                return (
                                    <Typography variant="body2" component="p" key={i}><br/>{ count + ") " + data.text + "\n" }</Typography>
                                )})}
                        </CardContent>
                        <CardActions>
                            <Button className={classes.button} onClick={ (e) => fetchData(e) } size="small">Cat Facts</Button>
                        </CardActions>
                    </Card>
            </div>
        </div>
    )
}

export default Content
