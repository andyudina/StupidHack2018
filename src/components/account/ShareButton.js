import React from "react";
import webShare from 'react-web-share-api';
import Button from 'components/Button';

const ShareButton = ({ share, isSupported, buttonConf }) => isSupported
    ? <Button onClick={share} {...buttonConf}/>
    : <Button {...buttonConf}/>; //this is dummy button that doesn't do anything

export default webShare()(ShareButton);