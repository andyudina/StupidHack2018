import React from "react";
import webShare from 'react-web-share-api';
import Button from 'components/Button';

const ShareButton = ({ share, isSupported, label }) => isSupported
    ? <Button onClick={share} label={label}/>
    : <Button label={label}/>; //this is dummy button that doesn't do anything

export default webShare()(ShareButton);