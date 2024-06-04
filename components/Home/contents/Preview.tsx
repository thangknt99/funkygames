/* eslint-disable react/no-unescaped-entities */
import HeadingText from '@/components/utils/HeadingText'
import { Flex } from '@chakra-ui/react'
import styles from '../css/ContentDisplay.module.css'
import React from 'react'
import ApiIntegration from './ApiIntegration'
import ErrorCode from './ErrorCode'
import Authentication from './Authentication'
import Overview from './Overview'
import Introduction from './Introduction'
import ChangeLog from './ChangeLog'

const Preview = () => {
  
  return (
    <>
      <div className={styles.section}>
        <Flex>
          <div className={styles.inside_section}>
            <HeadingText mb={"0.5em"}>Funky API Document for GameProvider</HeadingText>
            <p>
              Download OpenAPI specification: <a target='_blank' href='https://funkygames-specs.com/api/swagger/GameProvider/en/swagger.json' className={styles.download_button}>Download</a>
            </p>
          </div>
        </Flex>
      </div>
      <Introduction/>
      <Overview/>
      <Authentication/>
      <ErrorCode/>
      <ChangeLog/>
      <ApiIntegration/>
    </>
  )
}

export default Preview