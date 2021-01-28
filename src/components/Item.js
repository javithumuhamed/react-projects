import React from 'react'
import Button from './Button.js'
import './item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const Item = ({title,desc,descLink,backgroundImage,LeftBtnTxt,LeftBtnLink,righBtnTxt,righBtnLink,first,twoButtons}) => {
    return (
        <div className='item' style={{
            backgroundImage:`url(${backgroundImage})`,
        }}>
            <div className="item__container">
                <div className="item__text">
                    <p>{title}</p>
                    <div className="item__desc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item__lowerthird">

                    <div className="item__buttons">
                    <Button imp='primary' text={LeftBtnTxt} link={LeftBtnLink}/>
                    </div>
                    {twoButtons &&(
                    <Button imp='secondary' text={righBtnTxt} link={righBtnLink}/>
                        
                    )}
                    {first &&(
                        <ExpandMoreIcon/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Item;
