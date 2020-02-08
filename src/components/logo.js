import React from 'react';

const Logo=({parent})=>{
    return (
        <div className={parent+'__logo'}>
            <div className={parent+'__logo__img'}></div>
            <div className={parent+'__logo__text'}>
                <div >Centro de massagem</div>
                <div >Magia</div>
            </div>
        </div>
    );
};

export default Logo;