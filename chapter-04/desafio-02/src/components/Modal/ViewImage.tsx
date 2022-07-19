import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
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
  return (
    <Modal isOpen={isOpen} onClose={onClose} size="600px">
      <ModalOverlay />
      <ModalContent
        bg="gray.800"
        display="flex"
        alignItems="center"
        justifyContent="center"
        w="calc(100% / 900px)"
        h="calc(100% / 600px)"
      >
        <ModalBody>
          <Image src={imgUrl} maxW="900px" maxH="600px" />
        </ModalBody>
        <ModalFooter display="flex" justifyContent="flex-start">
          <Link href={imgUrl} color="gray.50">
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
