// -Path: "TeaChoco-Portfolio/client/src/pages/contact/content/ContactGrid.tsx"
import ContactCard from './ContactCard';
import { contactMethods } from '~/data/contact';

export default function ContactGrid() {
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
            {contactMethods.map((method, index) => (
                <ContactCard key={method.label} index={index} method={method} />
            ))}
        </div>
    );
}
