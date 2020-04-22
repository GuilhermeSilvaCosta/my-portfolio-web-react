import React, { useState, useEffect, useRef } from 'react';
import { Typography } from '@material-ui/core';

const Signpost = props => {
    
    const { banners = [], variant, timeout } = props;

    const [banner, setBanner] = useState('');
    const [count, setCount] = useState(0);
    const [delay, setDelay] = useState(1);
    const [fullBanner, setFullBanner] = useState('');

    const index = useRef(0);
    const isCancelled = useRef(false);

    useEffect(() => {
        if (fullBanner === '') {
            if (count < banners.length) {
                setFullBanner(banners[count]);
                setCount(count+1);
                setDelay(5)
            } else setCount(0)
        }
    }, [count, fullBanner, banners])

    useEffect(() => {
        if (fullBanner !== banner) {
            setTimeout(() => {
                if (!isCancelled.current) setBanner(b => b+=fullBanner[index.current])
                index.current+=1
            }, timeout)
        } else if (banner) {
            setTimeout(() => {
                index.current-=1;
                if (!isCancelled.current) setBanner(b => { setDelay(1); setFullBanner(b => b.substring(0,index.current)); return b.substring(0,index.current)} );
            }, timeout * delay);
        }
    }, [fullBanner, banner, timeout, delay])

    useEffect(() => {
        return () => isCancelled.current = true;
    }, [])

    return (
        <Typography variant={variant}>{banner}</Typography>
    )
}

export default Signpost;