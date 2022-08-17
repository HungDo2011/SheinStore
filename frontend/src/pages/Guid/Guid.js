import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { GuidData } from 'Data/GuidData/GuidData';
import GuidForm from 'components/GuidForm/GuidForm';

function Guid() {
    let location = useLocation();
    const [hashLink, setHashLink] = useState('');

    // eslint-disable-next-line
    useEffect(() => {
        setHashLink(location.pathname.replace('/guid/', ''));
    });

    return (
        <>
            {GuidData.map((guid, index) => {
                if (guid.hashLink === hashLink) {
                    return <GuidForm key={index} guid={guid.data} />;
                }
            })}
        </>
    );
}

export default Guid;
