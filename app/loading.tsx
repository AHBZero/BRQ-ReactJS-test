import { Box, CircularProgress } from '@chakra-ui/react'

export default function Loading() {
    return (
        <div className='loading-container'>
            <CircularProgress m={'auto'} isIndeterminate/>
        </div>
    );
}