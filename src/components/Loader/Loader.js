/* C/RENDER COMPONENTE DE CARGA LOADING EJ 3 51:00 A 52 */

import { Spinner } from 'react-bootstrap'
 
 export const Loader = () => {
    return ( 
        <Spinner animation='border' role='status'>
                        <span className='visually-hidden'>Loading. . .</span>
        </Spinner>
     );
}
 

