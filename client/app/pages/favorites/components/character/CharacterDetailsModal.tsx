import { FaHeart } from 'react-icons/fa6';
import type { CharacterItem } from '~/types/favorites';
import { Modal, ModalBody, ModalHeader } from '~/components/custom/Modal';
import CharacterDetailsCard from './CharacterDetailsCard';

interface CharacterDetailsModalProps {
    isOpen: boolean;
    character: CharacterItem;
    onClose: () => void;
}

export default function CharacterDetailsModal({ isOpen, character, onClose }: CharacterDetailsModalProps) {
    return (
        <Modal isOpen={isOpen} onClose={onClose} size='md'>
            <ModalHeader
                title={character.name}
                icon={<FaHeart aria-hidden='true' />}
                onClose={onClose}
            />
            <ModalBody className='max-h-[70dvh] overflow-y-auto'>
                <CharacterDetailsCard character={character} variant='full' />
            </ModalBody>
        </Modal>
    );
}
