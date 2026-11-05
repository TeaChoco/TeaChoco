import { FaHeart } from 'react-icons/fa6';
import type { CharacterItem } from '~/types/favorites';
import CharacterDetailsCard from './CharacterDetailsCard';
import { Modal, ModalBody, ModalHeader } from '~/components/custom/Modal';

interface CharacterDetailsModalProps {
    isOpen: boolean;
    onClose: () => void;
    character: CharacterItem;
}

export default function CharacterDetailsModal({
    isOpen,
    onClose,
    character,
}: CharacterDetailsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='2xl'>
            <ModalHeader
                onClose={onClose}
                title={character.name}
                icon={<FaHeart aria-hidden='true' />}
            />
            <ModalBody className='max-h-[90dvh] overflow-y-auto'>
                <CharacterDetailsCard character={character} variant='full' />
            </ModalBody>
        </Modal>
    );
}
