import React from 'react';

import { IconAsset } from '../IconRoot';

export const Picture: React.FC<IconAsset> = (props) => (
    <svg width="1.5rem" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M17.68 5H6.32c-.639 0-1.03 0-1.324.019-.28.016-.343.043-.335.04a1 1 0 00-.602.602c.003-.008-.024.055-.04.335C4 6.29 4 6.68 4 7.32v8.266l2.94-2.94a1.5 1.5 0 012.12 0l1.94 1.94 3.94-3.94a1.5 1.5 0 012.12 0l2.94 2.94V7.32c0-.639 0-1.03-.019-1.324-.016-.28-.043-.343-.04-.335a1 1 0 00-.602-.602 1.61 1.61 0 00-.335-.04A24.96 24.96 0 0017.68 5zM9.586 16L8 14.414l-3.937 3.937a1 1 0 00.598.59c.008.003.086.026.335.04C5.29 19 5.68 19 6.32 19h.266l3-3zm8.094 3H9.414L16 12.414l4 4v.266c0 .639 0 1.03-.019 1.324a1.606 1.606 0 01-.04.335 1 1 0 01-.602.602c.008-.003-.055.024-.335.04-.295.018-.686.019-1.324.019zM2.177 4.984C2 5.476 2 6.09 2 7.32v9.36c0 1.23 0 1.844.177 2.336a3 3 0 001.807 1.807C4.476 21 5.09 21 6.32 21h11.36c1.23 0 1.844 0 2.336-.177a3 3 0 001.807-1.807C22 18.524 22 17.91 22 16.68V7.32c0-1.23 0-1.844-.177-2.336a3 3 0 00-1.807-1.807C19.524 3 18.91 3 17.68 3H6.32c-1.23 0-1.844 0-2.336.177a3 3 0 00-1.807 1.807z"
            fill="currentColor"
        />
    </svg>
);
