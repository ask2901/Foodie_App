import React from 'react'
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DelhiveryMeals from "../Assets/delivery-image.png";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Work() {
  
  const WorkInfoData=[
    {
        image:PickMeals,
        title:"Pick Meals",
        text:"Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi bibendum."
    },
    {
        image:ChooseMeals,
        title:"Pick Meals",
        text:"Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis "
    },
    {
        image:DelhiveryMeals,
        title:"Fast Delhivery",
        text:"Lorem ipsum dolor sit amet consectetur. Maecenas orci et sagittis duis elementum interdum facilisi "
    },
  ];
  
    return(
        <div className='work-section-wrapper'>
            <div className='work-section-top'>
                <p className='primary-subheading'>Work</p>
                <h1 className='primary-heading'>How It Works</h1>
                <p className="primary-text">Lorem ipsum dolor sit amet consectetur. Non tincidunt magna non et elit. Dolor  turpis molestie duimagnis facilisis at fringilla quam.</p>
            </div>
            {/* <div className="work-section-bottom">
                {
                    WorkInfoData.map((data)=>(
                        <div className="work-section-info">
                            <div className="">
                                <img src={data.image} alt="" />
                            </div>
                            <h2>{data.title}</h2>
                            <p>{data.text}</p>
                        </div>
                    ))
                }
            </div> */}
            
            <div className='work-section-bottom'>
                {
                    WorkInfoData.map((data)=>(
                        <Card className='work-section-info' sx={{ width:300 , height:300 ,m:'0.5rem'}} >
                            <CardMedia
                            component='img'
                            style={{width:'auto'}}
                            sx={{
                                height: {
                                    sm: "200px",
                                    xs: "100px",
                                },
                            }}
                            image={data.image}
                            
                            />
                            <CardContent>
                                <Typography variant="h5" >
                                {data.title}
                                </Typography>
                            </CardContent>
                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                {data.text}
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                }
            </div>
            

        </div>
    )
}

export default Work;