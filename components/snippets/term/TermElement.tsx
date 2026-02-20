import {Term, TermType} from "@/types";
import Image from "next/image";

import styles from './termelement.module.css';

const TermElement = ({ element }: { element: Term }) => {
    if(element.type === TermType.IMAGE && element.resource) {
        return (
            <Image src={element.resource} alt={element.term} className={styles.image} />
        )
    }

    if(element.note) {
        return (
            <span title={element.note} className={styles.term}>
                {element.term}{' '}
            </span>
        );
    }

    return <span>{element.term}{' '}</span>
}

export default TermElement;