import { useContext } from 'react';
import { JSONContext } from '@/context/JSONContext';


export function useFireboltJSON() {
    const fireboltJSON = useContext(JSONContext);

    return fireboltJSON;
}