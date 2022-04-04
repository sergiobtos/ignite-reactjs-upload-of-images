import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
  ModalHeader,
  ModalCloseButton,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return(
    <Modal isOpen={isOpen} onClose={onClose} size="5x1" isCentered>
      <ModalOverlay />
      <ModalContent p={0} bgColor="pGray.800" maxW="56rem">
      <ModalHeader>Picture Preview</ModalHeader>
          <ModalCloseButton />
        <ModalBody p={0}>
          <Image src={imgUrl}/>
        </ModalBody>
        <ModalFooter justifyContent="flex-start">
          <Link href={imgUrl}>Open original</Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
