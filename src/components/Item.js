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
                </div>
                <div className="item__desc">
                        <p>{desc}</p>
                </div>
                
                <div className="item__lowerthird">

                    <div className="item__buttons">
                    <Button imp='primary' text={LeftBtnTxt} link={LeftBtnLink}/>
                    {twoButtons &&(
                    <Button imp='secondary' text={righBtnTxt} link={righBtnLink}/>
                        
                    )}
                    </div>


                    <div className='item__expand'>
                    {first &&(
                        <ExpandMoreIcon/>
                    )}
                    </div>
                    
                </div>
                
            </div>
        </div>
    )
}

export default Item;
