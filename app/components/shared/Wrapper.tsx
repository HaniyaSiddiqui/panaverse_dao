"use client"
import React, { FC } from "react"  // Function component
import { Container } from '@chakra-ui/react';

const Wrapper: FC<{ children: React.ReactNode }> = ({ children }) => {
    return (

        <Container maxW={'8xl'} >
            {children}
        </Container>


    )
}


export default Wrapper
