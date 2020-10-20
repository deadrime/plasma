import React from 'react';

import { IconAsset } from '../IconRoot';

export const SkipNext: React.FC<IconAsset> = (props) => (
    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M16.988 12.153l-6.501 4.774a2.61 2.61 0 01-4.154-2.103V5.276a2.61 2.61 0 014.154-2.103l6.501 4.774a2.61 2.61 0 010 4.206zm-9.232 2.671a1.186 1.186 0 001.888.956l6.501-4.774a1.185 1.185 0 000-1.912l-6.5-4.774a1.186 1.186 0 00-1.889.956v9.548z"
            fill="currentColor"
        />
        <rect x={18.006} y={2.98} width={1.66} height={14.232} rx={0.83} fill="currentColor" />
    </svg>
);