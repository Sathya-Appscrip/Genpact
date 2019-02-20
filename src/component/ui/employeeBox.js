import React from 'react'
import { Image } from 'office-ui-fabric-react/lib/Image';
import Wrapper from '../../hoc/wrapper';

const EmpCard = (props) => (
    <Wrapper>

        <div className="empCard">
            <Image
                src={props.data.avatar}
                alt={props.data.first_name}
                width={"100%"}
                height={300}
                onError={(e) => { e.target.onerror = null; e.target.src = 'http://placehold.it/350x150' }}
            />
            <div className="clear-fix card-info">
                <p> <b>Id :</b> {props.data.id}</p>
            </div>
            <div className="clear-fix card-info w-auto">
                <p> <b>Name :</b> {props.data.first_name + ' ' + props.data.last_name}</p>
            </div>
        </div>


    </Wrapper>
)


export default EmpCard;