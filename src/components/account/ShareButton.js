import React from "react";
import webShare from 'react-web-share-api';
import Button from 'components/Button';

const ShareButton = ({ share, isSupported, buttonConf }) => isSupported
    ? <Button onClick={share} {...buttonConf}>Share now!</Button>
    : <span>Web Share not supported</span>;

export default webShare()(ShareButton);