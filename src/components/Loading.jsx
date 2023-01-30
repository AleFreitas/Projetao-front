import React from 'react';
import styled from 'styled-components';
import { ThreeDots } from 'react-loader-spinner';

export default function Loading() {
    return (
        <LoadingDiv>
            <ThreeDots
                height="80"
                width="80"
                radius="9"
                color="#FFFFFF"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClassName=""
                visible={true}
            />
        </LoadingDiv>
    );
}

const LoadingDiv = styled.div`
    width:100%;
    height:100%;
    display:flex;
    align-items: center;
    justify-content: center;
`;