import { Toast } from "@chakra-ui/react"

function useShowToast() {
    const showToast = (title , description , status , duration , isClosable) => {
        Toast({
            title: title,
            description : description,
            status : status,
            duration : duration ?? "2000",
            isClosable : isClosable ?? true,
        })
    }
  return showToast
}

export default useShowToast