/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const STYLES = {
    small: {
        height: 8,
        padding: 0,
        radius: 4,
    },
    medium: {
        height: 12,
        padding: 0,
        radius: 4,
    },
    large: {
        height: 16,
        padding: 4,
        radius: 8,
    },
};

const ProgressBar = ({ value, size }) => {
    const styles = STYLES[size];

    if (!styles) {
        throw new Error(`Unknow size passed to ProgressBar: ${size}`);
    }

    return (
        <Wrapper
            role='progressbar'
            aria-valuenow={value}
            aria-valuemin='0'
            aria-valuemax='100'
            style={{ '--padding': styles.padding + 'px', '--radius': styles.radius + 'px' }}
        >
            <VisuallyHidden>{value}%</VisuallyHidden>
            <BarWrapper>
                <Bar
                    style={{
                        '--width': value + '%',
                        '--height': styles.height + 'px',
                    }}
                ></Bar>
            </BarWrapper>
        </Wrapper>
    );
};

const BarWrapper = styled.div`
    border-radius: 4px;
    /* Trim corners when progressbar is empty or full */
    overflow: hidden;
`;

const Wrapper = styled.div`
    background: ${COLORS.transparentGray15};
    box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
    border-radius: var(--radius);
    /* Trim corners when progressbar is empty or full */
    overflow: hidden;
    padding: var(--padding);
`;

const Bar = styled.div`
    width: var(--width);
    height: var(--height);
    background: ${COLORS.primary};
`;

export default ProgressBar;
