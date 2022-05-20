import { useContext } from 'react';
import { JSONContext } from '@/contexts/JSONContext';


export function useFireboltJSON() {
    const fireboltJSON = useContext(JSONContext);

    return fireboltJSON;
}