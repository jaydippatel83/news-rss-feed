import React, { useEffect, useState } from "react"; 
import Parser from 'rss-parser';
import axios from "axios"; 


import { makeStyles } from '@material-ui/core/styles'; 
import Card from '@material-ui/core/Card'; 
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions'; 
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors'; 
import Button from '@material-ui/core/Button';
import CardActionArea from '@material-ui/core/CardActionArea';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

function News() { 
    const classes = useStyles();
    const [coinList, setCoinList] = useState([]);
    const baseUrl = "https://cointelegraph.com/rss/tag/bitcoin";

    let parser = new Parser();
    const corsUrl = "https://api.rss2json.com/v1/api.json?rss_url=";
    useEffect(() => {
        axios.get(`${corsUrl}${baseUrl}`).then((feed) => {
            setCoinList(feed.data.items)
        });
    }, [])

    const [expanded, setExpanded] = React.useState(false);

    const handleNavigate = (link) => {
         console.log(link);
    };

    console.log(coinList, "coinlist");

    return (
        coinList.map((news, i) => {
            return <div key={i} className="col-lg-4 p-4">
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            height="140"
                            image={news.thumbnail}
                            title="Contemplative Reptile"
                        />
                        <CardContent>
                            <Typography className="text-left" gutterBottom variant="h5" component="h2">
                                {news.title}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {news.description}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Share
                        </Button>
                        <Link style={{textDecoration:"none"}} href={news.link} size="small" color="primary" target='_blank'>
                            Read More
                        </Link>
                    </CardActions>
                </Card>
            </div>
        })
    )

}

export default News;