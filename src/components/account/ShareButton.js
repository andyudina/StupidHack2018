import React from "react";
import webShare from 'react-web-share-api';
import Button from 'components/Button';

const ShareButton = ({ showUrl, share, isSupported, label }) => isSupported
    ? <Button onClick={share} label={label}/>
    : <Button onClick={showUrl} label={label}/>; //this is dummy button that doesn't do anything

export default webShare()(ShareButton);