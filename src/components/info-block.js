import React from 'react';

const InfoBlock=({parent, name, img, title, text})=>{
    return (
        <div className={parent+'__'+name}>
            <img src={img} alt={name}></img>
            <h2>{title}</h2>
            {text.map((t, i)=><p key={i}>{t}</p>)}
        </div>
    );
};

export default InfoBlock;