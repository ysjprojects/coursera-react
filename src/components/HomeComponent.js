import React from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';
function RenderCard({ item, isLoading, errmsg }) {
    if (isLoading) {
        return (
            <Loading />
        );
    }
    else if (errmsg) {
        return (
            <h4>{errmsg}</h4>
        )
    }
    else {
        return (
            <Card>
                <CardImg src={baseUrl + item.image} alt={item.name} />
                <CardBody>
                    <CardTitle>{item.name}</CardTitle>
                    {item.designation ? <CardSubtitle>{item.designation}</CardSubtitle> : null}
                    <CardText>
                        {item.description}
                    </CardText>
                </CardBody>
            </Card>)
    }


}

function Home(props) {
    return (
        <div className="container">
            <div className='row align-items-start'>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.dishes} isLoading={props.dishesLoading} errmsg={props.dishesErrmsg} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.promotions} isLoading={props.promosLoading} errmsg={props.promosErrmsg} />
                </div>
                <div className='col-12 col-md m-1'>
                    <RenderCard item={props.leaders} />
                </div>
            </div>
        </div>
    )
}

export default Home;