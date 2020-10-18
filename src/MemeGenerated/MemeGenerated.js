import React, { useState } from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import styles from './styles.module.css';
import {useClipboard} from 'use-clipboard-copy';

export const MemeGenerated = () => {

  const [copied, setCopied] = useState(false);

  const history = useHistory();
  const location = useLocation();
  const url = new URLSearchParams(location.search).get('url');
  const clipboard = useClipboard();

  const copyLink = () => {
    clipboard.copy(url);
    setCopied(true);
  };

  return(
    <div className={styles.container}>

      <button onClick={() => history.push('/')} className={styles.home}>
        Return Home & Make New Memes!
      </button>

      {/* {url && <img alt="Url" src={url} />} */}

      <button onClick={copyLink} className={styles.copy}>
        {copied ? 'Link Copied! Paste URL and Enjoy the Meme!' : 'Copy Link'}
      </button>

    </div>
  );
};
