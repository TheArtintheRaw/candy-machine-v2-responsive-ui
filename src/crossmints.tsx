import Stack from '@mui/material/Stack';
import { CrossmintPayButton } from '@crossmint/client-sdk-react-ui';
import { styled } from '@mui/material';

export const CTAButton = styled(CrossmintPayButton)`
    text-decoration-style:solid;
    text-transform: uppercase;
    `;

export function CrossmintButton() {
    return (
        <Stack direction='row' spacing={2}>
            <CTAButton
                collectionTitle='AlottaSolGiveaways'
                collectionDescription='AlottaSolGiveaways'
                collectionPhoto='https://ipfs.io/ipfs/QmavDFXphG8smFhCmCGP6rdmsaZ7iApMDH7siKNCqZeNU1?filename=0.png'
                clientId='ae4210a1-d0b0-44ab-8792-0be421f90743'
                mintConfig={{ type: 'candy-machine' }}
                paymentMethod='ETH'
                className='my-custom-crossmint-button'
                >
                ETH
            </CTAButton>
            <CTAButton
                collectionTitle='AlottaSolGiveaways'
                collectionDescription='AlottaSolGiveaways'
                collectionPhoto='https://ipfs.io/ipfs/QmavDFXphG8smFhCmCGP6rdmsaZ7iApMDH7siKNCqZeNU1?filename=0.png'
                clientId='ae4210a1-d0b0-44ab-8792-0be421f90743'
                mintConfig={{ type: 'candy-machine' }}
                className='my-custom-crossmint-button'
                >
                USD
            </CTAButton>
        </Stack>
    );
};
