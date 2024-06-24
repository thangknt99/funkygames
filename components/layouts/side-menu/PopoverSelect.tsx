import { clientAction } from '@/configurations/redux/client-slice'
import { handleScrollToElement } from '@/helpers/HandleScrollToElement'
import { useOutsideClick } from '@/hooks/useOutsideHandler'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button, Flex, Image, Popover, PopoverContent, PopoverTrigger, Text } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'

const PopoverSelect = () => {
  const popoverRef = useRef<any>(null)
  const dispatch = useDispatch()

  return (
    <Popover>
      {({ isOpen, onClose }) => {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useOutsideClick(popoverRef, onClose)

        return (<>
          <PopoverTrigger>
            <Button sx={popoverButton}>
              <Flex minW={"100%"} borderRadius={"10px"} alignItems={'center'} justifyContent={'space-between'}>
                <Text fontWeight={400} fontSize={"14px"}>Seamless API</Text>
                <ChevronDownIcon/>    
              </Flex>
            </Button>
          </PopoverTrigger>
          <PopoverContent py={"5px"} _focusVisible={{ outline: "none" }} overflow={"auto"} maxW={"260px"}
            ref={popoverRef}>
            {providers.map((provider, i) => (
              <Flex key={i} borderBottom={"1px solid #e5e5e5"} alignItems={'center'} px={"10px"} transition={".2s"} 
                cursor={'pointer'}
                _hover={{ bgColor: "#eee" }}
                onClick={async () => {
                  await dispatch(clientAction.setCurrentProvider(provider))
                  handleScrollToElement(provider.id)
                  onClose()
                }}>
                <Text px={"10px"}>{provider.name}</Text>
                {provider.img && <Image alt={provider.name} src={provider.img} h={"12px"}/>}
              </Flex>
            ))}
          </PopoverContent>
        </>)
      }}
    </Popover>
  )
}

export default PopoverSelect

const providers = [
  {
    name: "PragmaticPlay",
    id: "pragmaticplay",
    img: ""
  },
  {
    name: "AWC",
    id: "awc",
    img: ""
  },
  {
    name: "Cookfight",
    id: "cookfight",
    img: ""
  },
  {
    name: "MIMI",
    id: "mimi",
    img: ""
  },
  {
    name: "Red Tiger",
    id: "red_tiger",
    img: ""
  },
  {
    name: "PGSoft",
    id: "pgsoft",
    img: ""
  },
  {
    name: "WM Live",
    id: "wm_live",
    img: ""
  },
  {
    name: "JILI",
    id: "jili",
    img: ""
  },
  {
    name: "AdvantPlay",
    id: "advantplay",
    img: ""
  },
  {
    name: "Funky",
    id: "funky",
    img: ""
  },
  {
    name: "Spade Gaming",
    id: "spade_gaming",
    img: ""
  },
 
]

const popoverButton = {
  h:"35px",
  w: "100%",
  color:"#344050",
  border:"1px solid #d8e2ef",
  borderRadius:"0.25rem",
  boxShadow:"inset 0 1px 2px rgba(0, 0, 0, 0.075)",
  lineHeight:1.5,
  _focusVisible: {
    outline: "none"
  }
}